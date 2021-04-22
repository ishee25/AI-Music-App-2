song1 = "";
song2 = "";

function preload(){
    loadSound("lush_life.mp4");
    loadSound("halo.mp4");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}