var color = new Array();
color[0] = "#5ab4fd";
color[1] = "#216efd";
color[2] = "#bf9b62";
color[3] = "#60d1ad";
color[4] = "#6f9cb1";
color[5] = "#8342a1";
color[6] = "#B16F6F";

function changeColor()
{
  var randomColor = Math.floor(Math.random() * color.length);
  console.log(color[randomColor]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};

