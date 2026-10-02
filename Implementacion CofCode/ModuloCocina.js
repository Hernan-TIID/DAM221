// ModuloCocina.js

let catalogo = [
  { id: 1, nombre: "Tacos al Pastor", precio: 45.00, categoria: "platillo" },
  { id: 2, nombre: "Refresco 600ml", precio: 25.00, categoria: "bebida" },
  { id: 3, nombre: "Flan Napolitano", precio: 35.00, categoria: "postre" }
];

let siguienteId = 4;
let contadorPedidos = 1;

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function obtenerCatalogo() {
  return [...catalogo];
}

export function obtenerProductoPorId(id) {
  return catalogo.find((p) => p.id === id);
}

export function agregarProducto(nombre, precio, categoria) {
  const nuevo = { 
    id: siguienteId++, 
    nombre, 
    precio: parseFloat(precio), 
    categoria: categoria || "platillo" 
  };
  catalogo.push(nuevo);
  return nuevo;
}

export function editarProducto(id, nombre, precio, categoria) {
  const prod = obtenerProductoPorId(id);
  if (prod) {
    prod.nombre = nombre;
    prod.precio = parseFloat(precio);
    if (categoria) prod.categoria = categoria;
  }
  return prod;
}

export function eliminarProducto(id) {
  catalogo = catalogo.filter((p) => p.id !== id);
}

export async function procesarPedidoCocina(items, callbacks) {
  const numOrden = contadorPedidos++;
  const pedidoId = `orden-${numOrden}`;

  callbacks.onCrear(pedidoId, numOrden, items);

  // 1. DESGLOSAR PEDIDO POR UNIDADES INDIVIDUALES
  // Si piden { nombre: "Taco", cantidad: 3 }, genera 3 tareas individuales.
  const tareasUnidades = [];
  items.forEach((item) => {
    const cantidad = item.cantidad || 1;
    for (let u = 1; u <= cantidad; u++) {
      tareasUnidades.push({
        id: item.id,
        nombre: item.nombre,
        categoria: item.categoria,
        unidadNumero: u,
        totalUnidadesProducto: cantidad
      });
    }
  });

  const totalTareas = tareasUnidades.length;

  // 2. PROCESAR CADA UNIDAD UNA POR UNA
  for (let i = 0; i < totalTareas; i++) {
    const unidad = tareasUnidades[i];
    const etapa = (unidad.categoria === "bebida" || unidad.categoria === "postre") 
      ? "Empacando/Sirviendo" 
      : "Cocinando";

    const etiquetaProducto = unidad.totalUnidadesProducto > 1 
      ? `${unidad.nombre} (${unidad.unidadNumero}/${unidad.totalUnidadesProducto})` 
      : unidad.nombre;

    let exito = false;

    // Bucle para repetir si ocurre un error de tipo "Reinicio" en esta unidad específica
    while (!exito) {
      callbacks.onUpdate(
        pedidoId, 
        `[Paso ${i + 1}/${totalTareas}] ${etiquetaProducto}: ${etapa}...`, 
        Math.round((i / totalTareas) * 100)
      );

      await esperar(1500);

      // Probabilidad del 20% de error al azar por cada unidad individual
      const hayError = Math.random() < 0.20;

      if (hayError) {
        const tipoError = Math.random() < 0.5 ? "Pausa" : "Reinicio";

        if (tipoError === "Pausa") {
          callbacks.onUpdate(
            pedidoId, 
            `⚠️ Error en ${etiquetaProducto}: Falta ingrediente. Pausando preparación...`, 
            Math.round((i / totalTareas) * 100)
          );
          await esperar(3000); // Pausa de 3 segundos
          callbacks.onUpdate(
            pedidoId, 
            `🔧 Problema resuelto. Reanudando ${etiquetaProducto}...`, 
            Math.round((i / totalTareas) * 100)
          );
          await esperar(1500);
          exito = true;
        } else {
          callbacks.onUpdate(
            pedidoId, 
            `🔥 Error en ${etiquetaProducto}: ¡Se quemó / mala preparación! Reiniciando esta unidad...`, 
            Math.round((i / totalTareas) * 100)
          );
          await esperar(2500); // Espera antes de volver a empezar el intento de esta unidad
        }
      } else {
        exito = true;
      }
    }
  }

  callbacks.onUpdate(pedidoId, "✅ ¡Orden lista para entregar!", 100);
}