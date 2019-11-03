<?php
if(!empty($_POST["submit"])) {
	$name = $_POST["userName"];
	$email = $_POST["userEmail"];
	$subject = $_POST["subject"];
	$content = $_POST["content"];

	$conn = mysqli_connect("localhost", "root", "", "blog_samples") or die("Connection Error: " . mysqli_error($conn));
	mysqli_query($conn, "INSERT INTO tblcontact (user_name, user_email,subject,content) VALUES ('" . $name. "', '" . $email. "','" . $subject. "','" . $content. "')");
	$insert_id = mysqli_insert_id($conn);
	//if(!empty($insert_id)) {
	   $message = "Your Message has been sent successfully.";
	   $type = "success";
	//}
}
require_once "web.php";
?>