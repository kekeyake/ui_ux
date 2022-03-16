$(document).ready(function(){
	/* 필터 모두 열어놓기 */
	$(".agc_sort_item").addClass("agc_active");
	/* 모바일 필터 모두 닫아놓기 */
	$(".agc_mobile_sort .agc_sort_item").removeClass("agc_active");

	/* 정렬 select */
	$(".agc_select_open").click(function(){
		$(".agc_select ul").hide();
		$(this).parent().find("ul").show();
	});
	$('html').click(function(){
		$(".agc_select ul").hide();
	});
	$('.agc_select_open').click(function(event){
		event.stopPropagation();
	});

	$(document).on('click', '.dropdown', function () {
		$(this).siblings().removeClass('open');
	});

	$(document).on('click', '.dropdown > .caption', function () {
		$(this).parent().toggleClass('open');
	});

	$(document).on('click', '.dropdown > .list > .item', function () {
		$('.dropdown > .list > .item').removeClass('selected');
		$(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
		var sort = $(this).attr('id');
		sortFunction(sort);
	});

	$(document).on('click', function (evt) {
		if ($(evt.target).closest(".dropdown > .caption").length === 0) {
			$('.dropdown').removeClass('open');
		}
	});


	/* 필터 중분류 열고 닫기 */
	$(".agc_sort_item > h5").click(function(){
		$(this).parent().toggleClass("agc_active");
	});
	/* 필터 소분류 열고 닫기 */
	$(".agc_lc").click(function(){
		$(this).parent().toggleClass("agc_active");
	});

	/* 모바일 필터 열기 */
	$(".agc_sort_open").click(function(){
		$(".agc_mobile_sort").addClass("agc_active");
	});
	/* 모바일 필터 닫기 */
	$(".agc_sort_close").click(function(){
		$(".agc_mobile_sort").removeClass("agc_active");
	});
	
	/* 체크박스 */
	$(".agc_cus_checkbox").click(function(){
		$(this).toggleClass("agc_active");
	});

	/* 공유하기 퀵*/
	$(".agc_q_share_open").click(function(){
		$(this).parent().find(".agc_share_pop").toggleClass("agc_active");
	});
	/* 공유하기 퀵 닫기 */
	$(".agc_share_close").click(function(){
		$(".agc_share_pop").removeClass("agc_active");
	});

	/* 공유하기 모바일 */
	$(".agc_sns_btn").click(function(){
		$(".agc_sns_pop").addClass("agc_active");
		$(".agc_pop_bg").addClass("agc_active");
	});
	/* 공유하기 모바일 닫기 */
	$(".agc_share_close").click(function(){
		$(".agc_sns_pop").removeClass("agc_active");
		$(".agc_pop_bg").removeClass("agc_active");
	});

	/* 저자 전체보기 열기 */
	$(".agc_wm_open").click(function(){
		$(".agc_wm_pop").addClass("agc_active");
		$(".agc_pop_bg").addClass("agc_active");
	});
	/* 저자 전체보기 닫기 */
	$(".agc_wm_close").click(function(){
		$(".agc_wm_pop").removeClass("agc_active");
		$(".agc_pop_bg").removeClass("agc_active");
	});

	/* 공유하기 열기 */
	$(".agc_btn_share").click(function(){
		$(".agc_share_pop").addClass("agc_active");
	});
	/* 공유하기 닫기 */
	$(".agc_share_close").click(function(){
		$(".agc_share_pop").removeClass("agc_active");
	});

	/* 공유하기 모바일 */
	$(".agc_mbtn_share").click(function(){
		$(".agc_sns_pop").addClass("agc_active");
		$(".agc_pop_bg").addClass("agc_active");
	});
	/* 공유하기 모바일 닫기 */
	$(".agc_share_close").click(function(){
		$(".agc_sns_pop").removeClass("agc_active");
		$(".agc_pop_bg").removeClass("agc_active");
	});

	/* 이 논문과 연관된 판례 자세히 보기 */
	$(".agc_pl_more").click(function(){
		$(".agc_prec_pop").addClass("agc_active");
		$(".agc_pop_bg").addClass("agc_active");
	});
	/* 이 논문과 연관된 판례 자세히 닫기 */
	$(".agc_pp_close").click(function(){
		$(".agc_prec_pop").removeClass("agc_active");
		$(".agc_pop_bg").removeClass("agc_active");
	});

	/* 댓글 작성 시 유의사항 열기 */
	$(".agc_reply_open").click(function(){
		$(this).parent().addClass("agc_active");
	});
	/* 댓글 작성 시 유의사항 닫기 */
	$(".agc_reply_close").click(function(){
		$(".agc_reply_write form > div").removeClass("agc_active");
	});
});

/* agc_fixed_noti */
var $el = $('.agc_quick_total');  
$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height > 10){
		$el.addClass('agc_active');}
		else{
		$el.removeClass('agc_active');
	}
});

/* agc_fixed_noti */
var $el = $('.agc_fixed_noti');  
$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height > 750){
		$el.addClass('agc_active');}
		else{
		$el.removeClass('agc_active');
	}
});
/* agc_fixed_noti m */
var $elm = $('.agc_mobile_btns');  
$(window).scroll(function(){
	var height = $(window).scrollTop();
	if(height > 200){
		$elm.addClass('agc_active');}
		else{
		$elm.removeClass('agc_active');
	}
});