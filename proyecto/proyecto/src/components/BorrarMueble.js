import { getProductById } from "../services/api";
import { deleteProductById } from "../services/api";
import "../styles/DetalleMuebleYBorrado.css";

export async function BorrarMueble(id) {
  const producto = await getProductById(id);

  return `
    <div class="detalle-mueble">
      <h2>${producto.name}</h2>
      <img src="${producto.imagen}" alt="${producto.name}" />
      <p>Cantidad: ${producto.cantidad}</p>
      <p><strong>Precio:</strong> ${producto.precio} €</p>

      <button class="btn-borrar" data-id="${producto.id}">
        Borrar
      </button>
      <a href="#/listadomuebles" class="btn-volver-borrar">Volver</a>
    </div>
  `;
}
document.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("btn-borrar")) return;

  const id = e.target.dataset.id;

  const confirma = confirm("¿Seguro?");
  if (!confirma) return;

  await deleteProductById(id);
  location.hash = "#/listadomuebles"; 
});