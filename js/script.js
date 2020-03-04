$(function(){

$('.First').click(function(){
$('.display1').show();
$('.display2').hide();


});

$('.Second').click(function(){
    $('.display1').hide();
    $('.display2').show();
    
    });
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll>500){
    $('.hscroll').slideDown();
}
else{    $('.hscroll').slideUp(); }
    
});

$(".fancybox").fancybox();
$('.one').css('display','block');
$('.acordion h3').click(function(){
    $(this).next().slideDown();
    $('.acordion p').not($(this).next()).slideUp();

});

$('.timer').countTo();
// $('.all').mixitup();
var containerEl = document.querySelector('.all .container');

var mixer = mixitup(containerEl);


});
