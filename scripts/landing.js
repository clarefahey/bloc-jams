<<<<<<< HEAD
<<<<<<< HEAD
var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
          point.style.opacity = 1;
          point.style.transform = "scaleX(1) translateY(0)";
          point.style.msTransform = "scaleX(1) translateY(0)";
          point.style.WebkitTransform = "scaleX(1) translateY(0)";
    };

var animatePoints = function(points) {
  forEach(points, revealPoint);
};

window.onload = function() {
    if (window.innerHeight > 950) {
    animatePoints(pointsArray);
    }

    window.addEventListener("scroll", function(event) {
      if (pointsArray[0] .getBoundingClientRect().top <= 500) {
             animatePoints(pointsArray);
         }
    });
  }
=======
var animatePoints = function() {

     var points = document.getElementsByClassName('point');

     var revealFirstPoint = function() {
         points[0].style.opacity = 1;
         points[0].style.transform = "scaleX(1) translateY(0)";
         points[0].style.msTransform = "scaleX(1) translateY(0)";
         points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
     };

     var revealSecondPoint = function() {
         points[1].style.opacity = 1;
         points[1].style.transform = "scaleX(1) translateY(0)";
         points[1].style.msTransform = "scaleX(1) translateY(0)";
         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
     };

     var revealThirdPoint = function() {
         points[2].style.opacity = 1;
         points[2].style.transform = "scaleX(1) translateY(0)";
         points[2].style.msTransform = "scaleX(1) translateY(0)";
         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
     };

     revealFirstPoint();
     revealSecondPoint();
     revealThirdPoint();

 };
>>>>>>> checkpoint-8
=======
var animatePoints = function() {
    var points = document.getElementsByClassName('point');
    var revealPoint = function(index) {
      points[index].style.opacity = 1;
      points[index].style.transform = "scaleX(1) translateY(0)";
      points[index].style.msTransform = "scaleX(1) translateY(0)";
      points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
     for (var i = 0; i < points.length; i++) {
       revealPoint(i);
     }
 };
>>>>>>> checkpoint-8-assignment
