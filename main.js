var color = new Array();
color[0] = "#5ab4fd";
color[1] = "#008080";
color[2] = "#4169E1";
color[3] = "#483D8B";
color[4] = "#FF00FF";
color[5] = "#90A2FF";
color[6] = "#17FF92";
color[7] = "#B16F6F";
color[8] = "#D9F4EC";
color[9] = "#21FDBB";
color[10] = "#D221FD ";

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