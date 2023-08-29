<?php
require 'database.php';
$db = $mysqli;
$id = $_GET['id'] ? mysqli_real_escape_string($db, $_GET['id']) : false;

if(!$id)
{
	echo http_response_code(400);exit;
}

$sql = "DELETE FROM products WHERE id =$id";

if($db->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}