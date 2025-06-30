async function LayThongTin() {
    //Dung cho dotnet
    // const respone = await fetch("http://localhost:5075/api/Thaotaccsdl/InDanhSachNguoiDung", {
    //     method : "POST"
    //     // headers : {
    //     //     "Content-Type" : "application/json" chua can toi
    //     // }
    // })
    //Dung php
    const respone = await fetch("https://foodoo.id.vn/pages/api.php").then(respone => respone.json()).then(data => {
        data.forEach(nguoidung => {
            const bang = document.getElementById("bangthongtin")
            const thongtin = `<div class = "container">
    <div class = "text-center">
      <div class = "row align-items-center">
        <div class = "col-6">Tên người dùng</div>
        <div class = "col-6">Email người dùng</div>
      </div>
      <div>
        <div>${nguoidung.tennguoidung}</div>
        <div>${nguoidung.emailnguoidung}</div>
      </div>
    </div>
  </div>`
        });
        document.getElementById("danhsachnguoidung").innerText = chuoi
    })
        .catch(err => {
            console.log(err)
        })
}