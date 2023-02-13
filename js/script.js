$(document).ready(function(){

    // nav hover

    $('nav .item ul.main_menu li a').mouseenter(function(){
        $("nav .item ul.main_menu li ul.sub_menu").slideDown();
    });
    
    $("nav").mouseleave(function(){
        $("nav .item ul.main_menu li ul.sub_menu").slideUp();
    });


     // go to top btn
    $(".btn_gotoTop").click(function(){
      $("html, body").animate({scrollTop:0},600);
    })
    

    // video control

    let video = $("video");
    let PlayBtn = $(".play-btn");
    let SoundBtn = $(".sound-btn");

    function VideoPlay () {
        if (video.get(0).paused) {
			video.get(0).play();
		} else {
			video.get(0).pause();
		}
    }

    function SoundPlay () {
        if (  video.prop('muted')) {
            video.prop('muted', false);
		} else {
            video.prop('muted', true);
		}
    }

     PlayBtn.click(function(){
        VideoPlay ()
        $(this).toggleClass("on");
     })

     SoundBtn.click(function(){
        SoundPlay ()
        $(this).toggleClass("on");
     })


    // chart  swiper

        var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 32,
        slidesPerGroup: 5,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      
    // Event swiper

       var swiper2 = new Swiper('.EventSwiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      
      
      //   Event swiper play button
      let count = 0

      $('.control-btn').on('click', function() {
        count++
        if(count%2 == 0){
          $(this).removeClass("on")
          swiper2.autoplay.stop();
          return false;
        }
        if(count%2 == 1){
          $(this).addClass("on")
          swiper2.autoplay.start();
          return false;
        }
      });

      // Banner Btn
      
      $('.banner-btn').on('click', function() {
        count++
        if(count%2 == 0){
          $(this).removeClass("on")
          swiper3.autoplay.start();
          return false;
        }
        if(count%2 == 1){
          $(this).addClass("on")
          swiper3.autoplay.stop();
          return false;
        }
      });

      // special seat

      let list = $(".content-wrap ul.list li")
      for(let i = 0; i <4; i++){
        list.eq(i).hover(function(){
          $(".special_seat .inner .content-wrap .img-wrap img").attr("src", `./img/seat${i+1}.png`);
          $(this).addClass("active");
          list .not($(this)).removeClass("active");
        })
      }
     
      // banner swiper

       var swiper3 = new Swiper('.bannerSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        slidesPerGroup: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });

      // select btn
      for (let i = 0; i < 2; i++) {
        $(".tab-wrap .tab h3").eq(i).click(() => {
            $(".tab-wrap .tab h3").removeClass("select");
            $(".mySwiper").removeClass("show");
            $(".mySwiper").eq(i).addClass("show");
            $(".tab-wrap .tab h3").eq(i).addClass("select");
          });
      }
      

});

//scroll event

$(window).scroll(function () { 
	var scrollValue = $(document).scrollTop(); 
   if(scrollValue>200){
     $("#nav").addClass("fixed")
     $(".fixedBtn_wrap").addClass("topBtn")
   } else {
    $("#nav").removeClass("fixed")
    $(".fixedBtn_wrap").removeClass("topBtn")
   }
});

