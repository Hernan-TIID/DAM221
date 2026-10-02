// cliente3.js

let cuentaCliente = [];

export function agregarProductoCliente(producto) {
  if (!producto) return;
  
  const existe = cuentaCliente.find((item) => item.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    cuentaCliente.push({ ...producto, cantidad: 1 });
  }
}

export function eliminarProductoCliente(index) {
  if (index >= 0 && index < cuentaCliente.length) {
    cuentaCliente.splice(index, 1);
  }
}

export function vaciarCuentaCliente() {
  cuentaCliente = [];
}

export function obtenerCuentaCliente() {
  return [...cuentaCliente];
}

export function calcularTotalCliente() {
  return Math.round(
    cuentaCliente.reduce((suma, item) => suma + item.precio * item.cantidad, 0) * 100
  ) / 100;
}