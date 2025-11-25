import { postProducto } from "../services/api.js";
import '../styles/AgregarProducto.css';
import { isRequired, isNumberValid, isImageUrlValid, showError, showSuccess } from "./ValidarProducto.js";

// Retorna solo el HTML
export function AgregarProducto() {
    return `
    <div class="form-container">
      <h2>Agregar nuevo producto</h2>
      <form id="formAgregarProducto">
        <div class="form-field">
          <label>Nombre:</label>
          <input type="text" name="name" id="name" required>
          <small></small>
        </div>

        <div class="form-field">
          <label>Cantidad:</label>
          <input type="number" name="cantidad" id="cantidad" required>
          <small></small>
        </div>

        <div class="form-field">
          <label>Precio:</label>
          <input type="number" step="0.01" name="precio" id="precio" required>
          <small></small>
        </div>

        <div class="form-field">
          <label>Imagen URL:</label>
          <input type="text" name="imagen" id="imagen" required>
          <small></small>
        </div>

        <button type="submit">Agregar</button>
      </form>
      <a href="#/listadomuebles" class="btn-volver">Volver</a>
    </div>
    `;
}

// Inicializa el formulario después de insertar el HTML
export function initAgregarProducto() {
    const form = document.getElementById("formAgregarProducto");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const isFormValid = validateProductForm();
        if (!isFormValid) return;

        const producto = {
            name: document.getElementById("name").value.trim(),
            cantidad: parseInt(document.getElementById("cantidad").value),
            precio: parseFloat(document.getElementById("precio").value),
            imagen: document.getElementById("imagen").value.trim()
        };

        const resultado = await postProducto(producto);

        if (resultado) {
            alert("Producto agregado correctamente!");
            form.reset();
            location.hash = "#/listadomuebles";
        } else {
            alert("Error al agregar el producto.");
        }
    });
}

// Validación visual
function validateProductForm() {
    let valid = true;

    const nameInput = document.getElementById("name");
    if (!isRequired(nameInput.value)) {
        showError(nameInput, "El nombre es obligatorio");
        valid = false;
    } else showSuccess(nameInput);

    const cantidadInput = document.getElementById("cantidad");
    if (!isNumberValid(parseInt(cantidadInput.value))) {
        showError(cantidadInput, "La cantidad debe ser un número mayor que 0");
        valid = false;
    } else showSuccess(cantidadInput);

    const precioInput = document.getElementById("precio");
    if (!isNumberValid(parseFloat(precioInput.value))) {
        showError(precioInput, "El precio debe ser un número mayor que 0");
        valid = false;
    } else showSuccess(precioInput);

    const imagenInput = document.getElementById("imagen");
    if (!isImageUrlValid(imagenInput.value)) {
        showError(imagenInput, "URL de imagen inválida");
        valid = false;
    } else showSuccess(imagenInput);

    return valid;
}
