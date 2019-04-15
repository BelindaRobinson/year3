<!DOCTYPE html>
<html>
    <head>
        <meta charset='UTF-8'>
        <title>Customer data</title>
    </head>
    <body>
<?php
	//first connect to the database - use sampleconnect.php as template
    require_once('../../dbconnect.php');

    $query = "select * from `customer`";
    $result = $con->query($query);
    
    if($result != FALSE) 
    {
        echo "<table><tr><th>CustomerID</th><th>Surname</th><th>Givenname</th><th>City</th>";
        echo "<th>Phone</th><th>Email</th></tr>";
        while($row = $result->fetch()) 
        {
            echo "<tr>";
            echo "<td>".$row['CustomerID']."</td>";
            echo "<td>".$row['Surname']."</td>";
            echo "<td>".$row['Givenname']."</td>";
            echo "<td>".$row['City']."</td>";
            echo "<td>".$row['Phone']."</td>";
            echo "<td>".$row['Email']."</td>";
            echo "</tr>";
        }
        echo "</table>";
    } 
    else
    	die("Error in database query");
   
?>
</body>
</html>