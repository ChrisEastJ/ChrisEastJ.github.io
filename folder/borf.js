var obj = document.getElementById("mapObj");

obj.addEventListener("load", function () {
  var svgDoc = obj.contentDocument;
  var shapes = svgDoc.querySelectorAll("path, polygon, rect, circle, ellipse");

  for (var i = 0; i < shapes.length; i++) {
    shapes[i].addEventListener("mouseenter", function () {
      this.style.stroke = "black";
      this.style.strokeWidth = "3";
    });

    shapes[i].addEventListener("mouseleave", function () {
      this.style.stroke = "";
      this.style.strokeWidth = "";
    });
  }
});
