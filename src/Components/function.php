<?php
// Connect to MySQL database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get user data from form
$email = $_POST['email'];
$password = $_POST['password'];

// Check if user exists in MySQL database
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "User signed in successfully";
} else {
    echo "Invalid email or password";
}

mysqli_close($conn);
?>