//your JS code here. If required.
 document.getElementById('removeButton').addEventListener('click', function() {
  var colorSelect = document.getElementById('colorSelect');
  var selectedColor = colorSelect.value; // Get the selected color value

  // Find the option with the selected color value and remove it
  for (var i = 0; i < colorSelect.options.length; i++) {
    if (colorSelect.options[i].value === selectedColor) {
      colorSelect.remove(i);
      break;
    }
  }
});