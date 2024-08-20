const stars = [];
function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    // Increase the number of stars to 1000
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.right = Math.random() * 100 + "%";
    container.appendChild(star);
    const x = rnd();
    const y = rnd();
    stars.push({ star, x, y});
  }
}


createStars();

function rnd() {
    return (Math.random() * 2 - 1) * Math.random() * 0.02; 
}

function animateStars() {
  stars.forEach(({star, x, y}) => {
    star.style.top = (Number(star.style.top.slice(0, -1)) + y) % 100 + "%";
    star.style.left = (Number(star.style.left.slice(0, -1)) + x) % 100 + "%";
  })
  requestAnimationFrame(animateStars);
}
animateStars();