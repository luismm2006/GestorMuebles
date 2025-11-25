import { AgregarProducto } from './components/AgregarProducto.js';
import { ListadoMuebles } from './components/ListadoMuebles.js';
import { Home } from './views/Home.js';
import { AboutUs } from './views/AboutUs.js';
import { NotFound } from './views/NotFound.js';
import { initAgregarProducto } from './components/AgregarProducto.js'; 

export async function router() {
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    const routes = {
        '/': Home,
        '/listadomuebles': ListadoMuebles,
        '/about': AboutUs,
        '/agregarproducto': AgregarProducto
    };

    const screen = routes[route] || NotFound;
    view.innerHTML = await screen();

    if (route === '/agregarproducto') {
        initAgregarProducto();
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
