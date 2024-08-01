// Thay đổi background khi nhấn vào nút
let btn_right = document.querySelector('.home-nav');
let btn_left = document.querySelector('.home-nav2');

let check = 1;
btn_right.addEventListener('click', () => {
    check ++;
    if (check == 4) {
        check = 1;
    }
    if (check == 0) {
        check = 3;
    }
    changeImage(check)
});

btn_left.addEventListener('click', () => {
    check --;
    if (check == 4) {
        check = 1;
    }
    if (check == 0) {
        check = 3;
    }
    changeImage(check)
});



// Thay đổi ảnh
function changeImage(check) {
    let home = document.querySelector('.trangchu-home')
    setTimeout(function() {
        if (check == 1) {
            home.classList.add('animate');  
            home.style.backgroundImage = "url('./image/resnapit.png')";
        }
        if (check == 2) {
            home.classList.add('animate');
            home.style.backgroundImage = "url('./image/Inicio.png')";
        }
        if (check == 3) {
            home.classList.add('animate');
            home.style.backgroundImage = "url('./image/pizza-background.png')";
        }
      }, 0);
      home.classList.remove('animate'); 
}