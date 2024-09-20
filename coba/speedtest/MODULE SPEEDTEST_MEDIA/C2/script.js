const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let raindropLength = 80;
let dropSpeed = 9;

let raindrops = [];


// Function to create raindrops with x and y coordinates
function randomRainDrop() {
    let x = Math.floor(Math.random() * width);
    let y = -raindropLength;
  raindrops.push({x, y});
}

// Function to animate the raindrops
function animateRaindrops() {
  ctx.clearRect(0, 0, width, height);

  // Draw the "Rain Forest" text
  ctx.font = "bold 50px arial";
  ctx.textAlign = "center";
  ctx.lineWidth = 1;
  ctx.strokeText("Rain Forest", width / 2, height / 2);

  // Update and draw each raindrop
  for (let i = 0; i < raindrops.length; i++) {
    let drop = raindrops[i];
    drop.y += dropSpeed; // Move the raindrop down by 5 pixels each frame

    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + raindropLength); // Length of raindrop
    ctx.lineWidth = 3;
    ctx.stroke();

    // Remove raindrop if it goes off the canvas
    if (drop.y > height) {
      raindrops.splice(i, 1);
      i--; // Adjust index after removing the element
    }
  }

  // Add new raindrops
  if (Math.random() < 0.3) {
    // Controls how frequently raindrops are added
    randomRainDrop();
  }

  // Call the next frame
  requestAnimationFrame(animateRaindrops);
}

animateRaindrops();
