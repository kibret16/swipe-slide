 $(document).ready(function(){
      $(".scroll-left").click(function(){
          p = $(".swipe-slide-container").scrollLeft();
          p = $(".swipe-slide-container").animate({scrollLeft: p - 350}, 200, 'linear');
      });
      $(".scroll-right").click(function(){
          p = $(".swipe-slide-container").scrollLeft();
          p = $(".swipe-slide-container").animate({scrollLeft: p + 350}, 200, 'linear');
      });
  });
