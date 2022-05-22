/*********************************
 **>> All credits go to https://codepen.io/wefiy/pen/WPpEwo
 **   (you rock, man, love your canvas)
 *********************************/

 // geting canvas by Boujjou Achraf
var matrix_canvas = document.getElementById("matrix_canvas");
var ctx = matrix_canvas.getContext("2d");
var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

//drawing the characters
function draw()
{
   //Black BG for the canvas
   //translucent BG to show trail
   ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
   ctx.fillRect(0, 0, matrix_canvas.width, matrix_canvas.height);

   ctx.fillStyle = "#f4427d";//green text
   ctx.font = font_size + "px arial";
   //looping over drops
   for(var i = 0; i < drops.length; i++)
   {
       //a random chinese character to print
       var text = matrix[Math.floor(Math.random()*matrix.length)];
       //x = i*font_size, y = value of drops[i]*font_size
       ctx.fillText(text, i*font_size, drops[i]*font_size);

       //sending the drop back to the top randomly after it has crossed the screen
       //adding a randomness to the reset to make the drops scattered on the Y axis
       if(drops[i]*font_size > matrix_canvas.height && Math.random() > 0.975)
           drops[i] = 0;

       //incrementing Y coordinate
       drops[i]++;
   }
}



console.log(`Yellow Matrix MATRIX JavaScript is loaded (but JQuery Document is not ready yet)!`);


$(document).ready(function() {
  //making the canvas full screen
  matrix_canvas.height = window.innerHeight;
  matrix_canvas.width = window.innerWidth;

  //chinese characters - taken from the unicode charset
  //converting the string into an array of single characters
  matrix = matrix.split("");

  var font_size = 10;
  var columns = matrix_canvas.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++)
     drops[x] = 1;

  setInterval(draw, 35);
  console.log(`Yellow Matrix MATRIX is LOADED !!!!!!!!  MATRIXXX  !!!!!!`);

});
