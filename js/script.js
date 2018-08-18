$(document).ready(function(){

  $(".construct_label").click(function(e) {
    $(this).addClass("construct_label-active");
  });

  $(".construct").click(function(e) {
    $('#carousel5').carousel("next");
  });

  $(".construct1").on("click", function() {
    $(".service-picking_step1").css("background", "#2457c6");
    $(".service-picking_line1").css("background", "#2457c6");
    $(".service-picking_step1").css("color", "#fff");
    $(".service-picking_step").removeClass("service-picking_step-active");
    $(".service-picking_step2").addClass("service-picking_step-active");
  });

  $(".construct2").on("click", function() {
    $(".service-picking_step2").css("background", "#2457c6");
    $(".service-picking_line2").css("background", "#2457c6");
    $(".service-picking_step2").css("color", "#fff");
    $(".service-picking_step").removeClass("service-picking_step-active");
    $(".service-picking_step3").addClass("service-picking_step-active");
  });

  $(".construct3").on("click", function() {
    $(".service-picking_step3").css("background", "#2457c6");
    $(".service-picking_line3").css("background", "#2457c6");
    $(".service-picking_step3").css("color", "#fff");
    $(".service-picking_step").removeClass("service-picking_step-active");
    $(".service-picking_step4").addClass("service-picking_step-active");
  });

  $('.construct1').click(function(){
    var valueinput = $(this).find('[type=radio]').val();
    $('#questsend1').val(valueinput);
  });
  $('.construct2').click(function(){
    var valueinput = $(this).find('[type=radio]').val();
    $('#questsend2').val(valueinput);
  });
  $('.construct-q').click(function(){
    var valueinput = $(this).find('[type=checkbox]').val();
    $('#questsend3').val(valueinput);
  });
  


  $('#carousel').bcSwipe({ threshold: 50 });
  
  var show = true;
  var countbox = "#counts";
  $(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $(".spincrement").spincrement({
        thousandSeparator: "",
        duration: 3000,
        thousandSeparator: " "
      });
      show = false;
    }
  });

  $(".phone-masc").mask("+7(999) 999-99-99");

  $(".burger-block").click(function(e) {
    e.preventDefault();
    $(".menu-m").slideDown();
    $(".header-top").css("background", "#000");
  });

  $(".btn-modal").click(function(e) {
    e.preventDefault(); 
    var title = $(this).html();
      
    $(".modal-title").html(title);
    $(".input-hidden").val(title);
  });

  $(".layout-menu_link1").click(function(e) {
    e.preventDefault();
    $(".layout-img1").animate({height: 'show'}, 500);
    $(".layout-img3").animate({height: 'hide'}, 500);
    $(".layout-img4").animate({height: 'hide'}, 500);
    $(".layout-img2").animate({height: 'hide'}, 500);
    $(".layout-menu_link2").removeClass('layout-menu_link_active');
    $(".layout-menu_link3").removeClass('layout-menu_link_active');
    $(".layout-menu_link4").removeClass('layout-menu_link_active');
    $(this).toggleClass('layout-menu_link_active');
  });

  $(".layout-menu_link2").click(function(e) {
    e.preventDefault();
    $(".layout-img1").animate({height: 'hide'}, 500);
    $(".layout-img3").animate({height: 'hide'}, 500);
    $(".layout-img4").animate({height: 'hide'}, 500);
    $(".layout-img2").animate({height: 'show'}, 500);
    $(".layout-menu_link1").removeClass('layout-menu_link_active');
    $(".layout-menu_link3").removeClass('layout-menu_link_active');
    $(".layout-menu_link4").removeClass('layout-menu_link_active');
    $(this).toggleClass('layout-menu_link_active');
  });

  $(".layout-menu_link3").click(function(e) {
    e.preventDefault();
    $(".layout-img1").animate({height: 'hide'}, 500);
    $(".layout-img3").animate({height: 'show'}, 500);
    $(".layout-img4").animate({height: 'hide'}, 500);
    $(".layout-img2").animate({height: 'hide'}, 500);
    $(".layout-menu_link1").removeClass('layout-menu_link_active');
    $(".layout-menu_link2").removeClass('layout-menu_link_active');
    $(".layout-menu_link4").removeClass('layout-menu_link_active');
    $(this).toggleClass('layout-menu_link_active');
  });

  $(".layout-menu_link4").click(function(e) {
    e.preventDefault();
    $(".layout-img1").animate({height: 'hide'}, 500);
    $(".layout-img3").animate({height: 'hide'}, 500);
    $(".layout-img4").animate({height: 'show'}, 500);
    $(".layout-img2").animate({height: 'hide'}, 500);
    $(".layout-menu_link1").removeClass('layout-menu_link_active');
    $(".layout-menu_link3").removeClass('layout-menu_link_active');
    $(".layout-menu_link2").removeClass('layout-menu_link_active');
    $(this).toggleClass('layout-menu_link_active');
  });

  $(".menu-m_close").click(function(e) {
    e.preventDefault();
    $(".menu-m").slideUp();
    $(".header-top").css("background", "none");
  });

   $('.form').submit(function(e) {

      e.preventDefault();

      var form = $(this), button = $(this).find('[type=submit]'), thanks = $(this).find('.form-thank');
      button.html('Подождите').attr('disabled', true);

      $.post('form.php', form.serialize(), function(data) {
        thanks.slideDown();
      });

    });
  
});

var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#84afdf');
gradient.addColorStop(1, '#86dce0');

var gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
gradient1.addColorStop(0, '#2476c5');
gradient1.addColorStop(1, '#27b5c7');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: gradient,
            borderColor: gradient1,
            borderWidth: 7,
            pointBorderColor: "#fff",
            pointBackgroundColor: "#e8e8e8",
            pointBorderWidth: 3,
            pointRadius: 10,
            pointHoverRadius: 10,
            data: [0, 7, 5, 10, 13, 30, 32],
        }]
    },

    // Configuration options go here
    options: {
    	 scales:
        {		
        		yAxes: [{
 					     
            }],
            xAxes: [{
                
            }]
        },
		        legend: {
		        	display: false
		        }
    }
});


var video = document.getElementById("video");
var vid = document.getElementById("play");

vid.onclick = function(e){
  e.preventDefault();
  if (video.paused) {
  	document.getElementById("btn-play").src="img/play-button.png";
    video.play();
  }
  else{
  	document.getElementById("btn-play").src="img/pause-button.png";
    video.pause();
  } 
}






