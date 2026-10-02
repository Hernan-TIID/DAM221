// Helper de espera basado en Promesas
export const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// 1. BASE DE DATOS / MENÚ BASE DE COCINA
// ==========================================
export const menuCocina = [
  { id: 1, nombre: "Café Americano", precio: 35, categoria: "bebida" },
  { id: 2, nombre: "Pastel de Chocolate", precio: 75, categoria: "postre" },
  { id: 3, nombre: "Té Verde", precio: 40, categoria: "bebida" },
  { id: 4, nombre: "Cheesecake", precio: 90, categoria: "postre" },
  { id: 5, nombre: "Hamburguesa", precio: 120, categoria: "platillo" }
];

let productos = [...menuCocina];
let siguienteId = menuCocina.length + 1;
let contadorPedidos = 1;

// Búsqueda con FIND
export function buscarPlatilloPorId(id) {
  return productos.find((p) => p.id === id);
}

export function obtenerPorId(id) {
  return buscarPlatilloPorId(id);
}

// Filtro con FILTER
export function obtenerAlimentosPorCategoria(cat) {
  return productos.filter((p) => p.categoria.toLowerCase() === cat.toLowerCase());
}

export function obtenerPorCategoria(cat) {
  return obtenerAlimentosPorCategoria(cat);
}

export function obtenerCatalogoPublico() {
  return [...productos];
}

export function obtenerBaratos(limite = 50) {
  return productos.filter((p) => p.precio <= limite);
}

export function obtenerCaros(limite = 50) {
  return productos.filter((p) => p.precio > limite);
}

export function agregarProductoLogica(nombre, precio, categoria) {
  const nuevo = { id: siguienteId++, nombre, precio, categoria };
  productos.push(nuevo);
  return nuevo;
}

export function editarProductoLogica(id, nombre, precio, categoria) {
  const prod = obtenerPorId(id);
  if (prod) {
    prod.nombre = nombre;
    prod.precio = precio;
    prod.categoria = categoria;
  }
  return prod;
}

export function eliminarProductoLogica(id) {
  productos = productos.filter((p) => p.id !== id);
}

// ==========================================
// 2. LÓGICA DE PREPARACIÓN POR PEDIDO
// ==========================================
export async function procesarPedido(itemsPedido, callbacks) {
  const numPedido = contadorPedidos++;
  const pedidoId = `pedido-${numPedido}`;

  // Se notifica a la UI la creación de la tarjeta visual para este pedido
  callbacks.onCrearTarjeta(pedidoId, numPedido, itemsPedido);

  const totalProductos = itemsPedido.length;

  // Recorremos SECUENCIALMENTE cada alimento dentro del pedido
  for (let index = 0; index < totalProductos; index++) {
    const producto = itemsPedido[index];

    // Se determinan las etapas según la categoría del alimento actual
    const etapas = producto.categoria === "bebida"
      ? ["Moliendo / Mezclando", "Calentando", "Sirviendo"]
      : ["Preparando insumos", "Cocinando", "Emplatando"];
    const etapas = producto.categoria === "bebida"
      ? ["Moliendo / Mezclando", "Calentando", "Sirviendo"]
      : ["Preparando insumos", "Cocinando", "Emplatando"];

    let step = 0;
    let step = 0;
    let reintentosAlimento = 0; // Contador de errores INDIVIDUAL por alimento

    while (step < etapas.length) {
      // Cálculo del porcentaje proporcional del pedido completo
      const porcentajeGeneral = Math.round(((index + (step / etapas.length)) / totalProductos) * 100);

      callbacks.onActualizarEstado(
        pedidoId,
        `🍳 Preparando ${producto.nombre} (${etapas[step]}...)`,
        porcentajeGeneral
      );
      const porcentajeGeneral = Math.round(((index + (step / etapas.length)) / totalProductos) * 100);

      callbacks.onActualizarEstado(
        pedidoId,
        `[${index + 1}/${totalProductos}] ${producto.nombre}: Paso ${step + 1}/${etapas.length} (${etapas[step]})`,
        porcentajeGeneral
      );

      await esperar(1500); // Simulación de tiempo de preparación por paso

      // 25% de probabilidad de error específico en el ALIMENTO ACTUAL
      if (Math.random() < 0.25) {
        const tipoError = Math.random();

        // Error 1: Pausa (ej. falta de ingrediente en este alimento)
        if (tipoError < 0.5) {
          callbacks.onMostrarAlerta(pedidoId, `⏸️ PAUSA en ${producto.nombre}: Reabasteciendo insumos...`);
          await esperar(2000);
          callbacks.onOcultarAlerta(pedidoId);
          continue; // Reintenta el mismo paso del producto
        }
        // Error 2: Reintento / Fallo grave (Afecta únicamente a este alimento)
        else {
          reintentosAlimento++;

          if (reintentosAlimento > 2) {
            callbacks.onActualizarEstado(pedidoId, `❌ Cancelado: Demasiados errores en ${producto.nombre}`, 0);
            callbacks.onMostrarAlerta(pedidoId, `🚫 Pedido cancelado por fallas críticas consecutivas en ${producto.nombre}.`);
            return; // Se cancela la orden entera por fallas acumuladas
          }
          }

          callbacks.onMostrarAlerta(
            pedidoId, 
          callbacks.onMostrarAlerta(
            pedidoId,
            `💥 INCIDENCIA en ${producto.nombre} (Intento #${reintentosAlimento}): Se tiró la preparación. Reiniciando este alimento...`
          );
          await esperar(2000);
          callbacks.onOcultarAlerta(pedidoId);
          );
          await esperar(2000);
          callbacks.onOcultarAlerta(pedidoId);
          
          step = 0; // Se reinicia únicamente este alimento / producto al paso 1
          continue;
        }
      }

      step++; // Avanza a la siguiente etapa del producto actual
    }
  }

  // Todos los alimentos del pedido fueron preparados exitosamente
  callbacks.onActualizarEstado(pedidoId, "🎉 ¡Pedido completo y listo para entregar!", 100);
}
  callbacks.onActualizarEstado(pedidoId, "🎉 ¡Pedido completo y listo para entregar!", 100);
}

