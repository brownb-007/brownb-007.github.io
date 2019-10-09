var color = new Array();
color[0] = "#5ab4fd";
color[1] = "#008080";
color[2] = "#4169E1";
color[3] = "#483D8B";
color[4] = "#FF00FF";

function changeColor()
{
  var randomColor = Math.floor(Math.random() * color.length);
  console.log(color[randomColor]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("secondHeader").onclick = function() {
      this.style.color = 'green'
    }
  })