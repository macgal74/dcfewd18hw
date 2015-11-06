
  // when the page is loaded, do some stuff
  $( document ).ready(function(){
    // when any element with class ".sign-up-button" is clicked, display an alert
    $(".sign-up-button").click(function(){
      alert("We're Not Ready For Sign-Ups...Yet.");
    });
    $(".get-it-now").click(function() {
      alert("Check Back Later for Updates");
    });
  });


//when "read more" is clicked toggle open the remaining text
$( document ).ready(function(){

jQuery('.read_more_one a').on('click',function(){
  event.preventDefault();

});


function toggleRead_more_copy_one() {
  $('.read_more_copy_one').slideToggle();
  return false;
}

function toggleRead_more_copy_two() {
  $('.read_more_copy_two').slideToggle();
  return false;
}

$('.read_more_copy_one').hide();
$('.read_more_copy_two').hide();

$('.read_more_one a').click(toggleRead_more_copy_one);
$('.read_more_two a').click(toggleRead_more_copy_two);

});
