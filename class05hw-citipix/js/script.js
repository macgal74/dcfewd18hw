//wait for the DOM elements to load before executing
$(document).ready(function() {

  // Create a function that runs whenever the submit button is clicked
    function iHaveBeenClicked(){
        //prevent the submit button from refreshing the page
        event.preventDefault();

        //get the value of the #city-type
        var citytypevalue = $('#city-type').val();


        // if the user inputs "New York" / "New York City" / "NYC" change the CSS class to 'nyc'
        if(citytypevalue == "New York" || citytypevalue == "New York City" || citytypevalue == "NYC") {
          $('body').attr('class','nyc');
          $("form").trigger("reset");
          $('h1').text('New York City');
        }

        // if the user inputs "San Francisco" / "SF" / "Bay Area" change the CSS class to 'sf'
        if(citytypevalue == "San Francisco" || citytypevalue == "SF" || citytypevalue == "Bay Area") {
          $('body').attr('class', 'sf');
          $("form").trigger("reset");
          $('h1').text('San Francisco');
        }

        // if the user inputs "Los Angeles" / "LA" / "LAX" change the CSS class to 'la'
        if(citytypevalue == "Los Angeles" || citytypevalue == "LA" || citytypevalue == "LAX") {
          $('body').attr('class', 'la');
          $("form").trigger("reset");
          $('h1').text('Los Angeles');
        }

        // if the user inputs "Austin" or "ATX" change the CSS class to 'austin'
        if(citytypevalue == "Austin" || citytypevalue == "ATX") {
          $('body').attr('class', 'austin');
          $("form").trigger("reset");
          $('h1').text('Austin');
        }

    }
    jQuery('#submit-btn').click(iHaveBeenClicked);

});
