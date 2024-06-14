document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("popup-close");
    const popupContent = document.querySelector(".popup-content");

    // Muestra el popup cuando la página se carga
    popup.style.display = "block";

    // Cierra el popup cuando se hace clic en el botón de cierre
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Cierra el popup cuando se hace clic en cualquier lugar fuera del popup
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});