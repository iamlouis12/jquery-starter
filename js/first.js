// console.log("working")

// const jquery = require("./jquery")

// for(i = 0; i < 3; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function(){
//         document.querySelector('h1').style.color = 'red';
//         document.querySelector('p').style.color = 'red';
//     })
// }
// console.log(jQuery('h1').css('font-size'));
// console.log(jQuery('p').css('font-size'));
// console.log(jQuery('h1').css('color'));

// jQuery('img').click(function(){
//     jQuery('img').hide()
// });

//we use either jquery or $ to select a code
// whenever we want to get, we use one value but we use two values to set
// for example of values below ('color','red')

 //$('h1').css('color','red')
 //$('h1').addClass('change_font change_background')
// $('h1').removeClass('change_background')



// $( "#clickme" ).click(function() {
//     $( "#image" ).hide( "slow", function() {
//       //alert( "Animation complete." );
//     });
//   });

// $( ".clickme" ).click(function() {
//     $( "#image" ).slideUp( "slow", function() {
//       // Animation complete.
//     });
//   });

  $(".flat").click(function(){
    $("img").attr("src", "image/img29.jpg")
  });

  
  $(".duplex").click(function(){
    $("img").attr("src", "image/img28.jpg")
  });

  
  $(".mansion").click(function(){
    $("img").attr("src", "image/img25.jpg")
  });

