$(document).ready(function(){
	var count = 0;

	$(".nav-right").click(function(){
		$(".animated-nav").show(400);
	});
	$(".close-nav").click(function(){
		$(".animated-nav").hide(400);
	});


	$(window).scroll(function(){
		if ( ($(window).scrollTop())> 0 && document.getElementsByClassName('box-shadow').length === 0){
				count += 1;
				$(".top-nav-container").addClass("box-shadow").css({
		            'position': 'fixed',
		            "z-index": "100",
	        	});

	        	$(".top-nav-container").animate({
	        		backgroundColor: "#4f3276",
	        	}, 200);
        }
        else if ( ($(window).scrollTop())<= 0 ) {
	        	$(".top-nav-container").removeClass("box-shadow").css({
		            'position': 'absolute',
		            "z-index": "100", 
	        	});

	        	$(".top-nav-container").animate({
	        		backgroundColor: "transparent",
	        	}, 200);
        }
		
	})
});

