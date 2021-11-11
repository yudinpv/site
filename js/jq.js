$( function() {
    $( "#accordion" ).accordion({
        icons: null,
        collapsible: true,
        heightStyle: "content",
        active: true,


    });
    $( ".selector" ).accordion( "refresh" );
});


$(document).ready(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('open-menu');
        $('.nav__list').toggleClass('open-menu');
    });
});
