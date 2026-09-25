// caja.js

const historialPedidos = [];
const IVA_PORCENTAJE = 0.16;

export function cobrarPedido(cliente = "Mostrador", productosSeleccionados = []) {
  if (!productosSeleccionados || productosSeleccionados.length === 0) {
    return { exito: false, mensaje: "El pedido está vacío." };
  }

  const detalle = productosSeleccionados.map((item) => {
    const cantidad = item.cantidad || 1;
    const precio = item.precio || 0;
    return {
      productoId: item.id,
      nombre: item.nombre,
      cantidad: cantidad,
      precio: precio,
      importe: Math.round(precio * cantidad * 100) / 100
    };
  });

  const subtotal = Math.round(detalle.reduce((suma, item) => suma + item.importe, 0) * 100) / 100;
  const iva = Math.round(subtotal * IVA_PORCENTAJE * 100) / 100;
  const total = Math.round((subtotal + iva) * 100) / 100;

  const ahora = new Date();
  const folio = `FOL-${ahora.getFullYear()}${String(ahora.getMonth() + 1).padStart(2, '0')}${String(ahora.getDate()).padStart(2, '0')}-${String(ahora.getMilliseconds()).padStart(3, '0')}`;

  const nuevoPedido = {
    folio,
    fecha: ahora.toLocaleString("es-MX"),
    cliente: cliente || "Mostrador",
    productos: detalle,
    subtotal,
    iva,
    total,
    estado: "Listo"
  };

  historialPedidos.push(nuevoPedido);

  return {
    exito: true,
    mensaje: `Pedido ${folio} registrado con éxito.`,
    pedido: nuevoPedido
  };
}

export function cancelarPedido(folio) {
  const pedido = historialPedidos.find((p) => p.folio === folio && p.estado === "Listo");

  if (!pedido) {
    return { exito: false, mensaje: "No se encontró el pedido a cancelar." };
  }

  pedido.estado = "Cancelado";

  return {
    exito: true,
    mensaje: `Pedido ${folio} cancelado exitosamente.`,
    pedido
  };
}

export function obtenerHistorialCaja() {
  return [...historialPedidos];
}