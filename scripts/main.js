$( function () {
            console.log("%c%s", "color: #5e8e5e; background: #ded8d8; font-size: 24px;","Hello There ;) ");


    

    $('.menu-icon').on('click', function(){
        $('.menu-icon').toggleClass('change');
        $('body').toggleClass('menu-open');
        
  
    })

    
    var didScroll,
        lastScrollTop = 0,
        delta = 5,
        navbarHeight = $('.tops-croll-nav').outerHeight(),
        projectTop = $('.top-scroll-nav-project').outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > projectTop){
            $('.top-scroll-nav-project').hide();
        
        } else {
            $('.top-scroll-nav-project').show();
        }
        if (st > lastScrollTop || st < 100){
            
            $('.top-scroll-nav').removeClass('nav-down').addClass('nav-up');
        } else {
            
            if(st + $(window).height() < $(document).height()) {
                $('.top-scroll-nav').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
    
 
    
    // swipe event 

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 5 ) {
            $('.menu-icon').addClass('change');
            $('body').addClass('menu-open');
         
        } else if ( xDiff < -5) {
            $('.menu-icon').removeClass('change');
            $('body').removeClass('menu-open');
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

  // form ajax sending 
    
    
    $('#form').submit(function(e) {
          if ( $.trim($(this).val()) == "") {
               e.preventDefault();
          }
        
        var errors = false;
        $(this).find('span').empty();
        
        $(this).find('input, textarea').each(function(){
            if ( $.trim($(this).val()) == ""){
                errors = true;
                $('#send-result').html('Please fill out all required fields.');

            }
        })
        
        if (!errors){
            var data = $('#form').serialize();
        $.ajax({
            type: 'POST',
            url: '../scripts/mail2.php',
            data: data
        }).done(function() {
           $('#send-result').html('Thank you. Email has been sent');
            $('#form').trigger('reset');
        })
        .fail(function() {
            $('#send-result').html('Please try again')

        })
        }

         return false;
        })
    
    
    //back to top
    
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

        


});