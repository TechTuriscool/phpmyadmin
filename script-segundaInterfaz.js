document.addEventListener("DOMContentLoaded", function () {
    const buscarUsuarioForm = document.getElementById("buscarUsuarioForm");
    const resultado = document.getElementById("resultado");
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    const closeBtn = document.querySelector(".close");
    const enlaceUsuario = document.getElementById("enlaceUsuario");
  
    buscarUsuarioForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Obtener el correo ingresado por el usuario
      const correo = document.getElementById("correo").value;
      localStorage.setItem("correo", correo);
  
      // Realizar una solicitud AJAX al servidor PHP para buscar al usuario
      fetch("buscar-usuario.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `correo=${correo}`,
      })
        .then(response => response.json())
        .then(data => {
          if (data.link) {
            resultado.textContent = "";
  
            // Mostrar el botón pop-up
            const popupContainer = document.getElementById("popupContainer");
            popupContainer.style.display = "block";
  
            enlaceUsuario.addEventListener("click", function () {
              // Redirigir al contenido deseado
              window.location.href = 'index2-guia.html';
            });

            // Cerrar el pop-up si se hace clic en cualquier parte fuera del botón
            document.addEventListener("click", function (event) {
              if (event.target !== enlaceUsuario) {
                popupContainer.style.display = "none";
              }
            });
          } else {
            // Mostrar el mensaje de error en el cuadro de diálogo modal
            modalMessage.textContent = "Lo siento, no encontramos tu correo ¿Estás seguro de que es este con el que te conectas a nuestra plataforma?";
            modal.style.display = "block";
          }
        })
        .catch(error => {
          console.error("Error al buscar usuario:", error);
          // Mostrar el mensaje de error en el cuadro de diálogo modal
          modalMessage.textContent = "Ocurrió un error al buscar usuario.";
          modal.style.display = "block";
        });
    });
  
    // Cerrar el cuadro de diálogo modal al hacer clic en la "X"
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Cerrar el cuadro de diálogo modal al hacer clic en cualquier parte fuera de él
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
