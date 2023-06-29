// function check() {
//      var em =  document.getElementById("email");
//      var pa =  document.getElementById("password");
//      var md =  document.querySelector(".overlay")
//      var dk = document.querySelector("dk");
//      if(em.value =="iloveyou" && pa.value == "3000")
//      {
//             window.location.href = "gift.html";            
//      }else{
//            window.confirm("sai tên đăng nhập hoặc mật khẩu ");
//      }
     
    
// }


  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    // Kiểm tra thông tin đăng nhập (ví dụ)
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username === "nhanqua" && password === "123456") {
      // Đăng nhập thành công, chuyển hướng đến trang khác
      window.location.href = "gift.html";
    } else {
      // Xử lý trường hợp đăng nhập không thành công
      alert("Thông tin đăng nhập không chính xác");
      // Không cho phép chuyển trang
    }
  });

