//create the canvas
function makeGrid() {

$( "#pixelCanvas" ).find("tr").remove(); // reset table
var table = document.getElementById("pixelCanvas");

const rw = $('#inputHeight').val(); // read rows
const co = $('#inputWeight').val(); //read colums

for (var n = 0; n < rw; n++) {
  var row = table.insertRow(0);
  for (var m = 0; m < co; m++) {
    var cell = row.insertCell(0);
  }
}

}

// overiding submit event of the form
$(document).submit("#sizePicker", function() {
  makeGrid();
  return false;
})

// get a color and apply to the cell
$(document).on( 'click', 'td', function() 
{
  const selectedColor = $( '#colorPicker' ).val();
  $(this).css('background-color', selectedColor);
})