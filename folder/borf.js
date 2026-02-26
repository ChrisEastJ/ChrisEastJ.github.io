// var obj = document.getElementById("mapObj");

// obj.addEventListener("load", function () {
//   var svgDoc = obj.contentDocument;
//   var shapes = svgDoc.querySelectorAll("*");

//   for (var i = 0; i < shapes.length; i++) {
//     shapes[i].addEventListener("mouseenter", function () {
//       this.style.stroke = "black";
//       this.style.strokeWidth = "3";
//     });

//     shapes[i].addEventListener("mouseleave", function () {
//       this.style.stroke = "";
//       this.style.strokeWidth = "";
//     });
//   }
// });



//document.addEventListener("DOMContentLoaded", function () {
fetch("https://chriseastj.github.io/folder/wisc_counties.svg")
  .then(r => r.text())
  .then(t => {
    const container = document.getElementById("mapObj");
    container.innerHTML = t;

    const shapes = container.querySelectorAll(
      "svg path, svg polygon, svg rect, svg circle, svg ellipse"
    );




shapes.forEach(function (shape) {
  shape.addEventListener("mouseenter", function () {

    shapes.forEach(s => {
      s.style.fill = "white";
       s.style.stroke = "black";

       s.style.strokeWidth = "1";
       s.style.filter = "none";
    });
    this.parentNode.appendChild(this);
    this.style.filter = "drop-shadow(0 0 3px black)";
    //this.style.stroke = "black";
    //this.style.strokeWidth = "3";
  });

  // shape.addEventListener("mouseleave", function () {
  //   this.style.fill = "";
  // });

});



    // shapes.forEach(shape => {
    //   shape.style.pointerEvents = "all";

    //   shape.addEventListener("mouseenter", function () {
    //     //        this.parentNode.appendChild(this); // move to top
    //     this.style.filter = "drop-shadow(0 0 3px black)";

    //     this.style.vectorEffect = "non-scaling-stroke";
    //     this.style.paintOrder = "stroke";
    //     this.style.stroke = "black";
    //     this.style.strokeWidth = "3";
    //   });

    //   shape.addEventListener("mouseleave", function () {
    //     this.style.filter = "";

    //     //this.parentNode.appendChild(this); // move to top
    //     this.style.stroke = "";
    //     this.style.strokeWidth = "";
    //   });
    // });
  });
  //});








