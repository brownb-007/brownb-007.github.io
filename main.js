var color = new Array();
color[0] = "#5ab4fd";
color[1] = "#216efd";
color[2] = "#51ad58";
color[3] = "#60d1ad";
color[4] = "#c72e2e";
color[5] = "#8342a1";
color[6] = "#B16F6F";

function changeColor()
{
  var randomColor = Math.floor(Math.random() * color.length);
  console.log(color[randomColor]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("secondHeader").onclick = function() {
      this.style.color = 'red'
    }
  })

  $( document ).ready(function() {
    $( "#firstHeader" ).click(function() {
      $( "#firstHeader" ).fadeOut( "slow", function() {
      });
    });
  });


  $( document ).ready(function() {
    $( "#mainHeader" ).click(function() {
      $( "#mainHeader" ).fadeOut( "slow", function() {
      });
    });
  });

