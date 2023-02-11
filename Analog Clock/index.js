let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
 ctx.translate(radius, radius);
 radius = radius * 0.90;
function drawClock() {
 ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = "aqua";
ctx.arc(0, 0, radius, 0, 2*Math.PI);
ctx.fill();
ctx.stroke();
clockFace();
drawNumbers();
drawTime();
}

function clockFace() {
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(0, 0, 10, 0, 2*Math.PI);
ctx.fill();
}

function drawNumbers() {
var ang;
var num;
ctx.font = "24px arial"
ctx.textBaseline = "middle";
ctx.textAlign = "center";
for(num = 1; num < 13; num++){
ang = num * Math.PI / 6;
ctx.rotate(ang);
ctx.translate(0, -radius * 0.85);
ctx.rotate(-ang);
ctx.fillText(num, 0, 0);
ctx.rotate(ang);
ctx.translate(0, radius * 0.85);
ctx.rotate(-ang);
}
}

//hands
function drawTime(){
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

//hour
hour = hour%12;
hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
drawHand(hour, radius*0.4, radius*0.05);

//minute
minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
drawHand(minute, radius*0.7, radius*0.05);

// second
second = (second*Math.PI/30);
drawHand(second, radius*0.9, radius*0.02);
}

function drawHand(pos, length, width) {
ctx.beginPath();
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.strokeStyle = "blcak";
ctx.moveTo(0,0);
ctx.rotate(pos);
ctx.lineTo(0, -length);
ctx.stroke();
ctx.rotate(-pos);
}


setInterval(drawClock, 1000)