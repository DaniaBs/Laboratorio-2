document.addEventListener("DOMContentLoaded", function () {
    // Obtener botones de abrir modal
    let botones = document.querySelectorAll(".info-btn");

    // Agregar evento a cada botón
    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            let modalId = this.getAttribute("data-modal");
            let modal = document.getElementById(modalId);
            modal.classList.add("show");
        });
    });

    // Cerrar modal cuando se haga clic en "X" o fuera del contenido
    let modales = document.querySelectorAll(".modal");

    modales.forEach(modal => {
        modal.addEventListener("click", function (e) {
            if (e.target.classList.contains("cerrar") || e.target === this) {
                this.classList.remove("show");
            }
        });
    });
});