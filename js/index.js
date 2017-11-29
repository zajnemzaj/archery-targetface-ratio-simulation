var canvas = document.getElementById("canvasStats");
var ctx = canvas.getContext("2d");
var canvasTarget = document.getElementById("canvasTargetFace");
var ctxTF = canvasTarget.getContext("2d");
const TARGET_SIZE = 400;
const SMALL_TARGET_SIZE = 200;

// Drawing the target on display
for (let i = 0; i <= 10; i++) {
  ctxTF.beginPath();
  ctxTF.arc(200, 200, i*20, 0, 2 * Math.PI, false);
  ctxTF.lineWidth = 1;
  ctxTF.strokeStyle = '#d8d8d8';
  ctxTF.stroke();
}

// Drawing dot to canvasStats
function drawDot(maxScore,minScore) {
  ctx.fillStyle="#FF0000";
  ctx.fillRect(maxScore,300-minScore,2,2);
}

// Jani
drawDot(288,260);
drawDot(288,263);
drawDot(288,262);
drawDot(295,276);
drawDot(282,253);
drawDot(287,267);
drawDot(289,264);
// Peti
drawDot(275,236);
// Zoli
drawDot(263,231);
drawDot(263,214);
drawDot(271,226);
drawDot(274,233);
drawDot(276,234);

function getRandomNumber(maxSzam) {
  var randomNumberBetween0and300 = Math.floor(Math.random() * maxSzam+1);
  return randomNumberBetween0and300;
}

function drawArrow(x,y) {
  ctxTF.fillRect(x,TARGET_SIZE-y,2,2);
}



function getSingleScore() {
  let x = getRandomNumber(TARGET_SIZE),
      y = getRandomNumber(TARGET_SIZE),
      scoreDiameter = TARGET_SIZE/20,
      scoreValue = 10;
  // Getting distance from center
  // Only when both x and y equal or smaller than TARGET_SIZE/2
  let distanceFromCenter = Math.sqrt(Math.pow((TARGET_SIZE/2-x),2) + Math.pow((TARGET_SIZE/2-y),2));
  if (distanceFromCenter <= TARGET_SIZE/2) {
    drawArrow(x,y);
    while (scoreDiameter <= TARGET_SIZE/2) {
      if (distanceFromCenter <= scoreDiameter) {
        console.log("x=",x,"y=",y,"Distance:",distanceFromCenter.toFixed(2),"SCORE:",scoreValue);
        return scoreValue;
      } else {
        scoreDiameter += TARGET_SIZE/20;
        scoreValue--;
      }
    }
  } else {
    console.log("x=",x,"y=",y,"Distance:",distanceFromCenter.toFixed(2),"Missed shot, reshooting!");
    return 0;
  }
}

function getScores(x,y) {
  scoreDiameter = TARGET_SIZE/20,
  scoreValue = 10;
  let distanceFromCenter = Math.sqrt(Math.pow((TARGET_SIZE/2-x),2) + Math.pow((TARGET_SIZE/2-y),2));
}

function shootAnArrow() {
  let i = 0;
  while ( i < 1 ) {
    if (getSingleScore()) i++;
  }
}

function shoot30Arrows() {
  let i = 0,
      actualScore = 0,
      sumScore = 0;
  while ( i < 30 ) {
    actualScore = getSingleScore();
    if (actualScore) {
      i++;
      sumScore+=actualScore;
    }
  }
  console.log("Score on 40cm targetface after 30 shots", sumScore);
}

function clearCanvas() {
  ctxTF.clearRect(0, 0, canvasTarget.width, canvasTarget.height);
  for (let i = 0; i <= 10; i++) {
    ctxTF.beginPath();
    ctxTF.arc(200, 200, i*20, 0, 2 * Math.PI, false);
    ctxTF.lineWidth = 1;
    ctxTF.strokeStyle = '#d8d8d8';
    ctxTF.stroke();
  }
}
