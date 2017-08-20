<<<<<<< HEAD
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
=======
var pointsArray = document.getElementsByClassName('point');
>>>>>>> checkpoint-9-new

var animatePoints = function(points) {
  var revealPoint = function(index) {
      points[index].style.opacity = 1;
      points[index].style.transform = "scaleX(1) translateY(0)";
      points[index].style.msTransform = "scaleX(1) translateY(0)";
      points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
     for (var i = 0; i < points.length; i++) {
       revealPoint(i);
     }
 };

 window.onload = function() {

   if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

   var sellingPoints = document.getElementsByClassName('selling-points')[0];
   var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

<<<<<<< HEAD
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
=======
   window.addEventListener("scroll", function(event) {
     if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }
   });
  }
<<<<<<< HEAD
>>>>>>> checkpoint-9-new
=======

 
>>>>>>> checkpoint-9-new
