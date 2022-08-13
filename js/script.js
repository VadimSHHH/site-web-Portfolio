$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__bmenu').toggleClass('active');
        $('body').toggleClass('lock');
  });   
    });
//scroll fluide
    $(document).ready(function(){
      // scroll fluide pour toutes ligne
      $("a").on('click', function(event) {
    
        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
         
          event.preventDefault();
    
          // sovgard hash 
          var hash = this.hash;
    
          // methodeanimate() jQuery pour faire de scroll fluide pour la page  
          // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
            window.location.hash = hash;
          });
        } // Конец, если
      });
    });

   