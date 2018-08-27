
var shape = document.getElementById("react-shape");

shape.addEventListener('click', shapeHasClicked());


function shapeHasClicked() {
  // The length of the shape
  var length = Math.random();
  length = length * 500;
  length = Math.floor(length);
  console.log(length);

  // The colour of the shape
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // The length of the shape
  var fromTop = Math.random();
  fromTop = fromTop * 400;
  fromTop = Math.floor(fromTop);
  console.log(fromTop);

  // The length of the shape
  var fromLeft = Math.random();
  fromLeft = fromLeft * 400;
  fromLeft = Math.floor(fromLeft);
  console.log(fromLeft);

  shape.style.width = length+'px';
  shape.style.height = length+'px';
  shape.style.background = getRandomColor();
  shape.style.top = fromTop+'px';
  shape.style.left = fromLeft+'px';
}
