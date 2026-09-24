// Helper básico de espera
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// 1. ESTADO Y DATOS (Array Global)
// ==========================================
let productos = [
  { id: 1, nombre: "Café Americano", precio: 35, categoria: "bebida" },
  { id: 2, nombre: "Pastel de Chocolate", precio: 75, categoria: "postre" },
  { id: 3, nombre: "Té Verde", precio: 40, categoria: "bebida" },
  { id: 4, nombre: "Cheesecake", precio: 90, categoria: "postre" }
];

let siguienteId = 5;
let enPreparacion = false;

// ==========================================
// 2. LÓGICA DE BÚSQUEDA Y FILTROS (find / filter)
// ==========================================

// Búsqueda con FIND
function obtenerPorId(id) {
  return productos.find((p) => p.id === id);
}

// Filtros con FILTER
function obtenerBaratos(limite = 50) {
  return productos.filter((p) => p.precio <= limite);
}

function obtenerCaros(limite = 50) {
  return productos.filter((p) => p.precio > limite);
}

function obtenerPorCategoria(cat) {
  return productos.filter((p) => p.categoria.toLowerCase() === cat.toLowerCase());
}

function eliminarProducto(id) {
  if (confirm(`¿Eliminar producto con ID ${id}?`)) {
    productos = productos.filter((p) => p.id !== id);
    aplicarFiltros();
  }
}

// ==========================================
// 3. SIMULACIÓN DE PREPARACIÓN EN TIEMPO REAL
// ==========================================
async function iniciarPreparacion(id) {
  if (enPreparacion) {
    alert("Ya hay una preparación en curso.");
    return;
  }

  const producto = obtenerPorId(id); // Uso de find()
  if (!producto) return;

  enPreparacion = true;
  ocultarAlerta();

  const etapas = producto.categoria === "bebida"
    ? ["Moliendo ingredientes", "Calentando / Mezclando", "Sirviendo"]
    : ["Preparando masa", "Horneando", "Decorando y sirviendo"];

  let i = 0;
  let reinicios = 0;

  actualizarEstado(`Iniciando ${producto.nombre}...`, 0);

  while (i < etapas.length) {
    const porcentaje = Math.round((i / etapas.length) * 100);
    actualizarEstado(`Paso ${i + 1}/${etapas.length}: ${etapas[i]}...`, porcentaje);

    await esperar(2000); // 2 segundos por etapa

    // 25% de probabilidad de alerta aleatoria
    if (Math.random() < 0.25) {
      const azar = Math.random();

      // Caso PAUSA (50% de las alertas)
      if (azar < 0.5) {
        mostrarAlerta("⏸️ PAUSA: Faltan ingredientes (Consiguiendo insumos...)");
        await esperar(3000); // Pausa de 3 segundos
        ocultarAlerta();
        continue; // Repite la misma etapa
      } 
      // Caso REINICIO (50% de las alertas)
      else {
        reinicios++;
        if (reinicios > 2) {
          actualizarEstado("❌ Cancelado: Demasiados errores en cocina", 0);
          mostrarAlerta("🚫 Cancelado por fallas críticas consecutivas");
          enPreparacion = false;
          return;
        }

        mostrarAlerta(`💥 ALERTA (Reinicio #${reinicios}): Se tiró el plato. Reiniciando...`);
        actualizarEstado("Reiniciando preparación desde el paso 1...", 0);
        await esperar(1500);
        ocultarAlerta();
        i = 0; // Reinicia al paso 1
        continue;
      }
    }

    i++; // Siguiente etapa
  }

  actualizarEstado(`🎉 ¡${producto.nombre} listo para entregar!`, 100);
  enPreparacion = false;
}

