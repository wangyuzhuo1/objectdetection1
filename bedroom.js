function setup(){
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML="Status: Object Detected";
}

img="";
status1 = "";

function preload(){
    img = loadImage("bedroom.jpg")
}

function modelloaded(){
console.log("Model has been loaded");
status1=true;
objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    console.log(results)
}



function draw(){
    image(img, 0, 0, 50, 50);
    fill("#FF0000");
    text("Flower Picture", 50, 50);
    noFill();
    stroke("#FF0000");
    rect(50, 50, 50, 50);
}