async function LayThongTin(){
    //Dung cho dotnet
    // const respone = await fetch("http://localhost:5075/api/Thaotaccsdl/InDanhSachNguoiDung", {
    //     method : "POST"
    //     // headers : {
    //     //     "Content-Type" : "application/json" chua can toi
    //     // }
    // })
    //Dung php
    const respone = await fetch("api.php").then(respone => respone.json()).then(data => {
        data.forEach(nguoidung => {
            var chuoi = "";
            chuoi += `TenNguoiDung : ${nguoidung.tennguoidung}, EmailNguoiDung : ${nguoidung.emailnguoidung}`
        });
        document.getElementById("danhsachnguoidung").innerText = chuoi
    })
   .catch( err => {
    console.log(err)
   })
}