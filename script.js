//console.log(window, {document});
//setTimeout(() => {
 //   document.location = 'https://google.com'
//}, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.rect(10, 10, 50, 30);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;
ctx.stroke();

ctx.fillStyle = 'black';
ctx.fillRect(10, 10, 50, 20);

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 50, 10);



ctx.moveTo(100,50);
ctx.lineTo(130, 80);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(100,80);
ctx.lineTo(150,50);
ctx.stroke();
ctx.beginPath();


ctx.moveTo(100, 50);
ctx.lineTo(150,50);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(100,80);
ctx.lineTo(125, 40);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(125,40);
ctx.lineTo(130, 80);
ctx.stroke();
ctx.beginPath();


ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.strokeStyle = 'green';
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.lineTo(200, 100);
ctx.arc(200, 100, 50, -2, -3 / Math.PI);
ctx.fillStyle = 'green'
ctx.fill();
ctx.strokeStyle = 'green';
ctx.lineWidth = 1;
ctx.stroke();
