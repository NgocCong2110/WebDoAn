const pizzaxx = { id: "xx", tenmonan: "Pizza Xúc Xích", giatien: "10.000Đ", diachi: "Quận 1" };
const pizzat = { id: "t", tenmonan: "Pizza thường", giatien: "150.000Đ", diachi: "Quận 2" };
const miybo = { id: "bo", tenmonan: "Mì ý bò", giatien: "100.000Đ", diachi: "Quận 1" };
const miyphomai = { id: "pm", tenmonan: "Mì ý phô mai", giatien: "150.000Đ", diachi: "Quận 2" };

const danhSachMonAn = {
  xx: pizzaxx,
  t: pizzat,
  bo: miybo,
  pm: miyphomai
};

function themvaogiohang(a) {
  let list = JSON.parse(localStorage.getItem("danhsachmonan")) || [];
  const sanpham = danhSachMonAn[a];
  if (!sanpham) {
    alert("Không tìm thấy món ăn.");
    return;
  }

  let find = list.find(item => item.id === sanpham.id);
  if (find) {
    find.soluong += 1;
  } else {
    list.push({ ...sanpham, soluong: 1 });
  }

  localStorage.setItem("danhsachmonan", JSON.stringify(list));
  alert("✅ Đã thêm: " + sanpham.tenmonan);
}