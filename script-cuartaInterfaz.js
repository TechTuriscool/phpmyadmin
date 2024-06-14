document.addEventListener("DOMContentLoaded", function () {
    // Obtener el valor de 'correo' desde localStorage
    const correo = localStorage.getItem("correo");
    
    // Enviar solicitud para eliminar el usuario
    fetch("eliminar-usuario.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `correo=${correo}`,
    })
    .then(response => response.json())
    .then(data => {
        // Verificar si la eliminación fue exitosa
        if (data.success) {
            console.log("Usuario eliminado con éxito");
            // Aquí puedes redirigir al usuario a otra página o realizar acciones adicionales si es necesario.
        } else {
            console.error("Error al eliminar el usuario");
        }
    });
});
