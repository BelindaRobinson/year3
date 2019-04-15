<?php

  $matchtype = $_POST['match'];
  $usertext = $_POST['text'];
  
  require_once('dbconnect.php');

  if ($matchtype == "start") {
       $query = "Select * from Queues where name like '".$usertext."%'";
  } else {
       $query = "Select * from Queues where name like '%".$usertext."%'";
  }	

  
  $result = $con->query($query);


	echo "<table>";
	echo "<tr><th>Printer</th><th></th><th>Location</th></tr>";

	while($row = $result->fetch()) {

	 	$txt = $row['model'];

     	echo "<tr onclick='javascript:popup(\"" . $txt . "\");'>";
     	echo "<td>".$row['name']."</td><td></td>";
     	echo "<td>".$row['location']."</td>";
     	echo "</tr>";
  	}
  
  	echo "</table>";


