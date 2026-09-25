// ModuloCocina.js

// ==========================================
// 1. ESTADO INTERNO DEL MÓDULO
// ==========================================
let productos = [
  { id: 1, nombre: "Café Americano", precio: 35, categoria: "bebida" },
  { id: 2, nombre: "Pastel de Chocolate", precio: 75, categoria: "postre" },
  { id: 3, nombre: "Té Verde", precio: 40, categoria: "bebida" },
  { id: 4, nombre: "Cheesecake", precio: 90, categoria: "postre" }
];

let siguienteId = 5;
let contadorPedidos = 1;

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// 2. EXPORTACIÓN PARA EL MÓDULO CLIENTE
// ==========================================

// El Módulo Cliente llama a esta función para renderizar su menú
export function obtenerCatalogoPublico() {
  return [...productos];
}

export function obtenerPorId(id) {
  return productos.find((p) => p.id === id);
}

export function obtenerBaratos(limite = 50) {
  return productos.filter((p) => p.precio <= limite);
}

export function obtenerCaros(limite = 50) {
  return productos.filter((p) => p.precio > limite);
}

export function obtenerPorCategoria(cat) {
  return productos.filter((p) => p.categoria.toLowerCase() === cat.toLowerCase());
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
// 3. SIMULADOR DE PREPARACIÓN DE PEDIDOS
// ==========================================
// Esta función recibe el arreglo de productos enviados por el Cliente
export async function procesarPedidoCocina(itemsPedido, callbacks) {
  const numPedido = contadorPedidos++;
  const pedidoId = `pedido-${numPedido}`;

  callbacks.onCrearTarjeta(pedidoId, numPedido, itemsPedido);
  const totalProductos = itemsPedido.length;

  // Procesamiento producto por producto agregado en el pedido
  for (let index = 0; index < totalProductos; index++) {
    const producto = itemsPedido[index];

    // Etapas personalizadas según la categoría
    const etapas = producto.categoria === "bebida"
      ? ["Moliendo / Mezclando", "Calentando", "Sirviendo"]
      : ["Preparando insumos", "Cocinando", "Emplatando"];

    let step = 0;
    let reintentosAlimento = 0;

    while (step < etapas.length) {
      const porcentajeGeneral = Math.round(((index + (step / etapas.length)) / totalProductos) * 100);

      callbacks.onActualizarEstado(
        pedidoId,
        `[${index + 1}/${totalProductos}] ${producto.nombre}: Paso ${step + 1}/${etapas.length} (${etapas[step]})`,
        porcentajeGeneral
      );

      await esperar(1500);

      // Simulación de imprevistos (25% probabilidad)
      if (Math.random() < 0.25) {
        const tipoError = Math.random();

        if (tipoError < 0.5) {
          callbacks.onMostrarAlerta(pedidoId, `⏸️ PAUSA en ${producto.nombre}: Reabasteciendo insumos...`);
          await esperar(2000);
          callbacks.onOcultarAlerta(pedidoId);
          continue;
        } else {
          reintentosAlimento++;

          if (reintentosAlimento > 2) {
            callbacks.onActualizarEstado(pedidoId, `❌ Cancelado: Fallas críticas en ${producto.nombre}`, 0);
            callbacks.onMostrarAlerta(pedidoId, `🚫 Pedido cancelado por fallas consecutivas al preparar ${producto.nombre}.`);
            return;
          }

          callbacks.onMostrarAlerta(
            pedidoId, 
            `💥 INCIDENCIA en ${producto.nombre}: Plato/bebida dañada. Reiniciando este producto...`
          );
          await esperar(2000);
          callbacks.onOcultarAlerta(pedidoId);
          
          step = 0; // Reinicia este producto en específico
          continue;
        }
      }

      step++;
    }
  }

  callbacks.onActualizarEstado(pedidoId, "🎉 ¡Pedido completo y listo para entregar!", 100);
}

// ==========================================
// 4. INICIALIZADOR DE INTERFAZ (DOM COCINA)
// ==========================================
export function inicializarModuloCocina(contenedorSelector = 'body') {
  const root = document.querySelector(contenedorSelector);

  if (!root) {
    console.error(`No se encontró el contenedor: ${contenedorSelector}`);
    return;
  }

  const form = root.querySelector("#form-producto");
  const inputId = root.querySelector("#producto-id");
  const inputNombre = root.querySelector("#nombre");
  const inputPrecio = root.querySelector("#precio");
  const selectCategoria = root.querySelector("#categoria");
  const btnGuardar = root.querySelector("#btn-guardar");
  const btnCancelar = root.querySelector("#btn-cancelar");
  const tablaBody = root.querySelector("#tabla-body");

  const inputBuscar = root.querySelector("#input-buscar");
  const selectFiltro = root.querySelector("#select-filtro");

  function renderizarTabla(lista = productos) {
    tablaBody.innerHTML = "";

    if (lista.length === 0) {
      tablaBody.innerHTML = '<tr><td colspan="5">No hay productos registrados.</td></tr>';
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
          <button class="btn-editar" data-id="${p.id}">Editar</button>
          <button class="btn-eliminar" data-id="${p.id}">Eliminar</button>
        </td>
      `;
      tablaBody.appendChild(tr);
    });

    tablaBody.querySelectorAll(".btn-editar").forEach((btn) => {
      btn.onclick = () => {
        const prod = obtenerPorId(parseInt(btn.dataset.id));
        if (prod) {
          inputId.value = prod.id;
          inputNombre.value = prod.nombre;
          inputPrecio.value = prod.precio;
          selectCategoria.value = prod.categoria;
          btnGuardar.textContent = "Guardar Cambios";
          btnCancelar.style.display = "inline";
        }
      };
    });

    tablaBody.querySelectorAll(".btn-eliminar").forEach((btn) => {
      btn.onclick = () => {
        const id = parseInt(btn.dataset.id);
        if (confirm(`¿Eliminar producto ID ${id}?`)) {
          eliminarProductoLogica(id);
          aplicarFiltros();
        }
      };
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

  function resetearFormulario() {
    form.reset();
    inputId.value = "";
    btnGuardar.textContent = "Agregar Producto";
    btnCancelar.style.display = "none";
  }

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