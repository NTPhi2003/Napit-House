
var datban = document.querySelector('#datban');
datban.addEventListener('click', function(e){
  e.preventDefault();
  booking_check();
})

// Kiểm tra
function booking_check() {
  let date = document.querySelector('#date').value;
  let time = document.querySelector('#time').value;
  let name = document.querySelector('#name').value;
  let phone = document.querySelector('#phone').value;
  let people = document.querySelector('#people').value;
  let phoneRegex = /^0\d{9,10}$/;
  if (date == "" || time == "" || name == "" || phone == "" || people == "") {
    showErrorToast();
  } else {
    let gioBatDau = new Date("2003-12-07T06:30");
    // gioBatDau.setHours(6,30,0);
    let gioKetThuc = new Date("2003-12-07T22:00");
    let gioChon = new Date("2003-12-07T" + time);
    gioKetThuc.setHours(22,0,0);
    let ngayHienTai = new Date();
    let ngayChon = new Date(date);
    let stringPhone = phone.toString();
    if (phoneRegex.test(stringPhone)) {
      if (ngayChon < ngayHienTai || (gioChon < gioBatDau || gioChon > gioKetThuc)) {
        showErrorTimeToast()
        console.log(gioBatDau, gioChon)
      } else {
        showSuccessToast();
        setTimeout(function(){
          location.reload(true);
        }, 2000)
      }
    } else {
      showErrorToast();
    }
  }
}

// Toast Functions
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Tự động xóa toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Xóa toast khi nhấn
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      error: "fas fa-exclamation-circle"
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}

console.log('test')
function showSuccessToast() {
    toast({
      title: "Thành công!",
      message: "Bạn đã đặt bàn thành công! Chúng tôi sẽ sớm liên lạc với bạn",
      type: "success",
      duration: 5000
    });
  }

  function showErrorTimeToast() {
    toast({
      title: "Thất bại!",
      message: "Thời gian đặt bàn không hợp lệ",
      type: "error",
      duration: 5000
    });
  }

  function showErrorToast() {
    toast({
      title: "Thất bại!",
      message: "Vui lòng kiểm tra lại thông tin cá nhân",
      type: "error",
      duration: 5000
    });
  }

