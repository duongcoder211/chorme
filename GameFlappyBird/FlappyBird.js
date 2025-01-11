let canvas = document.getElementById('gamezone');
let scoreShow = document.getElementById('score');
let alertElm = document.querySelector("h1");
let context = canvas.getContext('2d');
let isgameover = false;

let dieSound = new Audio();
let pointSound = new Audio();
let wingSound = new Audio();

let birdImg = new Image();
let upbirdImg = new Image();
let downbirdImg = new Image();
let backgroundImg = new Image();
let baseImg = new Image();
let topPipeImg = new Image();
let bottomPipeImg = new Image();
let gameOverImg = new Image();

dieSound.src = "FlappyBirdAssets/Sound Efects/die.wav";
pointSound.src = "FlappyBirdAssets/Sound Efects/point.wav";
wingSound.src = "FlappyBirdAssets/Sound Efects/wing.wav";

gameOverImg.src = "FlappyBirdAssets/UI/gameover.png";
backgroundImg.src = "FlappyBirdAssets/Game Objects/background-day.png";
baseImg.src = "FlappyBirdAssets/Game Objects/base.png";
upbirdImg.src = "FlappyBirdAssets/Game Objects/yellowbird-upflap.png";
birdImg.src = "FlappyBirdAssets/Game Objects/yellowbird-midflap.png";
downbirdImg.src = "FlappyBirdAssets/Game Objects/yellowbird-downflap.png";
topPipeImg.src = "FlappyBirdAssets/Game Objects/toppipe.png";
bottomPipeImg.src = "FlappyBirdAssets/Game Objects/bottompipe.png";


birdImg.style.transition = "0.5s linear";
// Hằng số game
let score = 0;
let distanceBetween2Pipe = 60;
let distanceTopAndBottom = 100;
let speed = 1;
let gravity = 0.9;

let bird = {
    x : (canvas.width)/5,
    y : (canvas.height)/2
}

let base = {
    x : 0,
    y : canvas.height - 80,
}

let topPipe = [];

topPipe[0] = {
    x : canvas.width,
    y : Math.floor(-295 * (Math.random()))
}

let makePipe = function () {
    var newpipe = {
        x : canvas.width,
        y : Math.floor(-295 * (Math.random())) 
    }
    return newpipe;
}

let playDieSound = function() {
    dieSound.load();
    dieSound.play();
}

function run () {
    context.drawImage(backgroundImg,0,0);
    context.drawImage(upbirdImg,bird.x,bird.y);
    context.drawImage(birdImg,bird.x,bird.y);
    context.drawImage(downbirdImg,bird.x,bird.y);
    context.drawImage(topPipeImg, topPipe[0].x, topPipe[0].y);
    context.drawImage(bottomPipeImg, topPipe[0].x, topPipe[0].y + topPipeImg.height + distanceTopAndBottom);
    context.drawImage(baseImg,base.x,base.y);

    bird.y += gravity;
    base.x -= 1;
    topPipe[0].x -= speed;

    if(topPipe[0].x + topPipeImg.width + distanceBetween2Pipe - canvas.width == 0 ) {
        newPipe = makePipe();
        topPipe.push(newPipe);
    }

    if(topPipe[0].x <= 2-topPipeImg.width) topPipe.shift();
    
    if (base.x <= canvas.width/(-2)) { 
        base.x = 0;
    };

    // Xử lí collaption
    if ((bird.y + birdImg.height) >= base.y || 
    (((bird.x + birdImg.width >= topPipe[0].x) 
    && (bird.x <= topPipe[0].x + topPipeImg.width)) 
    && ((0 <= bird.y) && (bird.y <= topPipe[0].y + topPipeImg.height) ||
    bird.y + birdImg.height >= topPipe[0].y + topPipeImg.height + distanceTopAndBottom))||
    bird.y <= 0 || bird.x <= 0 || bird.x + birdImg.width >= canvas.width) 
    {   
        playDieSound();
        isgameover = true;
        context.drawImage(gameOverImg,(canvas.width-gameOverImg.width)/2,(canvas.height-gameOverImg.height)/2);
        alertElm.innerHTML = "Click here to play again !";
        return;
    };

    if((0 <= (bird.x + birdImg.width/2) - (topPipe[0].x + topPipeImg.width/2)) && ( (bird.x + birdImg.width/2) - (topPipe[0].x + topPipeImg.width/2) <= 1)) 
        { 
            score += 1;
            scoreShow.innerHTML = `Score: ${score}`;
            pointSound.load();
            pointSound.play();
        }

    requestAnimationFrame(run);
}
// Handling
    document.addEventListener("keydown", function(e) {
    switch(e.keyCode) {
        case 32: 
            wingSound.load();
            wingSound.play();
            bird.y -= 52;
            break;
        case 39: 
            bird.x += 50;
            break;
        case 37: 
            bird.x -= 50;
            break;
    }
})

// run();
    alertElm.onclick = () =>{
        isgameover = false;
        score = 0;
        scoreShow.innerHTML = `Score: ${score}`;
        alertElm.innerHTML = "";
        topPipe[0].x = canvas.width; 
        bird.x = (canvas.width)/5;
        bird.y = (canvas.width)/2;
        run();
    }

