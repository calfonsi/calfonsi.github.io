<?php

$host_name = 'sql109.epizy.com';
$db_name = 'epiz_29330013_cal';
$db_user = 'epiz_29330013';
$db_pass = 'xrxkBUPpNnBJMv';

$con = mysqli_connect($host_name, $db_user, $db_pass, $db_name);

if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
//$sql="SELECT * FROM b_posts WHERE id = '".$q."'";
//$sql = trim($_POST['sql']);
$sql="SELECT * FROM employees ";
$result = mysqli_query($con, $sql);
//$row = mysqli_fetch_all($result);
while ($rows = mysqli_fetch_assoc($result)) {
    $row[] = $rows;
}

/*echo "<pre>";
   // print_r($_POST);
echo "</pre>";*/

echo json_encode($row);
?>

