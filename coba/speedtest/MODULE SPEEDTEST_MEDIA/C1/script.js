const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;
let velocity1 = 3; // Kecepatan persegi merah
let velocity2 = 3; // Kecepatan persegi biru
let velocity3 = 3; // Kecepatan persegi hijau

let positionXY1 = 0; // Posisi awal persegi merah
let positionX2 = width - 30; // Posisi awal persegi biru
let positionY3 = 0; // Posisi awal persegi hijau

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Diagonal
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(positionXY1, positionXY1, 30, 30);
  ctx.fill();

  // Update posisi setiap frame
  positionXY1 += velocity1;

  // Membalikkan arah ketika melewati batas canvas
  if (positionXY1 >= width - 30 || positionXY1 <= 0) {
    velocity1 = -velocity1;
  }

  // Horizontal
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(positionX2, height / 2 - 15, 30, 30);
  ctx.fill();

  // Update posisi setiap frame
  positionX2 -= velocity2;

  // Membalikkan arah ketika melewati batas canvas
  if (positionX2 >= width - 30 || positionX2 <= 0) {
    velocity2 = -velocity2;
  }

  // Vertical
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.rect(width / 2 - 15, positionY3, 30, 30);
  ctx.fill();

  // Update posisi setiap frame
  positionY3 += velocity3;

  // Membalikkan arah ketika melewati batas canvas
  if (positionY3 >= height - 30 || positionY3 <= 0) {
    velocity3 = -velocity3;
  }

  // Request frame berikutnya
  requestAnimationFrame(animate);
}

animate();
