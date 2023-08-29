<?php
include 'database.php';

$products = [];

$sql = "SELECT * FROM products";
if($result = $mysqli->query($sql))
{
	
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['id'] = $row['id'];
		$products[$i]['name'] = $row['name'];
		$products[$i]['price'] = $row['price'];
		$i++;
	}
	echo json_encode($products);
}
else
{
	echo http_response_code(404);
}