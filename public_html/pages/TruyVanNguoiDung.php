<?php
header("Content-Type: application/json");
$host = "localhost";
$user = "sswnsemj_webfoodoo";
$pass = "2BNcNV2Gb2wfGxPg7ksw";
$db = "sswnsemj_webfoodoo";

$conn = new mysqli($host, $user, $pass, $db);

$data = json_decode(file_get_contents("php://input"), true);

$sql = "select emailnguoidung, matkhaunguoidung from NguoiDung where emailnguoidung = ? and matkhaunguoidung = ?";
$stmt = $conn->prepare($sql);
$stmt -> bind_param("ss", $data["gmaildn"], $data["matkhaudn"]);
$stmt -> execute();
$result = $stmt -> get_result();
if( $result && $result->num_rows > 0 ){
    echo json_encode(["success"=>true,"msg"=> "Có thông tin người dùng"]);
}
else{
    echo json_encode(["success"=>false,"msg"=> "Không khớp"]);
}
?>