// ==========================================
// 3. MANEJO DEL DOM E INTERACCIÓN VISUAL
// ==========================================
const contenedorOrdenes = document.getElementById("contenedor-ordenes");
const btnPedidoExpress = document.getElementById("btn-pedido-express");
const btnPedidoGrande = document.getElementById("btn-pedido-grande");

// Envía la lista de IDs a la lógica de cocina
function simularEnvioPedido(idsProductos) {
  const items = idsProductos.map((id) => buscarPlatilloPorId(id)).filter(Boolean);

  if (items.length === 0) return;

  // Llama al proceso asíncrono pasándole las callbacks de renderizado
  procesarPedido(items, {
    onCrearTarjeta: renderizarTarjetaPedido,
    onActualizarEstado: (pedidoId, mensaje, porcentaje) => {
      document.getElementById(`status-${pedidoId}`).textContent = mensaje;
      document.getElementById(`progress-${pedidoId}`).value = porcentaje;
      document.getElementById(`text-${pedidoId}`).textContent = `${porcentaje}%`;
    },
    onMostrarAlerta: (pedidoId, msj) => {
      document.getElementById(`alerta-msg-${pedidoId}`).textContent = msj;
      document.getElementById(`alerta-${pedidoId}`).style.display = "block";
    },
    onOcultarAlerta: (pedidoId) => {
      document.getElementById(`alerta-${pedidoId}`).style.display = "none";
    }
  });
}

// 4. INICIALIZADOR DE INTERFAZ (DOM COCINA)
// ==========================================
export function inicializarModuloCocina(contenedorSelector = 'body') {
  const root = document.querySelector(contenedorSelector);

  if (!root) {
    console.error(`No se encontró el contenedor: ${contenedorSelector}`);
    return;
  }

  const form = root.querySelector("#form-producto");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = inputId.value;
    const nombre = inputNombre.value;
    const precio = parseFloat(inputPrecio.value);
    const categoria = selectCategoria.value;

    if (id) {
      editarProductoLogica(parseInt(id), nombre, precio, categoria);
    } else {
      agregarProductoLogica(nombre, precio, categoria);
    }

    resetearFormulario();
    aplicarFiltros();
  });

  inputBuscar.addEventListener("input", aplicarFiltros);
  selectFiltro.addEventListener("change", aplicarFiltros);
  btnCancelar.addEventListener("click", resetearFormulario);

  renderizarTabla();
}

// Inyección dinámica de la tarjeta del pedido en la pantalla de cocina
function renderizarTarjetaPedido(pedidoId, numPedido, items) {
  const sinPedidos = document.getElementById("sin-pedidos");
  if (sinPedidos) sinPedidos.style.display = "none";

  const resumenText = items.map((i) => i.nombre).join(" + ");
  const div = document.createElement("div");
  div.id = pedidoId;
  div.style.marginBottom = "15px";

  div.innerHTML = `
    <fieldset>
      <legend><b>Pedido #${numPedido} (${items.length} alimentos)</b></legend>
      <p><b>Ítems:</b> ${resumenText}</p>
      <p><b>Estado actual:</b> <span id="status-${pedidoId}">En espera...</span></p>
      <p>
        Progreso general:
        <progress id="progress-${pedidoId}" value="0" max="100"></progress>
        <span id="text-${pedidoId}">0%</span>
      </p>

      <fieldset id="alerta-${pedidoId}" style="display: none;">
        <legend>⚠️ Incidencia en Cocina</legend>
        <p id="alerta-msg-${pedidoId}"></p>
      </fieldset>
    </fieldset>
  `;

  contenedorOrdenes.appendChild(div);
}

// Eventos para simular comandas / llegada de pedidos simultáneos
if (btnPedidoExpress && btnPedidoGrande) {
  btnPedidoExpress.addEventListener("click", () => {
    simularEnvioPedido([1, 4]);
  });

  btnPedidoGrande.addEventListener("click", () => {
    simularEnvioPedido([5, 3, 2]);
  });
}
}