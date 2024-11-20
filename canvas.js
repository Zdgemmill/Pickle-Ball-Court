//selecting canvas element & sizing
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//defining context

var c = canvas.getContext('2d');
//filling in rects, note that the fillrect will take whatever fillstyle is above it 
c.fillStyle = '#ffffff';
c.fillRect (400, 200, 100, 100); 
c.fillStyle = '#fffff';
c.fillRect (700, 200, 100, 100,); 
c.fillStyle = '#5ad45b';
c.fillRect (420, 240, 60, 60,);
c.fillStyle = '#5ad45b';
c.fillRect (720, 240, 60, 60,);
c.fillStyle = '#000000';
c.fillRect (435, 270, 30, 30,);
c.fillStyle = '#000000';
c.fillRect (735, 270, 30, 30,);

//lines 
c.beginPath();
c.moveTo(200, 400);
c.lineTo(600, 700);
c.lineTo(1000,400);
c.lineTo(200,400);

//making line visible 
c.strokeStyle = '#000000';
c.stroke();

//arc or circle
c.beginPath(); //this will start the circle on a new line disconnecting old lines
c.arc(300, 300, 60, 0, Math.PI * 2, false);
c.strokeStyle = "white";
c.stroke();