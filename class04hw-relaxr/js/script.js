
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

      $('.read_more').click(function(){
        event.preventDefault();
        $('#read_more_copy').slideDown();
        $('.read_more').hide();
        $('.read_less').show();
  });

      $('.read_less').click(function(){
        $('#read_more_copy').slideUp();
        $('.read_less').hide();
        $('.read_more').show();
        event.preventDefault();
      });

});
