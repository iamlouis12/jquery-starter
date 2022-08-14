//prevent spoilerphob

//1, hide spoiler
$(".spoiler span").hide();
$(".spoiler2 span").hide();
// 2, add a button
$(".spoiler").append("<button> Reveal Gskills </button>");
$(".spoiler2").append("<button> Reveal Gskills courses </button>");
//3, when button pressed
$("button").click(function(){
    //3.1, show spoiler next to the button clicked
    $(this).prev().show();
    //3.2, get rid of button
    $(this).remove();
});


