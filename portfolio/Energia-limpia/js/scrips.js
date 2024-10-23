// Cambiar el color del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mostrar/ocultar el menú hamburguesa
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');


hamburger.addEventListener('click', () => {
    if(mobileMenu.className == "mobile-menu oculto"){
        mobileMenu.classList.replace("oculto","d-flex");
    }else{
        mobileMenu.classList.replace("d-flex","oculto");
    }
    
});

// Datos para los productos de la categoría 1
const categoria1 = [
    { imagen: '../img/png/product1.png', nombre: 'NIO', nom: 'Solar Panels', descripcion: 'Mono 540w 550w 560w', precio: '$0.11 - $0.13/ watts' },
    { imagen: '../img/png/product2.png', nombre: 'NIO', nom: 'Iversor Hibrido', descripcion: 'Growatt Spf3000 120v/24v/Mppt /opcion Wifi', precio: 'desde $1.099' },
    { imagen: '../img/png/product3.png', nombre: 'KOHLER', nom: ' Power Reserve', descripcion: '10 Kwh 15 Kwh 20 Kwh', precio: '$1.000/ kwh' }
];

// Datos para los productos de la categoría 2
const categoria2 = [
    { imagen: '../img/png/product4.png', nombre: 'NIO',nom: ' Flyt', descripcion: ' 1500w, 12v, 24v, 48V', precio: 'desde $511.50' },
    { imagen: '../img/png/product5.png', nombre: 'NIO',nom: ' Power', descripcion: '7 kW Power Home 2.0', precio: 'desde $700' },
    { imagen: '../img/png/product6.png', nombre: 'NIO',nom: ' Power', descripcion: '20 kW Power Home Plus', precio: 'desde $500' }
];

// Datos para los servicios
const servicios = [
    { imagen: '../img/png/servicio1.png', nombre: 'NIO', nom: 'Service', descripcion: 'Instalación y Mantenimiento', descripcion2: 'Instalación de Sistemas Solares y Eólicos Mantenimiento Preventivo y Correctivo',  },
    { imagen: '../img/png/servicio2.png', nombre: 'NIO', nom: 'Service', descripcion: 'Consultoría y Auditoría Energética', descripcion2: 'Consultoría Energética Personalizada Auditorías Energéticas', },
    { imagen: '../img/png/servicio3.png', nombre: 'NIO', nom: 'Service', descripcion: 'Proyectos a Medida y Capacitación', descripcion2: 'Diseño de Proyecto Talleres y Cursos',}
];

// Elementos del DOM
const category1List = document.getElementById('category1-list');
const category2List = document.getElementById('category2-list');
const category2Section = document.querySelector('#category2-list').parentNode; // Para ocultar la segunda categoría de productos
const bannerTitle = document.getElementById('banner-title');
const bannerSubtitle = document.getElementById('banner-subtitle');
const bannerDescription = document.getElementById('banner-description');

// Función para mostrar productos de la categoría 1
function mostrarProductosCategoria1() {
    category1List.innerHTML = '';
    categoria1.forEach(producto => {
        category1List.innerHTML += `
            <div class="product-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3><b>${producto.nombre}</b> ${producto.nom} </h3>
                <h4>${producto.descripcion}</h4>
                <h5 class="price">${producto.precio}</h5>
                <button class="btn">Cotizar</button>
            </div>
        `;
    });
}

// Función para mostrar productos de la categoría 2
function mostrarProductosCategoria2() {
    category2List.innerHTML = '';
    categoria2.forEach(producto => {
        category2List.innerHTML += `
            <div class="product-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3><b>${producto.nombre}</b> ${producto.nom} </h3>
                <h4>${producto.descripcion}</h4>
                <h5 class="price">${producto.precio}</h5>
                <a href="../index.html">
                <button class="btn">Cotizar</button></a>
            </div>
        `;
    });
    category2Section.style.display = 'block'; // Mostrar la segunda categoría cuando estemos mostrando productos
}

// Función para mostrar servicios
function mostrarServicios() {
    bannerTitle.textContent = 'NIO Service';
    bannerSubtitle.textContent = 'No solo ofrecemos productos de calidad';
    bannerDescription.textContent = 'también brindamos servicios integrales que abarcan desde la instalación hasta el monitoreo y mantenimiento de sistemas energéticos.';
    
    category1List.innerHTML = '';
    category2List.innerHTML = '';
    category2Section.style.display = 'none'; // Ocultar la segunda categoría cuando estemos mostrando servicios
    
    servicios.forEach(servicio => {
        category1List.innerHTML += `
            <div class="service-card">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <h3><b>${servicio.nombre}</b> ${servicio.nom} </h3>
                <h4>${servicio.descripcion}</h4>
                <p>${servicio.descripcion2}</p>
                <a href="../index.html">
                <button class="btn">Solicitar</button></a>
            </div>
        `;
    });
}

// Event listeners para los botones
document.getElementById('show-products').addEventListener('click', () => {
    bannerTitle.textContent = 'NIO Energy';
    bannerSubtitle.textContent = 'ofrecemos soluciones integrales en energía limpia.';
    bannerDescription.textContent = ' Conoce nuestros productos innovadores y servicios especializados para optimizar el uso de energías renovables en tu hogar, empresa o industria.';
    mostrarProductosCategoria1();
    mostrarProductosCategoria2(); // Mostrar ambas categorías cuando se muestren productos
});

document.getElementById('show-services').addEventListener('click', mostrarServicios);

// Mostrar productos por defecto
mostrarProductosCategoria1();
mostrarProductosCategoria2();

const banana = document.getElementById("banner2");
const producto = document.getElementById("show-products");
const servicio = document.getElementById("show-services");

const h2 = document.getElementById("category1-title");
const p = document.getElementById("category1-description");

    servicio.addEventListener ("click", ()=>{
        banana.classList.add("banana");
        h2.classList.add("oculto");
        p.classList.add("oculto");
    });

    producto.addEventListener ("click", ()=>{
        banana.classList.remove("banana");
        h2.classList.remove("oculto");
        p.classList.remove("oculto");
    });

    







