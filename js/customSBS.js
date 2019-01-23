$(document).ready(function()
 {
    $(".bars").click(function()
    { 
      $('.bars i').toggleClass('fa-times')
      $(".main").toggleClass("custom");
  });
  });


$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.navbar').css('background','#0e1111');
} else {
$('.navbar').css('background','transparent');
}
});


var myVideo = document.getElementById("myVideo");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myVideo.pause()
  } else {
    myVideo.play();
  }
};
myVideo.onplaying = function() {
  isPlaying = true;
};
myVideo.onpause = function() {
  isPlaying = false;
};

// jquery section accordion


$(document).ready(function(){
        
        $(".collapse.in").each(function(){
          $(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
        });
        
        
        $(".collapse").on('show.bs.collapse', function(){
          $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hide.bs.collapse', function(){
          $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });

 
  
    });





// js section news



filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




  
//$(window).load(function()
//{
//   $(".loading-page .sk-cube-grid").fadeOut(2000,function(){
//     $(this).parent().fadeOut(2000,function(){
//       $("body").css("overflow","auto");
//       $(this).remove();
//     });
//   });
// });


       