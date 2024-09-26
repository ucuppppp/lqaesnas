const canvas = document.getElementById("liveChart");
const ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let dataPoints = [];
function generateRandomData() {
  return Math.floor(Math.random() * (height - 35)); 
}


function drawChart() {
  ctx.clearRect(0, 0, width, height); 
  
  ctx.beginPath();
  ctx.moveTo(width - 30, 10); 
  ctx.lineTo(width - 30, height); 
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(1, 10);
  ctx.lineTo(1, height);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.lineTo(width - 30, 10);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height - 1);
  ctx.lineTo(width - 30, height - 1);
  ctx.strokeStyle = "green";
  ctx.stroke();
  
  
  for (let i = 0; i <= 10; i++) {
    const y = height - (i * (height - 10)) / 10;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width - 30, y);
    ctx.stroke();
    
    ctx.fillStyle = "black";
    ctx.fillText(`${i * 10}%`, width - 25, y);
  }

  ctx.beginPath();
  ctx.moveTo(width - 30 - ((dataPoints.length - 1) * width) / 50, height);

  
  for (let i = 0; i < dataPoints.length; i++) {
    const x = width - 30 - ((dataPoints.length - 1 - i) * width) / 50;
    const y = height - 30 - dataPoints[i];
    ctx.lineTo(x, y);
  }
  
  ctx.lineTo(width - 30, height);
  ctx.closePath();
  
  
  ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
  ctx.fill();
  
  ctx.strokeStyle = "green";
  ctx.stroke();
}

setInterval(() => {
  console.log(dataPoints);
  const newData = generateRandomData();
  
  if (dataPoints.length >= 50) {
    dataPoints.shift();
  }
  
  dataPoints.push(newData);
  
  const percentage = Math.round((newData / (height - 35)) * 100);
  document.querySelector("h1 span").textContent = `${percentage}%`;
  
  drawChart();
}, 1000);
