const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

context.lineJoin = "round";
context.lineWidth = 30;

context.font = "24px Helvetica";
context.fillText("click anywhere to erase",175,40);

context.strokeRect(75,100,200,200);
context.fillRect(325,100,200,200);

context.canvas.onmousedown = function(){
	context.clearRect(0,0,canvas.width,canvas,height);
}