<?php
header("Content-Type: application/json");

$host = "localhost";
$user = "sswnsemj_webfoodoo";
$pass = "2BNcNV2Gb2wfGxPg7ksw";
$db = "sswnsemj_webfoodoo";

$coon = new mysqli($host, $user, $pass, $db);

$data = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO NguoiDung(tennguoidung, emailnguoidung, matkhaunguoidung, vaitro) values(?,?,?,?)";
$stmt = $coon->prepare($sql);
$stmt->bind_param("ssss", $data["tendn"], $data["emaildn"], $data["matkhaudn"], $data["vaitro"]);
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Thêm thành công"]);
}
else{
    echo json_encode(["status" => "error", "message" => "Lỗi khi thêm người dùng"]);
}
$stmt -> close();
$coon -> close();
?>