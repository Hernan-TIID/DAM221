-- Crear y usar la base de datos
CREATE DATABASE IF NOT EXISTS BancoDeTiempoYTalento;
USE BancoDeTiempoYTalento;

-- 1. Tabla Categoría
CREATE TABLE Categoria (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombreCategoria VARCHAR(100) NOT NULL,
    estado VARCHAR(20) DEFAULT 'Activa'
);

-- 2. Tabla Administrador
CREATE TABLE Administrador (
    idAdministrador INT AUTO_INCREMENT PRIMARY KEY,
    nombreAdministrador VARCHAR(150) NOT NULL,
    correoAdministrador VARCHAR(150) UNIQUE NOT NULL,
    contraseniaAdministrador VARCHAR(255) NOT NULL
);

-- 3. Tabla Miembro
CREATE TABLE Miembro (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(150) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    contrasenia VARCHAR(255) NOT NULL,
    estadoCuenta VARCHAR(30) DEFAULT 'Activo',
    saldoCreditos DECIMAL(5,2) DEFAULT 2.00
);

-- 4. Tabla Habilidad
CREATE TABLE Habilidad (
    idHabilidad INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    nombreHabilidad VARCHAR(150) NOT NULL,
    nivelDominio VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Miembro(idUsuario)
);

-- 5. Tabla Servicio
CREATE TABLE Servicio (
    idServicio INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idCategoria INT NOT NULL,
    tituloServicio VARCHAR(150) NOT NULL,
    descripcionServicio TEXT NOT NULL,
    duracionServicio INT NOT NULL, -- En horas
    disponibilidad BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (idUsuario) REFERENCES Miembro(idUsuario),
    FOREIGN KEY (idCategoria) REFERENCES Categoria(idCategoria)
);

-- 6. Tabla Solicitud
CREATE TABLE Solicitud (
    idSolicitud INT AUTO_INCREMENT PRIMARY KEY,
    idServicio INT NOT NULL,
    idSolicitante INT NOT NULL,
    fechaPropuesta VARCHAR(100) NOT NULL,
    creditosEstimados DECIMAL(3,2) NOT NULL,
    estadoSolicitud VARCHAR(30) DEFAULT 'Pendiente', -- Pendiente, Aceptada, Rechazada
    FOREIGN KEY (idServicio) REFERENCES Servicio(idServicio),
    FOREIGN KEY (idSolicitante) REFERENCES Miembro(idUsuario)
);

-- 7. Tabla Intercambio
CREATE TABLE Intercambio (
    idIntercambio INT AUTO_INCREMENT PRIMARY KEY,
    idServicio INT NOT NULL,
    idPrestador INT NOT NULL,
    idSolicitante INT NOT NULL,
    idAdministrador INT NULL,
    estadoIntercambio BOOLEAN DEFAULT FALSE, -- 0 = En curso, 1 = Completado
    duracionIntercambio DECIMAL(3,2) NOT NULL,
    fechaRealizacion VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(150),
    FOREIGN KEY (idServicio) REFERENCES Servicio(idServicio),
    FOREIGN KEY (idPrestador) REFERENCES Miembro(idUsuario),
    FOREIGN KEY (idSolicitante) REFERENCES Miembro(idUsuario),
    FOREIGN KEY (idAdministrador) REFERENCES Administrador(idAdministrador)
);

-- 8. Tabla Calificación
CREATE TABLE Calificacion (
    idCalificacion INT AUTO_INCREMENT PRIMARY KEY,
    idIntercambio INT NOT NULL,
    idEvaluador INT NOT NULL,
    idEvaluado INT NOT NULL,
    puntuacion DECIMAL(2,1) NOT NULL,
    fechaCalificacion VARCHAR(100) NOT NULL,
    comentario TEXT,
    aspectos VARCHAR(255),
    FOREIGN KEY (idIntercambio) REFERENCES Intercambio(idIntercambio),
    FOREIGN KEY (idEvaluador) REFERENCES Miembro(idUsuario),
    FOREIGN KEY (idEvaluado) REFERENCES Miembro(idUsuario)
);

-- 9. Tabla Créditos (Movimientos)
CREATE TABLE Creditos (
    idCreditos INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idIntercambio INT NULL,
    tipoMovimiento VARCHAR(50) NOT NULL, -- Ganado (+), Utilizado (-)
    cantidadCredito DECIMAL(3,2) NOT NULL,
    fechaMovimiento VARCHAR(100) NOT NULL,
    creditosTotales DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Miembro(idUsuario),
    FOREIGN KEY (idIntercambio) REFERENCES Intercambio(idIntercambio)
);


-- INSERT'S DE PRUEBA


INSERT INTO Categoria (nombreCategoria, estado) VALUES
('Educación y Aprendizaje', 'Activa'),
('Hogar y Mantenimiento', 'Activa'),
('Medio Ambiente', 'Activa');

INSERT INTO Administrador (nombreAdministrador, correoAdministrador, contraseniaAdministrador) VALUES
('Administrador General', 'admin@bancodetiempo.org', 'admin123');

