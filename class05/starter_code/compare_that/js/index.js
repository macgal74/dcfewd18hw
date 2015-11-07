$('#submit').click(compare);

function compare() {
    var a = $('#a').val();
    // console.log(a);

    var b = $('#b').val();
    // console.log(b);

    var comparison;

    if (a > b) {
      comparison = '>';
    } else if (a < b) {
      comparison = '<';
    } else if (a === b) {
      comparison = '===';
    }
    else {
      comparison = 'N/A';
    }

    $('#comparison').html(comparison);

}
