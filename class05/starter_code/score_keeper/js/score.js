//When user clicks_ 0 add 0.

var total = 0;

$('#zero').click(zero);
$('#add5').click(add5);
$('#add10').click(add10);
$('#sub1').click(sub1);

function zero() {
  total = 0;
  $('#result').html(total);
}
//When user clicks_ 5 add 5.

function add5() {
  total = total + 5;
  $('#result').html(total);
}

//When user clicks_ 10 add 10.

function add10() {
  total = total + 10;
  $('#result').html(total);
}

//When user clicks_ 1 subrtact 1.

function sub1() {
  total = total - 1;
  $('#result').html(total);
}
