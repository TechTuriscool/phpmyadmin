<?php
// Conexión a la base de datos (ajusta las credenciales según tu configuración)
$servername = "localhost";
$username = "id21157547_juancarlosroot";
$password = "Juancarlos12+";
$dbname = "id21157547_juancarlostest";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el correo del usuario desde la solicitud POST
$correo = $_POST['correo'];

// Consulta SQL para eliminar el usuario de la tabla 'usuarios'
$sql = "UPDATE usuarios SET `link` = '' WHERE correo = '$correo'";
$result = $conn->query($sql);

// Verificar si la eliminación fue exitosa
if ($result) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$conn->close();
?>
