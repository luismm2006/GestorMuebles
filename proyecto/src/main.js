
import { router } from './router';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
document.querySelector('#app').innerHTML = `
${Header()}
${Navbar()}
<main id="view"></main>
${Footer()}
`;
router();
window.addEventListener('hashchange', router);
