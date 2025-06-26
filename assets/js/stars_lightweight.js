const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
let stars = [];
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

// Each layer now has a size range [min, max]
const layers = [
{ count: 150, speed: 0.43, sizeRange: [1, 2] },
{ count: 100, speed: 0.26, sizeRange: [2, 3] },
{ count: 50,  speed: 0.13,  sizeRange: [3, 4] }
];

// Helper to get a random float between min and max
function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}

layers.forEach(layer => {
  for (let i = 0; i < layer.count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: layer.speed,
      size: randBetween(...layer.sizeRange),
    });
  }
});

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";

  for (let star of stars) {
    ctx.beginPath();
    ctx.fillRect(star.x, star.y, star.size, star.size);
    ctx.fill();

    star.y -= star.speed;
    if (star.y < 0) {
      star.y = height;
      star.x = Math.random() * width;
    }
  }

  requestAnimationFrame(draw);
}

draw();