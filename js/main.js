(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});





$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1600:{
          items:1,
          nav:true
      }
  }
});

// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false,
          nav:false,
      },
      767:{
          items:1,
          dots:false,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1500:{
          items:1
      }
  }
});

// review-active
$('.financial_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,

  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1500:{
          items:1
      }
  }
});

// review-active
$('.testmonial_active2').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:false,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
dots:true,
autoplayHoverPause: true,
autoplaySpeed: 800,
// dotsData: true,
center: true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1
      },
      1200:{
          items:1
      },
      1500:{
          items:1
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

        
      //Mobile money and download handling starts here
      

      $('.fancybox').on('click', function() {
        var visibleLinks = $('.fancybox');
    
        $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );
    
        return false;
      });

      $('.small-btn').on('click', function(){
        // shows the number of the song to download
        console.log('initial', $('#montant').val());
        $('#montant').val(250); // change the amount to be for singles 250
        $('#transaction-type').val('single-purchase'); // change the transaction type
        $('#song-title').val($(this).attr('id')); // change the song to download
        $('.descr').html('You are about to make a payment of <b>250frs</b>'); //
        console.log('after', $('#montant').val());
    
      });
    
      $('.play').on('click', function(){
        // shows the number of the song to download
        console.log('initial', $('#montant').val());
        $('#montant').val(1500); // change the amount to be for album 1500
        $('#transaction-type').val('album-purchase'); // change the transaction type
        $('#song-title').val(0); // change the song to download
        $('.descr').html('You are about to make a payment of <b>1500frs</b>'); //
        console.log('after', $('#montant').val());
    
      });
    // $('#momosubmit').click(function(){
    //   if($('#montant').val().trim(){
    //        alert('Input can not be left blank');
    //        return false;
    //     }
    //  });    

    $('#formmomo').submit(function(){
      var transaction = $("#transaction-type").val();
      var title = $("#song-title").val();
      $.ajax({
        url: "https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml",
        type: 'GET',
        dataType: "jsonp",
        data : $('#formmomo').serialize(),
        success: function(){
        console.log('form submitted.');
      },
      error: function ( response ){
        console.log('form not submitted.');
        console.log(transaction);
        console.log(response);
        if(transaction == 'album-purchase'){
          // initiate album download here
          alert('Thank you for Downloading!');
          downloadFile('album/G2Melody_Album.zip', 'G2Melody_Album');
          $('#paymentpop').fadeOut(function(){
            //$(this).remove();
            $(this).hide();
            //$('#afterpay').show();
            // opener.location.reload(true);
            // self.close();\
          });
          location.reload();
        }
        else if (transaction == 'donating') {
          if(($.trim($('#montant').val()) === '') || ($.trim($('#don_number').val()) === '')){
                   alert('Input can not be left blank');
                   return false;
                }
          else {
            alert('Thank you for Donating!');
            $('#paymentpop').fadeOut(function(){
            $(this).remove();
            //$(this).hide();
            //$('#afterpay').show();
            // opener.location.reload(true);
            // self.close();\
          });
          location.reload();
            }
        }
        else if (transaction == 'single-purchase'){
          alert('Thank you for Downloading!');
          if (title == 1) {
            // initiate album download here
            downloadFile('album/G2Melody_Album/01_G2____Love.zip', 'Love by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 2){
            downloadFile('album/G2Melody_Album/02_G2____Better_than_life.zip', 'Better than Life by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 3){
            downloadFile('album/G2Melody_Album/03_G2____When_We_Pray.zip', 'When we pray by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 4){
            downloadFile('album/G2Melody_Album/04_G2____We_Are_Better_Together.zip', 'We are better together by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 5){
            downloadFile('album/G2Melody_Album/05_G2____Nothing_Without_You.zip', 'Nothing without you by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 6 ){
            downloadFile('album/G2Melody_Album/06_G2____Haven_of_Rest_Love_lifted_me.zip', 'Haven of rest by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          else if(title == 7){
            downloadFile('album/G2Melody_Album/07_G2____We_Need_Peace.zip', 'We need peace by G2');
            $('#paymentpop').fadeOut(function(){
              $(this).hide();
            });
            location.reload();
          }
          
        }
        $('#exampleModalCenter').modal('toggle');
      }
      });
      return false;
    });
    // $('.justGet').on('click', function() {
    // 	downloadFile('images/G2Melody_Album.zip', 'G2Melody_Album')
    // })
  
    function downloadFile(fileURL, fileName) {
        // for non-IE
      if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
        if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
            document.location = save.href; 
    // window event not working here
          }else{
            var evt = new MouseEvent('click', {
              'view': window,
              'bubbles': true,
              'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
          }	
      }
  
      // for IE < 11
      else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
      }
      }

})(jQuery);	