document.getElementById("formDangKy").addEventListener("submit", async function (e) {
  e.preventDefault();

  const TenNguoiDung = document.getElementById("TenDangNhap");
  const EmailNguoiDung = document.getElementById("EmailDangNhap");
  const MatKhauNguoiDung = document.getElementById("MatKhau");
  const XacNhanMatKhau = document.getElementById("XacNhanMatKhau");
  const xacNhanTOS = document.getElementById("checkBoxTOS");

  const usernameErrorElement = document.getElementById("usernameError");
  const emailErrorElement = document.getElementById("emailError");
  const passwordErrorElement = document.getElementById("passwordError");
  const confirmPasswordErrorElement = document.getElementById("confirmPasswordError");
  const confirmCheckedElement = document.getElementById("checkedTOS");

  const ThongTinNguoiDung = JSON.parse(localStorage.getItem("users")) || [];

  let kiemtradk = true;

  if (!TenNguoiDung.value || TenNguoiDung.value.length <= 5) {
    usernameErrorElement.style.display = "block";
    usernameErrorElement.innerHTML = "*Tên phải có đầy đủ họ tên và trên 5 kí tự";
    kiemtradk = false;
  } else {
    usernameErrorElement.style.display = "none";
  }

  if (!EmailNguoiDung.value) {
    emailErrorElement.style.display = "block";
    emailErrorElement.innerHTML = "*Email không được để trống";
    kiemtradk = false;
  } else {
    emailErrorElement.style.display = "none";
  }

  if (!MatKhauNguoiDung.value || MatKhauNguoiDung.value.length <= 7) {
    passwordErrorElement.style.display = "block";
    passwordErrorElement.innerHTML = "*Mật khẩu phải có trên 7 kí tự";
    kiemtradk = false;
  } else {
    passwordErrorElement.style.display = "none";
  }

  if (MatKhauNguoiDung.value !== XacNhanMatKhau.value) {
    confirmPasswordErrorElement.style.display = "block";
    confirmPasswordErrorElement.innerHTML = "*Mật khẩu không khớp";
    kiemtradk = false;
  } else {
    confirmPasswordErrorElement.style.display = "none";
  }

  if (!xacNhanTOS.checked) {
    confirmCheckedElement.style.display = "block";
    confirmCheckedElement.innerHTML = "*Bạn phải đồng ý với điều khoản";
    kiemtradk = false;
  } else {
    confirmCheckedElement.style.display = "none";
  }

  if (kiemtradk) {
    const userdata = {
      userId: Math.ceil(Math.random() * 100000000),
      TenNguoiDung: TenNguoiDung.value,
      EmailNguoiDung: EmailNguoiDung.value,
      MatKhauNguoiDung: MatKhauNguoiDung.value,
    };
    ThongTinNguoiDung.push(userdata);
    localStorage.setItem("users", JSON.stringify(ThongTinNguoiDung));
    const dulieund = {
      TenNguoiDung: TenNguoiDung.value,
      EmailNguoiDung: EmailNguoiDung.value,
      MatKhauNguoiDung: MatKhauNguoiDung.value,
      vaitro: "users"
    };

    try {
      const response = await fetch("https://foodoo.id.vn/pages/api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dulieund)
      });

      const ketqua = await response.json();
      console.log(ketqua);
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
    }

    setTimeout(function () {
      window.location.href = "DangNhap.html";
    }, 2000);
  }
});
