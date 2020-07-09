$(function(){
		$('.f_more').click(function(){
		$(this).toggleClass('circle')
		$('.family_site').toggle()
	  });

	});

	$(function(){
		$('.board01 .s04_tab01').addClass('current');
		$('.tabb h3').on('click',function(e){
			e.preventDefault();
			$('.board01 .tabb').removeClass('current');
			$(this).parent().addClass('current');
		})


});

	$(document).ready(function(){
		$('.section03 .owl-carousel').owlCarousel({
			autoplayHoverPause:Boolean,
			autoplay:Boolean,
			loop:true,
			items:1,
			nav:true
		});
		$('.section07 .owl-carousel').owlCarousel({
			autoplayHoverPause:Boolean,
			autoplay:Boolean,
			loop:true,
			items:1,
			nav:true
		});


		$('.section06 .owl-carousel').owlCarousel({
			loop:true,
			items:1,
			nav:true
		});
		$('.s08_box07_banner .owl-carousel').owlCarousel({
			loop:true,
			items:1,
			nav:true
		});
		$('.s08_box08_banner .owl-carousel').owlCarousel({
			loop:true,
			items:1,
			nav:true
		});


	
	});