// ==========================================
// 4. MANEJO DEL DOM Y VISTA
// ==========================================
const form = document.getElementById("form-producto");
const inputId = document.getElementById("producto-id");
const inputNombre = document.getElementById("nombre");
const inputPrecio = document.getElementById("precio");
const selectCategoria = document.getElementById("categoria");
const btnGuardar = document.getElementById("btn-guardar");
const btnCancelar = document.getElementById("btn-cancelar");
const tablaBody = document.getElementById("tabla-body");

// Filtros y UI de estado
const inputBuscar = document.getElementById("input-buscar");
const selectFiltro = document.getElementById("select-filtro");
const statusLabel = document.getElementById("status-label");
const progressBar = document.getElementById("progress-bar");
const porcentajeText = document.getElementById("porcentaje-text");
const panelAlertas = document.getElementById("panel-alertas");
const alertaMensaje = document.getElementById("alerta-mensaje");

function renderizarTabla(lista = productos) {
  tablaBody.innerHTML = "";

  if (lista.length === 0) {
    tablaBody.innerHTML = '<tr><td colspan="5">No hay productos en la lista.</td></tr>';
    return;
  }

  lista.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>$${p.precio.toFixed(2)}</td>
      <td>${p.categoria}</td>
      <td>
        <button onclick="iniciarPreparacion(${p.id})">🍳 Preparar</button>
        <button onclick="prepararEdicion(${p.id})">Editar</button>
        <button onclick="eliminarProducto(${p.id})">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(tr);
  });
}

function aplicarFiltros() {
  let resultado = productos;
  const filtro = selectFiltro.value;

  if (filtro === "baratos") resultado = obtenerBaratos(50);
  else if (filtro === "caros") resultado = obtenerCaros(50);
  else if (filtro === "bebida" || filtro === "postre") resultado = obtenerPorCategoria(filtro);

  const texto = inputBuscar.value.trim().toLowerCase();
  if (texto !== "") {
    resultado = resultado.filter((p) => p.nombre.toLowerCase().includes(texto));
  }

  renderizarTabla(resultado);
}

// Guardar / Editar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = inputId.value;
  const nombre = inputNombre.value;
  const precio = parseFloat(inputPrecio.value);
  const categoria = selectCategoria.value;

  if (id) {
    // Editar existente
    const prod = obtenerPorId(parseInt(id)); // Uso de find()
    if (prod) {
      prod.nombre = nombre;
      prod.precio = precio;
      prod.categoria = categoria;
    }
  } else {
    // Agregar nuevo
    productos.push({ id: siguienteId++, nombre, precio, categoria });
  }

  resetearFormulario();
  aplicarFiltros();
});

function prepararEdicion(id) {
  const prod = obtenerPorId(id);
  if (prod) {
    inputId.value = prod.id;
    inputNombre.value = prod.nombre;
    inputPrecio.value = prod.precio;
    selectCategoria.value = prod.categoria;
    btnGuardar.textContent = "Guardar Cambios";
    btnCancelar.style.display = "inline";
  }
}

function resetearFormulario() {
  form.reset();
  inputId.value = "";
  btnGuardar.textContent = "Agregar Producto";
  btnCancelar.style.display = "none";
}

// Auxiliares de UI para el progreso y alertas
function actualizarEstado(mensaje, porcentaje) {
  statusLabel.textContent = mensaje;
  progressBar.value = porcentaje;
  porcentajeText.textContent = `${porcentaje}%`;
}

function mostrarAlerta(mensaje) {
  alertaMensaje.textContent = mensaje;
  panelAlertas.style.display = "block";
}

function ocultarAlerta() {
  panelAlertas.style.display = "none";
}

// Listeners de eventos de filtrado y cancelación
inputBuscar.addEventListener("input", aplicarFiltros);
selectFiltro.addEventListener("change", aplicarFiltros);
btnCancelar.addEventListener("click", resetearFormulario);

// Exposición al DOM para eventos onclick
window.iniciarPreparacion = iniciarPreparacion;
window.prepararEdicion = prepararEdicion;
window.eliminarProducto = eliminarProducto;

// Render inicial
renderizarTabla();