<?php

    try {
        $con = new PDO('mysql:host=mysql.cms.waikato.ac.nz;dbname=br43','br43','my11138820sql');
    }   catch (PDOException $e) {
        echo "db not connected" . $e->getMessage();
    }