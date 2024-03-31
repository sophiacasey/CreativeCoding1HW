var redColor = 123;
var greenColor = 39;
var blueColor = 21;
 // this function is called only once
function setup()
{
    createCanvas(800,600);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
 // change the background color by updating the variables at the top  
  background(redColor,greenColor,blueColor);
 
}