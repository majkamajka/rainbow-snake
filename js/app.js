document.addEventListener("DOMContentLoaded", function(){

  var pix = document.querySelectorAll(".pixel");

  function randomColor () {
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
    this.style.backgroundImage = "url('images/face.png')"
    var dupa = this;
    setTimeout(function white () {
      dupa.style.backgroundColor = "white";
      dupa.style.backgroundImage = "none";
    }, 500);
  };

  function hideFace () {
    this.style.backgroundImage = "none";
  }


  for (var i = 0; i < pix.length; i++) {
    pix[i].addEventListener("mouseover", randomColor);
    pix[i].addEventListener("mouseout", hideFace);
  }

});

// IDEA: add eyes and face to the snake head. -> hover, or add element
