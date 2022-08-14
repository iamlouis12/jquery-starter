// $('p').last().addClass('selected');

$("li").hover(function(){
        $(this).append($("<span> ***</span>"));
    }, function(){
        $(this).find("span").last().remove();
    }
);

$("li.fade").hover(function() {
    $(this).fadeOut( 100 );
    $(this).fadeIn( 500 );
});

// $("p")
// .contents()
// .filter(function(){
//     return this.nodeType !== 1;
// })
// .wrap("<b></b>");