document.addEventListener("DOMContentLoaded", function(){

  var pix = document.querySelectorAll(".pixel");

  // function white (element) {
  //
  //   element.style.backgroundColor = "white";
  // }

  function randomColor () {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
    var dupa = this;
    setTimeout(function white () {
      dupa.style.backgroundColor = "white";
    }, 500);

  };



  for (var i = 0; i < pix.length; i++) {
    pix[i].addEventListener("mouseover", randomColor);
  }



});
