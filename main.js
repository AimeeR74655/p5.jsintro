function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
}

function preload()
{
    img = loadImage("images.png")
}

function draw()
{
    image(img, 300, 400, 90, 90);
    rect(126, 92, 250, 40);
    circle(90,111,78);
    rect(70, 145, 40, 230);
    circle(412,111,78);
    rect(390, 145, 40, 230);
}