<?php
header("Content-Type : application/json");

$host = "localhost";
$user = "root";
$pass = "123456";
$db = "webfoodoo";

$coon = new mysqli($host, $user, $pass, $db);

if($coon ->connect_error){
    http_response_code(500);
    echo json_encode(["loi ket noi"]);
    exit();
}
$sql = "Select * from nguoidung";
$result = $coon -> query($sql);
$data = [];
while($row = $result -> fetch_assoc()){
    $data[] = $row;
}
echo json_encode($data);
$coon -> close();
?>