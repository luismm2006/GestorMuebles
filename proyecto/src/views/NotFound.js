import '../styles/Home.css';

export function NotFound() {
  return `
    <div class="home-container">
      <div class="home-box">
        <h1>404 - Página no encontrada</h1>
        <p class="parrafoHome">Lo sentimos, la página que buscas no existe.</p>
        <a href="/" class="btn-volver">Volver al inicio</a>
      </div>
    </div>
  `;
}
