<?php
// Include the database connection file
include 'db_connect.php';

// Get form data
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$project = mysqli_real_escape_string($conn, $_POST['project']);
$message = mysqli_real_escape_string($conn, $_POST['message']);

// Validate form data
if (empty($name) || empty($email) || empty($project) || empty($message)) {
  echo "Error: All fields are required";
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Error: Invalid email format";
  exit;
}

// Insert data into database using prepared statements
$stmt = $conn->prepare("INSERT INTO portfolio (name, email, project, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $project, $message);

if ($stmt->execute()) {
  echo "Successfully Sent";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>