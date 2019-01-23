
$(document).ready(function()
 {
    $(".bars").click(function()
    { 
      $('.bars i').toggleClass('fa-times')
      $(".main").toggleClass("custom");
  });
  });




$(window).scroll(function(){
      if ($(this).scrollTop() >=100) {
          $('.navbar').addClass('fixed');
      } else {
          $('.navbar').removeClass('fixed');
      }
  });





function openRight(evt, AboutUs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(AboutUs).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




