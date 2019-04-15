<?php

    require_once('connection.php');



    ini_set("error_reporting",E_ALL);
    ini_set("log_error","php_errors.txt");
    ini_set("error_log","php_errors.txt");

    $User = $_GET['UserName']; //CHANGED FROM QUESTION
    $Pass = $_GET['Password'];

    $query = "select * from Users where '$User' = UserName and '$Pass' = Password";
    $result = $con->query($query);

    //$UserWord = $_GET['UserName'];
    //$Password = $_GET['Password'];

    //$query = "select * from Users where '$UserWord' = UserName and '$Password' = Password";
    //$result = $con->query($query);

    while($row = $result->fetch()) {
        echo $row['UserId'];
        return;
    }

    echo -99;

?>