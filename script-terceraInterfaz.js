document.addEventListener("DOMContentLoaded", function () {
    // Obtener el valor de 'correo' desde localStorage
    const correo = localStorage.getItem("correo");
    
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
  
            // Mostrar el botón y el enlace
  
            const embebidoDocusign = document.getElementById("embebidoDocusign");
            
            //enlaceUsuario.href = data.link;
              
              embebidoDocusign.src = data.link;
          }
        });
  });