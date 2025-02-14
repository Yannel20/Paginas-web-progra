// 1. Evento de clic
document.querySelector('.grid-item:nth-child(2)').addEventListener('click', function() {
    alert('¡CONOCEMEEE!');
});

// 2. Evento de ratón encima
document.querySelector('.grid-item:nth-child(4)').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#90EE90';
});

// 3. Evento de ratón fuera
document.querySelector('.grid-item:nth-child(4)').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lavender';
});

// 4. Evento de doble clic
document.querySelector('.grid-item:nth-child(6)').addEventListener('dblclick', function() {
    if (!this.querySelector('iframe')) {
        this.innerHTML += '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2Ch7LmS7r2Gy2kc64wv3Bz?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }
});

// 5. Evento de tecla presionada
document.addEventListener('keypress', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        alert('EL AZUL ES DE MIS COLORES FAVORITOS');
    }
});

// 6. Evento de carga
window.addEventListener('load', function() {
    console.log('La página se ha cargado completamente');
    alert('¡La página se ha cargado completamente!');
});


