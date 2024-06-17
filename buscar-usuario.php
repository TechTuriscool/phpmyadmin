<?php
// Conexión a la base de datos (ajusta las credenciales según tu configuración)
$servername = "localhost";
$username = "Turiscool";
$password = "Turiscool";
$dbname = "Turiscool";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el correo del usuario desde la solicitud POST
$correo = $_POST['correo'];

// Consulta SQL para buscar el usuario en la tabla 'usuarios'
$sql = "SELECT link, urlRecibiDiploma FROM usuarios WHERE correo = '$correo'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // El usuario existe en la base de datos
    $row = $result->fetch_assoc();
    $link = $row['link'];
    $urlRecibiDiploma = $row['urlRecibiDiploma'];
    echo json_encode(['link' => $link, 'urlRecibiDiploma' => $urlRecibiDiploma]);
} else {
    // El usuario no existe en la base de datos
    echo json_encode(['link' => null]);
}

$conn->close();
?>
