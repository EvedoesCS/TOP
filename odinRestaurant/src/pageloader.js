import './style.css';
import Cafe from './cafe.jpg';

// pageLoad function intended to be used by index.js to build the homepage 
// for this cafe website.

export function loadPage() {
    createLogo();
    createHero();
    createFooter();
}

function createLogo() {
    const cafeLogo = document.createElement('h3');
    cafeLogo.textContent = 'Olympus Café';
    cafeLogo.classList.add('logo');
    content.appendChild(cafeLogo);
}

function createHero() {
    const heroImage = new Image();
    heroImage.src = Cafe;
    heroImage.classList.add('hero-img');
    content.appendChild(heroImage);
}

function createFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    document.body.append(footerContainer);

    const copyright = document.createElement('p');
    copyright.innerHTML = 'EvedoesCS &copy';
    copyright.classList.add('copyright');
    document.body.appendChild(copyright);
}

