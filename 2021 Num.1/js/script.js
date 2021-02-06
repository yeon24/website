$(function() {
	/*버튼메뉴 클릭*/
	$('.menu').on('click', function() {
		$(this).fadeOut();
		$('nav').addClass('on');
		$('section').addClass('on');
		
	});
	//nav 영역 안의 메뉴 선택시 실행될 모션
	$('.gnb li').on('click', function() {
		$('.menu').fadeIn();
		$('nav').removeClass('on');
		$('section').removeClass('on');
		
		var i = $(this).index();
		$('section > div').removeClass('on');
		$('section > div').eq(i).addClass('on');
		
	});
	
	
});

/*$(":button").css('on');*/