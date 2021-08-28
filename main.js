function setup(){
video= createCapture(VIDEO);
video.size(500,500);
canvas= createCanvas(500,500);
canvas.center();
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("#DA70D6");
}

function gotPoses(results){
if(results=0){
}
}

function modelloaded(){
console.log("You didn't get lost!!!");
}