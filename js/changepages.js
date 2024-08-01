document.addEventListener('DOMContentLoaded', function() {
    // Sử dụng event delegation để theo dõi sự kiện click trên tất cả các thẻ a
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