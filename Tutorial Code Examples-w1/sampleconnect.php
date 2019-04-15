<?php

   
   try{
   	
   	$con = new PDO('mysql:host=mysql.cms.waikato.ac.nz;dbname=username','username','password');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
   
