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
    circle(250,120,200);
   
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
    ellipse(245, 150, 50, 20)

    // hair
    line(110,230,175,50);
    line(330,50,360,230);

    // body
    fill(50, 50, 100);
    rect(200,210,100,170);
    
    // decoration
    fill(500);
    triangle(205,380,250,223,295,380)

    // right arm
    fill(10, 24, 120);
    rect(300,220,50,10);

    // left arm
    rect(150,220,50,10);

    // left leg
    rect(200,390,10,50);
    
    // right leg
    rect(290,390,10,50);
    
    fill(0);
    textSize(22);
    text("Sophia Casey",270,500 );


}