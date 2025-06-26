document.addEventListener("DOMContentLoaded", () => {
    const sky = document.getElementById("sky");
    if (!sky) return;
  
    const layers = [
      { count: 150, speed: 0.0185, sizeRange: [1, 2] },
      { count: 100, speed: 0.0125, sizeRange: [2, 3] },
      { count: 50,  speed: 0.006, sizeRange: [3, 4] }
    ];
  
    function createStar(layer) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0];
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      sky.appendChild(star);
  
      let y = parseFloat(star.style.top);
      function animate() {
        y -= layer.speed;
        if (y < -5) {
          y = 100 + Math.random() * 10; // respawn below screen
          star.style.left = `${Math.random() * 100}vw`; // optional: new horizontal pos
        }
        star.style.top = `${y}vh`;
        requestAnimationFrame(animate);
      }
  
      requestAnimationFrame(animate);
    }
  
    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        createStar(layer);
      }
    });
  });