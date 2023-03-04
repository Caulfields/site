// Set up canvas
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set up player
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
const playerSize = 30;

// Set up keyboard input
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

// Set up game loop
function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update player position based on keyboard input
  if (keys["ArrowUp"]) {
    playerY -= 5;
  }
  if (keys["ArrowDown"]) {
    playerY += 5;
  }
  if (keys["ArrowLeft"]) {
    playerX -= 5;
  }
  if (keys["ArrowRight"]) {
    playerX += 5;
  }

  // Draw player
  ctx.fillStyle = "#fff";
  ctx.fillRect(playerX - playerSize / 2, playerY - playerSize / 2, playerSize, playerSize);

  // Call game loop again
  requestAnimationFrame(gameLoop);
}

// Start game loop
requestAnimationFrame(gameLoop);
