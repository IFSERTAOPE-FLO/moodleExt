<?php
$conn = new mysqli("localhost", "root", "", "moodleext");

if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}

echo "Conectou!";