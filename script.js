// Typing effect
const text = "Some people bring calm wherever they go.";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();

// Navigation
function goNext(n) {
  document.getElementById("page" + n).scrollIntoView({ behavior: "smooth" });
}

// Enable music sound
function enableMusic() {
  const music = document.getElementById("bgMusic");
  music.muted = false;
  music.play();
}

// Countdown
const birthday = new Date("January 10, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("timer").innerHTML =
    `${d} Days ${h} Hours ${m} Minutes`;
}, 1000);

// Confetti
function confetti() {
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  let pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 8 + 2
  }));

  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = "#ffb347";
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.d;
      if (p.y > c.height) p.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
