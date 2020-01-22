$(document).ready(function() {

  

	$(".toggle").click(function(){
		$(".main_nav ").slideToggle(1000);
	});


	$("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
	
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		console.log(scroll)
		if(scroll > 100){
			$('.main_header').addClass("fixed");
		}
		else{
			$('.main_header').removeClass("fixed");
		}
	});

	$('.custom_accordion').click(function(){    
    //$(this).addClass('active');
    if($(this).hasClass('active')){
    	$(this).removeClass('active');
    }
    else{        
    	$('.custom_accordion').removeClass('active');
    	$(this).addClass('active');
    }
});

	$(".nav-tabs a").click(function(){
		$(this).tab('show');
	});

	$('.step').each(function(index, element) {
    // element == this
    $(element).not('.active').addClass('done');
    $('.done').html('<i class="icon-ok"></i>');
    if($(this).is('.active')) {
    	return false;
    }
});   


	$("#owl-demo-one").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  }); 

	$("#owl-demo-two").owlCarousel({
		
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
      
  }); 

	$("#owl-demo-three").owlCarousel({
		
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
      
  }); 

	$("#owl-demo-four").owlCarousel({
		
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
      
  }); 


	$("#owl-demo-five").owlCarousel({
		
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
      
  }); 

	// $("#panel_details_one").click(function(){
	// 	$(".show_panel_details_one").hide();
	// });

	// $("#panel_details_one").click(function(){
	// 	$(".show_panel_details_one").show();
	// });

	$("#panel_details_one").click(function(){
		$(".show_panel_details_one").toggle(1000);
	});


	('#panel_details_one').click(function(){    
    //$(this).addClass('active');
    if($(this).hasClass('active')){
    	$(this).removeClass('active');
    }
    else{        
    	$('.custom_accordion').removeClass('active');
    	$(this).addClass('active');
    }
});


  // $("#add_ons1").click(function(){
  //   $("p").hide();
  // });
  // $("#add_ons1").click(function(){
  //   $("p").show();
  // });


});

