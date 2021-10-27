song1 = "";
song2 = "";

function preload(){
     song1 = loadSound("OMW.mp3");
     song2 = loadSound("Attention.mp3");
}

function setup(){
     canvas = createCanvas(600, 500);
     canvas.position(450,300);

     video = createCapture(VIDEO);
     video.hide();
}

function draw(){
     image(video, 0, 0, 600, 500);
}
