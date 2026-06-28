// 🌌 STARFIELD
const c = document.getElementById("stars");
const ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.5,
    s: Math.random() * 0.5 + 0.1
  });
}

function draw() {
  ctx.clearRect(0,0,c.width,c.height);

  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();

    s.y += s.s;
    if (s.y > c.height) {
      s.y = 0;
      s.x = Math.random() * c.width;
    }
  }

  requestAnimationFrame(draw);
}

draw();

// 🌠 INTRO
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").style.display = "block";
  }, 4000);
};

// 💬 CHAT
function send() {
  let input = document.getElementById("msg");
  let text = input.value;
  if (!text) return;

  add(text, "user");
  input.value = "";

  setTimeout(() => {
    add("Celestara: " + text, "ai");
  }, 600);
}

function add(t, type) {
  let div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = t;
  document.getElementById("chat").appendChild(div);
}
