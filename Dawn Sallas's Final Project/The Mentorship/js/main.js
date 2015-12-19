$( document ).ready(function() {

	init();
		
});

function init(){
	var numberOfQuestions = 2;
	var q0Value = null;
	var q1Value = null;
	//set all answers to undefined

  $('input:radio[name=q0]').click(function() {
	  var val = $(this).val();
	  q0Value = val;
	  console.log(q0Value)
	});

	$('input:radio[name=q1]').click(function() {
	  var val = $(this).val();
	  q1Value = val;
	  console.log(q1Value)
	});






	$('#submitAnswers').click(function(){
		console.log('q0Value',q0Value);
		console.log('q1Value',q1Value);

		//show modal if all questions are answered
		if(q0Value != null || q1Value != null){
			$("#myModal").modal();
		}
		else{
			alert('please answer all questions')
		}
		
	});




}