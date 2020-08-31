var canvas = document.getElementById("clock");
var can = document.getElementById("UTC");

var canctx = can.getContext("2d");
var ctx = canvas.getContext("2d");

var radius = canvas.height / 2;
ctx.translate(radius, radius);
canctx.translate(radius, radius);

radius = radius * 0.90

setInterval(drawClock, 1000);

function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    canctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    canctx.fillStyle = "white";
    canctx.fill();
    
    drawFace(canctx, radius);
    drawNumbers(canctx, radius);
    drawTime(canctx, radius, 1);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius, 0);
  }

  function drawFace(ctx, radius){
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#269be2');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#1a88de');

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.04, 0, 2 * Math.PI);
    ctx.fillStyle = '#002aaf';
    ctx.fill();
  }

 function drawNumbers(ctx, radius){
    var ang;
    var num;
    var str;
    ctx.font = "25px Comic Sans MS";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for(num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        switch(num)
        {
            case 1 : str = "1" ;
            break;
            case 2 : str = "10";
            break;
            case 3 : str = "11";
            break;
            case 4 : str = "100";
            break;
            case 5 : str = "101";
            break;
            case 6 : str = "110";
            break;
            case 7 : str = "111";
            break;
            case 8 : str = "1000";
            break;
            case 9 : str = "1001";
            break;
            case 10 : str = "1010";
            break;
            case 11 : str = "1011";
            break;
            case 12 : str = "1100";
            break;
            default : str = num.toString();
        }
        ctx.fillText(str, 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}
 function drawTime(ctx, radius, ind){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    hour = hour % 12;
    if(ind) hour = (hour + 6) % 12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    ctx.strokeStyle='green';
    
    drawHand(ctx, hour, radius*0.5, radius*0.06);
    if(ind) minute = (minute + 30) % 60 ;
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    ctx.strokeStyle='green';
    
    drawHand(ctx, minute, radius*0.8, radius*0.06);

    second = (second*Math.PI/30);
    ctx.strokeStyle='blue';
    drawHand(ctx, second, radius*0.85, radius*0.02);
 }

 function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }