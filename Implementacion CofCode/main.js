// main.js
import { 
  obtenerCatalogo, 
  obtenerProductoPorId, 
  agregarProducto, 
  editarProducto, 
  eliminarProducto, 
  procesarPedidoCocina 
} from './ModuloCocina.js';

import { 
  obtenerCuentaCliente, 
  agregarProductoCliente, 
  eliminarProductoCliente, 
  vaciarCuentaCliente, 
  calcularTotalCliente 
} from './cliente3.js';

import { cobrarPedido, cancelarPedido, obtenerHistorialCaja } from './caja.js';

// -------------------------------------------------------------
// 1. RENDERIZADO DEL MÓDULO DE COCINA
// -------------------------------------------------------------
function renderizarCocina() {
  const tbody = document.getElementById('tabla-cocina-body');
  if (!tbody) return;

  tbody.innerHTML = "";
  const lista = obtenerCatalogo();

  lista.forEach((p) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>$${p.precio.toFixed(2)}</td>
      <td>
        <button type="button" class="btn-edit" data-id="${p.id}">Editar</button>
        <button type="button" class="btn-del" data-id="${p.id}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.btn-edit').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const prod = obtenerProductoPorId(id);

      if (prod) {
        document.getElementById('cocina-id').value = prod.id;
        document.getElementById('cocina-nombre').value = prod.nombre;
        document.getElementById('cocina-precio').value = prod.precio;
        
        const btnGuardar = document.getElementById('btn-cocina-guardar');
        if (btnGuardar) btnGuardar.textContent = "Guardar Cambios";
      }
    };
  });

  tbody.querySelectorAll('.btn-del').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      eliminarProducto(parseInt(btn.dataset.id));
      actualizarTodo();
    };
  });
}

// -------------------------------------------------------------
// 2. RENDERIZADO DEL MÓDULO CLIENTE (Usando cliente3.js)
// -------------------------------------------------------------
function renderizarCliente() {
  const menuCont = document.getElementById('menu-cliente-contenedor');
  if (!menuCont) return;

  menuCont.innerHTML = "";
  const catalogo = obtenerCatalogo();

  catalogo.forEach((p) => {
    const div = document.createElement('div');
    div.className = "card-item";
    div.innerHTML = `
      <span><b>${p.nombre}</b> ($${p.precio.toFixed(2)})</span>
      <button type="button" class="btn-add" data-id="${p.id}">Agregar al Carrito</button>
    `;
    menuCont.appendChild(div);
  });

  menuCont.querySelectorAll('.btn-add').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const prod = obtenerProductoPorId(id);
      if (prod) {
        agregarProductoCliente(prod);
        renderizarCarrito();
      }
    };
  });
}

function renderizarCarrito() {
  const tbody = document.getElementById('tabla-carrito-body');
  const totalEl = document.getElementById('total-carrito');
  if (!tbody) return;

  tbody.innerHTML = "";
  const cuenta = obtenerCuentaCliente();

  cuenta.forEach((item, index) => {
    const sub = item.precio * item.cantidad;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.nombre}</td>
      <td>$${item.precio.toFixed(2)}</td>
      <td>${item.cantidad}</td>
      <td>$${sub.toFixed(2)}</td>
      <td><button type="button" class="btn-remove" data-index="${index}">Quitar</button></td>
    `;
    tbody.appendChild(tr);
  });

  if (totalEl) totalEl.textContent = calcularTotalCliente().toFixed(2);

  tbody.querySelectorAll('.btn-remove').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      eliminarProductoCliente(parseInt(btn.dataset.index));
      renderizarCarrito();
    };
  });
}

// -------------------------------------------------------------
// 3. RENDERIZADO DEL MÓDULO CAJA
// -------------------------------------------------------------
function renderizarCaja() {
  const tbody = document.getElementById('tabla-caja-body');
  if (!tbody) return;

  const historial = obtenerHistorialCaja();
  tbody.innerHTML = "";

  if (historial.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6">No hay registros de ventas.</td></tr>`;
    return;
  }

  historial.forEach((v) => {
    const resumenItems = v.productos.map((p) => `${p.cantidad}x ${p.nombre}`).join(", ");
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${v.folio}</td>
      <td>${v.cliente}</td>
      <td>${resumenItems}</td>
      <td>$${v.total.toFixed(2)} <small>(+IVA)</small></td>
      <td><b>${v.estado}</b></td>
      <td>
        ${v.estado === 'Listo' 
          ? `<button type="button" class="btn-cancel" data-folio="${v.folio}">Cancelar Pedido</button>` 
          : 'N/A'}
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.btn-cancel').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      cancelarPedido(btn.dataset.folio);
      renderizarCaja();
    };
  });
}

