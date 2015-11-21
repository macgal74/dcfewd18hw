// Create our variable/array

var images = ["images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg",];


var i = 0;


//Listen for click events
$(document).ready(function() {
  $("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
  $("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});


//Got Previous image.
function previousImage() {
  if (i>0)  {
    i = i-1;
  }
  $("#image-to-vote-on").attr("src",images[i]);

}


//Go to next image.
function nextImage() {
  if (i<images.length-1) {
    i = i+1;
  } else {i=0;
  }
  $("#image-to-vote-on").attr("src",images[i]);
}
