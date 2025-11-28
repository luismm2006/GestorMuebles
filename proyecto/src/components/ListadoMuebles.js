import { getAllProductos } from '../services/api.js';
import '../styles/ListadoMuebles.css';
import { addFavorito, removeFavorito, isFavorito } from './Favoritos.js';
import corazonLleno from "../assets/corazonLleno.png";
import corazonVacio from "../assets/corazonVacio.png";

let filtro = localStorage.getItem("filtroMuebles") || "todos";

export async function ListadoMuebles() {
  const productos = await getAllProductos();

  const productosFiltrados = filtro === "favoritos"
    ? productos.filter(p => isFavorito(p.id))
    : productos;

  const itemsHtml = productosFiltrados.map(p => `
    <div class="producto" data-id="${p.id}">
      <img src="${p.imagen}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Precio: ${p.precio} €</p>

      <a href="#/detallemueble/${p.id}" class="btn-detalle">Ver detalle</a>

      <button class="btn-favorito" data-id="${p.id}">
        <img src="${isFavorito(p.id) ? corazonLleno : corazonVacio}" alt="Favorito">
      </button>

      <a href="#/borrarmueble/${p.id}" class="btn-detalle">Borrar</a>
    </div>
  `).join("");

  return `
    <div class="listado-container">
      <h2>Listado de Productos</h2>

      
      <a href="#/agregarProducto" class="btn-agregar">Añadir Producto</a>
      <select id="selectFiltro" class="select-filtro">
        <option value="todos" ${filtro === "todos" ? "selected" : ""}>Todos</option>
        <option value="favoritos" ${filtro === "favoritos" ? "selected" : ""}>Favoritos</option>
      </select>

      <div class="productos-flex">
        ${itemsHtml}
      </div>
    </div>
  `;
}

document.addEventListener('change', (e) => {
  if (e.target.id === "selectFiltro") {
    filtro = e.target.value;
    localStorage.setItem("filtroMuebles", filtro);

    location.reload(); 
  }
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-favorito');
  if (!btn) return;

  const id = btn.dataset.id;

  if (isFavorito(id)) {
    removeFavorito(id);
    btn.querySelector('img').src = corazonVacio;
  } else {
    addFavorito(id);
    btn.querySelector('img').src = corazonLleno;
  }
});
