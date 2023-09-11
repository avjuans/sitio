document.addEventListener('DOMContentLoaded', function() {
    const elementosMenu = document.querySelectorAll('.mega-menu-bar a[data-gif]');
    const columnasDinamicas = document.querySelectorAll('.columna-dinamica');

    function mostrarGif(ruta) {
        columnasDinamicas.forEach(columna => {
            columna.innerHTML = `<img src="${ruta}" alt="GIF dinámico">`;
        });
    }

    elementosMenu.forEach(elemento => {
        elemento.addEventListener('mouseover', function() {
            const rutaGif = this.dataset.gif;
            mostrarGif(rutaGif);
        });
    });
});