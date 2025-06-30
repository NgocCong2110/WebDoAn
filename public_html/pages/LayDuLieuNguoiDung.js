async function ThemNguoiDung(){
    const tendn = document.getElementById("TenDangNhap").value
    const emaildn = document.getElementById("EmailDangNhap").value
    const matkhaudn = document.getElementById("MatKhau").value
    const vaitro = "users"
    const dulieund = {
        tendn : tendn,
        emaildn : emaildn,
        matkhaudn : matkhaudn,
        vaitro : vaitro
    }
    const respone = await fetch("https://foodoo.id.vn/pages/api.php", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(dulieund)
    })
    const ketqua = await respone.json()
    console.log(ketqua)
}