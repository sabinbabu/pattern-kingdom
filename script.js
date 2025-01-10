// stars
const triangle = document.getElementById("triangle");
const square = document.getElementById("square");
const pyramid = document.getElementById("pyramid");
const diamond = document.getElementById("diamond");

// numbers
const numTriangle = document.getElementById("num-triangle");
const numSquare = document.getElementById("num-square");
const numPyramid = document.getElementById("num-pyramid");
const numDiamond = document.getElementById("num-diamond");

// shapes
const row = 5;
const shapeTriangle = document.getElementById("shape-triangle");
const shapeSquare = document.getElementById("shape-square");
const shapePyramid = document.getElementById("shape-pyramid");
const shapeDiamond = document.getElementById("shape-diamond");

// stars
// triangle
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    triangle.innerHTML += "*";
  }
  triangle.innerHTML += "<br>";
}

// square
for (let i = 1; i <= row; i++) {
  for (let j = 1; j < row; j++) {
    square.innerHTML += "*" + "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  square.innerHTML += "<br>";
}

// pyramid
//outer loop
for (let i = 1; i <= row; i++) {
  //inner loop for space
  for (let space = 1; space <= row - i; space++) {
    pyramid.innerHTML = pyramid.innerHTML + "&nbsp;";
  }
  //inner loop for star
  for (let star = 1; star <= i; star++) {
    pyramid.innerHTML = pyramid.innerHTML + "* ";
  }
  pyramid.innerHTML = pyramid.innerHTML + "<br>";
}

// diamond
// upper part
for (let i = 1; i <= row; i++) {
  for (let space = 1; space <= row - i; space++) {
    diamond.innerHTML += "&nbsp;" + "&nbsp;";
  }
  for (let star = 1; star <= i; star++) {
    diamond.innerHTML += "*" + "&nbsp;" + "&nbsp;";
  }
  diamond.innerHTML += "<br>";
}
// lower part
for (let i = 4; i >= 1; i--) {
  for (let space = row; space >= i + 1; space--) {
    diamond.innerHTML += "&nbsp;" + "&nbsp;";
  }
  for (let star = i; star >= 1; star--) {
    diamond.innerHTML += "*" + "&nbsp;" + "&nbsp;";
  }
  diamond.innerHTML += "<br>";
}

// numbers
// triangle
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    numTriangle.innerHTML += j;
  }
  numTriangle.innerHTML += "<br>";
}

// square
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= 5; j++) {
    numSquare.innerHTML += j + " &nbsp;";
  }
  numSquare.innerHTML += "<br>";
}

// pyramid
let output = 1;
for (let i = 1; i <= row; i++) {
  for (j = 1; j <= row - i; j++) {
    numPyramid.innerHTML += "&nbsp;";
  }
  for (k = 1; k < i; k++) {
    numPyramid.innerHTML += output + "&nbsp;";
    output++;
  }
  numPyramid.innerHTML += "<br>";
}

// diamond
// upper part
let print = 1;
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= row - i; j++) {
    numDiamond.innerHTML += "&nbsp;" + "&nbsp;";
  }
  for (let k = 1; k < i; k++) {
    numDiamond.innerHTML += print + "&nbsp;" + "&nbsp;";
    print++;
  }
  numDiamond.innerHTML += "<br>";
}

// lower part
let lowerPrint = 6;
for (let i = 4; i >= 1; i--) {
  for (let j = row; j >= i + 1; j--) {
    numDiamond.innerHTML += "&nbsp;" + "&nbsp;";
  }
  for (let k = i - 1; k >= 1; k--) {
    numDiamond.innerHTML += lowerPrint + "&nbsp;" + "&nbsp;";
    lowerPrint--;
  }
  numDiamond.innerHTML += "<br>";
}

// shapes
// triangle
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === i || j === 1 || i === row) {
      shapeTriangle.innerHTML += "*";
    } else {
      shapeTriangle.innerHTML += "&nbsp;&nbsp;";
    }
  }
  shapeTriangle.innerHTML += "<br>";
}

// square
for (let i = 1; i <= row; i++) {
  for (j = 1; j <= row; j++) {
    if (i === 1 || i === row || j === 1 || j === row) {
      shapeSquare.innerHTML += "*&nbsp;&nbsp;";
    } else {
      shapeSquare.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
  }
  shapeSquare.innerHTML += "<br>";
}

//pyramid
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= row - i; j++) {
    shapePyramid.innerHTML += "&nbsp;&nbsp;";
  }
  for (let k = 1; k <= i; k++) {
    if (k === 1 || k === i || i === row)
      shapePyramid.innerHTML += "*&nbsp;&nbsp;";
    else shapePyramid.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  shapePyramid.innerHTML += "<br>";
}

// diamond
// upper part
for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= row - i; j++) {
    shapeDiamond.innerHTML += "&nbsp;&nbsp;";
  }
  for (let k = 1; k <= i; k++) {
    if (k === 1 || k === i) shapeDiamond.innerHTML += "*&nbsp;&nbsp;";
    else shapeDiamond.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  shapeDiamond.innerHTML += "<br>";
}
// lower part

for (let i = row; i >= 1; i--) {
  for (let j = row; j >= i; j--) {
    shapeDiamond.innerHTML += "&nbsp;&nbsp;";
  }
  for (let k = i - 1; k >= 1; k--) {
    if (k === i - 1 || k === 1) shapeDiamond.innerHTML += "*&nbsp;&nbsp";
    else shapeDiamond.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  shapeDiamond.innerHTML += "<br>";
}