// -------------------------------------------------------------
// ACTUALIZACIÓN GENERAL Y EVENTOS
// -------------------------------------------------------------
function actualizarTodo() {
  renderizarCocina();
  renderizarCliente();
  renderizarCarrito();
  renderizarCaja();
}

document.addEventListener("DOMContentLoaded", () => {
  // Formulario Cocina (Agregar/Editar)
  const formCocina = document.getElementById('form-cocina-agregar');
  if (formCocina) {
    formCocina.onsubmit = (e) => {
      e.preventDefault();
      const id = document.getElementById('cocina-id')?.value;
      const nom = document.getElementById('cocina-nombre').value;
      const pre = document.getElementById('cocina-precio').value;

      if (id) {
        editarProducto(parseInt(id), nom, pre);
        document.getElementById('cocina-id').value = "";
      } else {
        agregarProducto(nom, pre);
      }

      formCocina.reset();
      
      const btnGuardar = document.getElementById('btn-cocina-guardar');
      if (btnGuardar) btnGuardar.textContent = "Agregar al Catálogo";

      actualizarTodo();
    };
  }

  // Vaciar Carrito usando cliente3.js
  const btnVaciar = document.getElementById('btn-vaciar-carrito');
  if (btnVaciar) {
    btnVaciar.onclick = (e) => {
      e.preventDefault();
      vaciarCuentaCliente();
      renderizarCarrito();
    };
  }

  // Confirmar pedido e integrar con Caja y Cocina
  const btnConfirmar = document.getElementById('btn-confirmar-pedido');
  if (btnConfirmar) {
    btnConfirmar.onclick = (e) => {
      e.preventDefault();
      const cuentaActual = obtenerCuentaCliente();

      if (cuentaActual.length === 0) {
        alert("El carrito está vacío");
        return;
      }

      const clienteNom = document.getElementById('cliente-nombre')?.value || "Cliente Mostrador";

      // 1. Envía a Caja
      cobrarPedido(clienteNom, cuentaActual);

      // 2. Envía a Cocina
      procesarPedidoCocina(cuentaActual, {
        onCrear: (id, num) => {
          const cont = document.getElementById('contenedor-ordenes-cocina');
          if (cont.querySelector('p')) cont.innerHTML = "";
          
          const div = document.createElement('div');
          div.id = id;
          div.style.border = "1px solid #aaa";
          div.style.padding = "10px";
          div.style.margin = "10px 0";
          div.style.background = "#fff";
          div.innerHTML = `
            <strong>Orden #${num} (${clienteNom})</strong>
            <p id="st-${id}">En espera...</p>
            <progress id="pr-${id}" value="0" max="100" style="width: 100%;"></progress>
          `;
          cont.appendChild(div);
        },
        onUpdate: (id, txt, pct) => {
          const st = document.getElementById(`st-${id}`);
          const pr = document.getElementById(`pr-${id}`);
          if (st) st.textContent = txt;
          if (pr) pr.value = pct;
        }
      });

      // 3. Limpia la cuenta del cliente
      vaciarCuentaCliente();
      document.getElementById('cliente-nombre').value = "";
      actualizarTodo();
    };
  }

  actualizarTodo();
});