img=""
status=""

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    objectdetection=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function preload()
{
    img=loadImage('download (1).jpg');
}

function draw()
{
    image(img, 0, 0, 550, 350);
    fill("#FF0000");
    text("bed", 100, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 400, 350);
    fill("#0014E5");
    text("drawer",450, 100);
    noFill();
    stroke("#0014E5");
    rect(420, 80, 100, 150);
}

function modelLoaded()
{
    console.log("model is loaded");
    status = true;
    objectdetection.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}