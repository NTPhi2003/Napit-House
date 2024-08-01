
// Cuộn header
var lastScrollTop = 0;
$(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.header_container').css('transform', 'translateY(-100%)');
    } else {
        $('.header_container').css('transform', 'translateY(0)');
    }
    lastScrollTop = st;
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('navbar_button')) {
        event.preventDefault(); 

        document.body.classList.remove('fade-in'); 
        setTimeout(function() {
          window.location.href = event.target.href; 
        }, 0);
      }
    });
    document.body.classList.add('fade-in');
  });