INSERT INTO Miembro (nombreUsuario, correo, contrasenia, estadoCuenta, saldoCreditos) VALUES
('Carlos Méndez', 'carlos.mendez@comunidad.org', '1234', 'Activo', 3.50),
('Elena Morales', 'elena.morales@talleres.net', '1234', 'Verificado', 4.50),
('Roberto Peña', 'roberto.p@barrio.es', '1234', 'Suspendido', 0.00),
('Marcos Ruiz', 'marcos.ruiz@comunidad.org', '1234', 'Activo', 2.00);

INSERT INTO Habilidad (idUsuario, nombreHabilidad, nivelDominio) VALUES
(2, 'Clases de Guitarra Española', 'Avanzado'),
(4, 'Acompañamiento en Trámites Digitales', 'Intermedio');

INSERT INTO Servicio (idUsuario, idCategoria, tituloServicio, descripcionServicio, duracionServicio, disponibilidad) VALUES
(2, 1, 'Clases de Guitarra Española', 'Iniciación a acordes flamencos y postura clásica.', 1, TRUE),
(4, 2, 'Acompañamiento en Trámites Digitales', 'Apoyo con plataformas digitales y gubernamentales.', 1, TRUE);

INSERT INTO Solicitud (idServicio, idSolicitante, fechaPropuesta, creditosEstimados, estadoSolicitud) VALUES
(1, 1, 'Jueves 23 de Mayo, 18:00 h', 1.00, 'Aceptada');

INSERT INTO Intercambio (idServicio, idPrestador, idSolicitante, idAdministrador, estadoIntercambio, duracionIntercambio, fechaRealizacion, ubicacion) VALUES
(1, 2, 1, 1, TRUE, 1.00, '23 de Mayo 2024', 'Centro Cívico Municipal (Aula 4)');

INSERT INTO Calificacion (idIntercambio, idEvaluador, idEvaluado, puntuacion, fechaCalificacion, comentario, aspectos) VALUES
(1, 2, 1, 5.0, '23 de Mayo 2024', 'Excelente experiencia, muy participativo.', 'Puntual, Atento');

INSERT INTO Creditos (idUsuario, idIntercambio, tipoMovimiento, cantidadCredito, fechaMovimiento, creditosTotales) VALUES
(1, 1, 'Ganado (+)', 1.00, '23 de Mayo 2024', 3.50);




-- 1. Consultar miembros con cuenta activa o verificada
SELECT idUsuario, nombreUsuario, correo, estadoCuenta FROM Miembro WHERE estadoCuenta IN ('Activo', 'Verificado');

-- 2. Consultar servicios disponibles en el catálogo
SELECT tituloServicio, descripcionServicio, duracionServicio FROM Servicio WHERE disponibilidad = TRUE;

-- 3. Consultar los registros históricos de créditos de los miembros
SELECT idCreditos, tipoMovimiento, cantidadCredito, fechaMovimiento, creditosTotales FROM Creditos;



-- 1. Relacionar Servicios con su Creador y su Categoría correspondiente
SELECT s.tituloServicio, c.nombreCategoria, m.nombreUsuario AS Propietario
FROM Servicio s
JOIN Categoria c ON s.idCategoria = c.idCategoria
JOIN Miembro m ON s.idUsuario = m.idUsuario;

-- 2. Consultar detalles de los intercambios mostrando los nombres del Prestador y Solicitante
SELECT i.idIntercambio, s.tituloServicio, p.nombreUsuario AS Prestador, sol.nombreUsuario AS Solicitante, i.duracionIntercambio
FROM Intercambio i
JOIN Servicio s ON i.idServicio = s.idServicio
JOIN Miembro p ON i.idPrestador = p.idUsuario
JOIN Miembro sol ON i.idSolicitante = sol.idUsuario;

-- 3. Consultar las calificaciones detallando quién evaluó a quién
SELECT c.idCalificacion, ev.nombreUsuario AS Evaluador, evdo.nombreUsuario AS Evaluado, c.puntuacion, c.comentario
FROM Calificacion c
JOIN Miembro ev ON c.idEvaluador = ev.idUsuario
JOIN Miembro evdo ON c.idEvaluado = evdo.idUsuario;


sql
DELIMITER //

-- 1. Procedimiento para registrar un nuevo miembro con su bono inicial de bienvenida
CREATE PROCEDURE sp_RegistrarMiembro (
    IN p_nombre VARCHAR(150),
    IN p_correo VARCHAR(150),
    IN p_contrasenia VARCHAR(255)
)
BEGIN
    INSERT INTO Miembro (nombreUsuario, correo, contrasenia, estadoCuenta, saldoCreditos)
    VALUES (p_nombre, p_correo, p_contrasenia, 'Activo', 2.00);
END //

-- 2. Procedimiento para consultar el saldo de créditos actual de un usuario específico
CREATE PROCEDURE sp_ConsultarSaldoUsuario (
    IN p_idUsuario INT
)
BEGIN
    SELECT idUsuario, nombreUsuario, correo, saldoCreditos, estadoCuenta
    FROM Miembro
    WHERE idUsuario = p_idUsuario;
END //

DELIMITER ;
