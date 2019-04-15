<!DOCTYPE html>
<html>
<body>
<div>
<?php

try {
$con = mysqli_connect("mysql.cms.waikato.ac.nz","br43","my11138820sql","br43");
} catch (PDOExcetion $e) {
    echo "Database connection error" . $e->getMessage();
}

?>
</div>
</body>
</html>