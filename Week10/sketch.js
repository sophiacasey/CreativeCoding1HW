//head 
var headX = 250;
var headY = 100;
var headDirection = 1;

//mouth
var mouthX = 245;
var mouthY = 150;
var mouthDirection = 3;

//body
var bodyX = 200;
var bodyY = 185;
var bodyDirection = 2;

//left leg
var legX = 205;
var legY = 380;
var legDirection= 5;

var direction= 10;

//right leg
var x = 100;
var y = 50;
var direction = 5;

//text
var size = 25;
var count = 0;
var sizeDirection = 2;

//self portrait//
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(209,45,78);
    textSize(22)
    text("Hello!", 8,70);

    // head
    fill(255, 190, 150);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    // eyes

    strokeWeight(20);
    fill(0);
    point(200,90);
    point(285,90);


    // nose
    strokeWeight(10);
    point(245,115);
    
    // mouth
    strokeWeight(10);
    ellipse(mouthX, mouthY, 50, 20)
    mouthX+=mouthDirection;
    if(mouthX >=418 || mouthX <= 82)
    {
        mouthDirection *= -1;
    }

    // hair
    line(110,230,175,50);
    line(330,50,360,230);

    // body
    fill(50, 50, 100);
    rect(200,bodyY,100,170);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450)
    {
        bodyDirection *= -1;
    }
    
    // decoration
    fill(500);
    triangle(205,380,250,223,295,380)

    // right arm
    fill(10, 24, 120);
    rect(300,220,50,10);

    // left arm
    rect(150,220,50,10);

    // left leg
    rect(200,legY,10,50);
    legY += legDirection;
    if(legY <= 0 || legY >= 450)
    {
        legDirection *= -1;
    }
    
    // right leg
    rect(x,y,10,50);
    x += direction;
    if(x <= 0 || x >= 450)
    {
        direction *= -1;
    }
    x++;
    y += direction;
    if(y <= 0 || y >= 450)
    {
        direction *= -1;
    }
    y++;

    //My name
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Sophia Casey",270,500 );
}
