<?php

	require_once('../../dbconnect.php');

	ini_set("error_reporting",E_ALL); 
	ini_set("log_errors","1"); 
	ini_set("error_log","php_errors.txt");
	
	
	$id = $_GET['id'];
	
	$query1 = "select * from StoreStock where '$id' = StockID";
	//$query1 = "select * from StoreStock where 1111 = StockID";
	$result1 = $con->query($query1);
	
	
	while($row = $result1->fetch()) {
		//echo $row['StoreID'];
		$sid = $row['StoreID'];
		$query2 = "select * from Store where ID = '$sid'";
		$result2 = $con->query($query2);

		while($row = $result2->fetch()) {
			echo $row['Name'] ;
			echo "   at   ";
			echo $row['Location'] ;
			echo "</br>";
  		} 
  	}
  	
  	