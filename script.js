window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// シャボン玉みたいなのを作る
const bubbleContainer = document.getElementById("bubbles");

function createBubble(){
  const b = document.createElement("div");
  b.classList.add("bubble");

  const size = Math.random()*40 + 20;
  b.style.width = size + "px";
  b.style.height = size + "px";

  b.style.left = Math.random()*100 + "%";
  b.style.animationDuration = (Math.random()*10 + 8) + "s";

  bubbleContainer.appendChild(b);

  setTimeout(() => b.remove(), 12000);
}

setInterval(createBubble, 600);
