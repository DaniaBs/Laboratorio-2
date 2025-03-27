document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script cargado correctamente");

    // ---------- MODALES ----------
    let botonesModal = document.querySelectorAll(".info-btn");

    botonesModal.forEach(boton => {
        boton.addEventListener("click", function () {
            let modalId = this.getAttribute("data-modal");
            let modal = document.getElementById(modalId);
            modal.classList.add("show");
        });
    });

    let modales = document.querySelectorAll(".modal");

    modales.forEach(modal => {
        modal.addEventListener("click", function (e) {
            if (e.target.classList.contains("cerrar") || e.target === this) {
                this.classList.remove("show");
            }
        });
    });

});
