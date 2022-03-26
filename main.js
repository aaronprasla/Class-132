dcimg = '';

status = '';

function preload() {
    dcimg = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
}

function draw() {
    image(dcimg, 0, 0, 640, 420);

    fill('#FF0000');
    text('Dog', 45, 75);

    noFill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);

    fill('#0000FF');
    noStroke();
    text('Cat', 310, 75);

    noFill();
    stroke('#0000FF');
    rect(300, 60, 305, 330);
}

function modelLoaded() {
    console.log('model loaded');
    status = true;
    objectDetector.detect(dcimg, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    } else {
        console.log(results);
    }
}