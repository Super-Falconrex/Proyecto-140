img = "";
noseX = 0;
noseY = 0;
pelotaX = 325;
pelotaY = 325;

function preload(){
    
}

function setup(){
    canvas = createCanvas(1240, 336);
    canvas.parent("canvas");

    instializeInSetup(mario);

    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent("game_console");

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function modelLoaded(){
    console.log("modelo cargado!!!!!!!!!! :D");
}

function draw(){
    background("green");

    if(noseX < 300){
        pelotaX += 1;
    }

    if(noseY < 150){
        pelotaY -= 1;
    }
}