$(document).ready(function(){
    // Desplazamiento suave a los enlaces de anclaje
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash;
        var $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

window.addEventListener('load', function() {
    var logoNavHeight = document.querySelector('.logo-nav').offsetHeight;
    document.documentElement.style.setProperty('--logo-nav-height', logoNavHeight + 'px');
  });