const pizzaxx = { id: 1, tenmonan: "Pizza Xúc Xích", giatien: "100.000Đ", diachi: "Quận 1" }
const pizzat = { id: 2, tenmonan: "Pizza thường", giatien: "150.000Đ", diachi: "Quận 2" }
const miybo = { id: 3, tenmonan: "Mì ý bò", giatien: "100.000Đ", diachi: "Quận 1" }
const miyphomai = { id: 4, tenmonan: "Mì ý phô mai", giatien: "150.000Đ", diachi: "Quận 2" }
const burgert = {id: 5, tenmonan: "Burger thường", giatien: "100.000Đ", diachi: "Quận 1"}
const burgerga = {id: 6, tenmonan: "Burger gà", giatien: "150.000Đ", diachi: "Quận 2"}
const danhSachMonAn = {
  xx: pizzaxx,
  t: pizzat,
  bo: miybo,
  pm: miyphomai,
  bt: burgert,
  bg: burgerga
}
function themthongbao(text) {
  let tb = document.getElementById("thongbao");
  if (!tb) {
    tb = document.createElement("div");
    tb.id = "thongbao";
    tb.style.position = "fixed";
    tb.style.top = "20px";
    tb.style.right = "20px";
    tb.style.backgroundColor = "green";
    tb.style.color = "white";
    tb.style.padding = "10px 20px";
    tb.style.borderRadius = "5px";
    tb.style.zIndex = "9999";
    tb.style.display = "none";
    tb.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
    document.body.appendChild(tb);
  }

  tb.innerText = text;
  tb.style.display = "block";

  setTimeout(() => {
    tb.style.display = "none";
  }, 3000);
}
function themvaogiohang(a) {
  let list = JSON.parse(localStorage.getItem("danhsachmonan")) || []
  const sanpham = danhSachMonAn[a]
  if (!sanpham) {
    alert("Không tìm thấy món ăn.")
    return
  }

  let find = list.find(item => item.id === sanpham.id)
  if (find) {
    find.soluong += 1
  } else {
    list.push({ ...sanpham, soluong: 1 })
  }

  localStorage.setItem("danhsachmonan", JSON.stringify(list))
  themthongbao("Đã thêm món " + sanpham.tenmonan)
}
