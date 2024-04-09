// x and y for main character
var characterX = 100;
var characterY = 100;

// key codes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for object (enemy1)
var object1X = 90;
var object1Y = 50;
var object1XSpeed;
var object1YSpeed;

// x and y for object (enemy2)
var object2X = 100;
var object2Y = 20;
var object2XSpeed;
var object2YSpeed;

// mouse-click shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(50,45,78);
    stroke(0);
    fill(0);
    
    // border call
    createBorders(5);

    // exit text
    textSize(20);
    text("EXIT", width-70,height-55)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    // enemy 1
    fill(0,200,100);
    square(object1X, object1Y, 30);

     // enemy 1 speed
     object1XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     object1YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // enemy 1 movement
    object1X += object1XSpeed;
    object1Y += object1YSpeed;

    // enemy 2
    fill(200,10,100);
    square(object2X, object2Y, 20);

    //enemy 2 speed
    object2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     object2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

     //enemy 2 movement
     object2X += object2XSpeed;
     object2Y += object1YSpeed;

    // boundary sensor enemy1
    if(object1X > width)
    {
        object1X = 0;
    }
    else if (object1X < 0)
    {
        object1X = width;
    }
    if(object1Y > height)
    {
        object1Y = 0;
    }
    else if(object1Y < 0)
    {
        object1Y = height;
    }

    //boundary sensor enemy 2
    if(object2X > width)
    {
        object2X = 0;
    }
    else if (object2X < 0)
    {
        object2X = width;
    }
    if (object2Y > height)
    {
        object2Y = 0;
    }
    else if(object2Y < 0)
    {
        object2Y = height;
    }

    // exit sensor
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Made It!", width/2-50, height/2-50);
    }

    // mouse-click shape
    fill(20,80,100);
    square(mouseShapeX, mouseShapeY, 50);
}

// main character
function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,25);
}

// main character movement
function characterMovement()
{
    // keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}


// borders
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

// mouse-clicked function
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}


