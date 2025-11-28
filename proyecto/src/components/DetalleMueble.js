import { getProductById } from "../services/api";
import "../styles/DetalleMuebleYBorrado.css";
export async function DetalleMueble(id) {
  const producto = await getProductById(id);

  return `
    <div class="detalle-mueble">
      <h2>${producto.name}</h2>
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <p>Cantidad: ${producto.cantidad}</p>
      <p><strong>Precio: </strong> ${producto.precio} €</p>
      <a href="#/listadomuebles" class="btn-volver">Volver</a>
    </div>
  `;
}