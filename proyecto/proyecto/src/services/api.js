const API_URL = 'http://localhost:3000/productos';

export async function getAllProductos() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function postProducto(producto) {
    try {
        const res = await fetch(API_URL, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        if(!res.ok){
            throw new Error(`Error en la petición: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProductById(id){
  try {
      const res = await fetch(API_URL + "/" + id);
      const data = await res.json();
      return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteProductById(id) {
    try {
        const res = await fetch(API_URL + "/" + id, {
            method:"DELETE",
        });
        if(!res.ok){
            throw new Error(`Error en la petición: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}