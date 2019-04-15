<?php

	require_once('dbconnect.php');

	//get id from $_GET 
	$idnum = $_GET['id'];

	$query = "select * from playerinfo where '$idnum' = ID";

	$result = $con->query($query);

	while($row = $result->fetch()) {
      	echo $row['imagelocation'] ;
  	}
