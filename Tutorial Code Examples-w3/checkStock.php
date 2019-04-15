<?php

	require_once('../../dbconnect.php');
	
	ini_set("error_reporting",E_ALL); 
	ini_set("log_errors","1"); 
	ini_set("error_log","php_errors.txt");
 
	$id = $_GET['id'];
	$status = $_GET['status'];


	$query = "select * from stock where '$id' = product_code and '$status' = in_stock";
	$result = $con->query($query);



	while($row = $result->fetch()) {
		echo $row['product_code'] ;
		return;
	}

  	echo -99;

