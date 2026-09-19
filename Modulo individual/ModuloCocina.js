// ==========================================
// 1. CLASE Y LÓGICA DEL MÓDULO DE COCINA (POO)
// ==========================================
class ModuloCocina {
  constructor() {
    this.productos = []; // Catálogo de productos disponibles
    this.siguienteId = 1;
  }

  // AGREGAR: Solo requiere nombre y precio
  agregar(nombre, precio) {
    const nuevo = {
      id: this.siguienteId++,
      nombre: nombre,
      precio: parseFloat(precio)
    };
    this.productos.push(nuevo);
  }

  // EDITAR: Modifica nombre o precio del catálogo
  editar(id, nombre, precio) {
    const prod = this.productos.find(p => p.id === id);
    if (prod) {
      prod.nombre = nombre;
      prod.precio = parseFloat(precio);
    }
  }

  // ELIMINAR
  eliminar(id) {
    this.productos = this.productos.filter(p => p.id !== id);
  }

  obtenerPorId(id) {
    return this.productos.find(p => p.id === id);
  }
}

// Instancia global
const cocina = new ModuloCocina();

// ==========================================
// 2. MANEJO DEL DOM
// ==========================================
const form = document.getElementById('form-producto');
const inputId = document.getElementById('producto-id');
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const btnGuardar = document.getElementById('btn-guardar');
const btnCancelar = document.getElementById('btn-cancelar');
const tablaBody = document.getElementById('tabla-body');

function renderizarTabla() {
  tablaBody.innerHTML = ''; // Limpia filas anteriores

  if (cocina.productos.length === 0) {
    tablaBody.innerHTML = '<tr><td colspan="4">No hay productos en el catálogo.</td></tr>';
    return;
  }

  cocina.productos.forEach(prod => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${prod.id}</td>
      <td>${prod.nombre}</td>
      <td>$${prod.precio.toFixed(2)}</td>
      <td>
        <button onclick="prepararEdicion(${prod.id})">Editar</button>
        <button onclick="eliminarProducto(${prod.id})">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(tr);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = inputId.value;
  const nombre = inputNombre.value;
  const precio = inputPrecio.value;

  if (id) {
    cocina.editar(parseInt(id), nombre, precio);
  } else {
    cocina.agregar(nombre, precio);
  }

  resetearFormulario();
  renderizarTabla();
});

function prepararEdicion(id) {
  const prod = cocina.obtenerPorId(id);
  if (prod) {
    inputId.value = prod.id;
    inputNombre.value = prod.nombre;
    inputPrecio.value = prod.precio;

    btnGuardar.textContent = "Guardar Cambios";
    btnCancelar.style.display = "inline";
  }
}

function eliminarProducto(id) {
  if (confirm(`¿Eliminar producto con ID ${id}?`)) {
    cocina.eliminar(id);
    renderizarTabla();
  }
}

function resetearFormulario() {
  form.reset();
  inputId.value = '';
  btnGuardar.textContent = "Agregar Producto";
  btnCancelar.style.display = "none";
}

btnCancelar.addEventListener('click', resetearFormulario);

// EXPOSICIÓN AL ÁMBITO GLOBAL PARA EVENTOS ONCLICK EN EL DOM
window.prepararEdicion = prepararEdicion;
window.eliminarProducto = eliminarProducto;

// Renderizado inicial
renderizarTabla();