const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const yesDialog = document.querySelector(".yes-dialog");
const closeDialogButton = document.querySelector(".close-dialog");
const celebrationBurst = document.querySelector(".celebration-burst");
const footerNote = document.querySelector("#footer-note");

const playfulReplies = [
  "Hmm... quer pensar mais um pouquinho? ♡",
  "Até o botão ficou tímido... tenta de novo? ♡",
  "Meu coração ainda espera um sim! ♥",
];
let noClickCount = 0;

yesButton.addEventListener("click", () => {
  yesDialog.showModal();
  createHeartBurst();
});

function createHeartBurst() {
  const buttonBounds = yesButton.getBoundingClientRect();
  const originX = buttonBounds.left + buttonBounds.width / 2;
  const originY = buttonBounds.top + buttonBounds.height / 2;
  const heartColors = ["#e77789", "#ed7186", "#c879bc", "#f0a2b2"];

  for (let index = 0; index < 64; index += 1) {
    const heart = document.createElement("span");
    const targetX = 20 + Math.random() * (window.innerWidth - 40);
    const targetY = 20 + Math.random() * (window.innerHeight - 40);
    const fallDistance = window.innerHeight * (0.55 + Math.random() * 0.5);

    heart.className = "burst-heart";
    heart.textContent = "♥";
    heart.style.left = `${originX}px`;
    heart.style.top = `${originY}px`;
    heart.style.setProperty("--heart-x", `${targetX - originX}px`);
    heart.style.setProperty("--heart-y", `${targetY - originY}px`);
    heart.style.setProperty("--heart-fall", `${fallDistance}px`);
    heart.style.setProperty("--heart-size", `${12 + Math.random() * 20}px`);
    heart.style.setProperty(
      "--heart-color",
      heartColors[index % heartColors.length],
    );
    heart.style.setProperty("--heart-rotation", `${Math.random() * 90 - 45}deg`);
    celebrationBurst.append(heart);

    window.setTimeout(() => heart.remove(), 3600);
  }
}

closeDialogButton.addEventListener("click", () => {
  yesDialog.close();
});

yesDialog.addEventListener("click", (event) => {
  if (event.target === yesDialog) yesDialog.close();
});

noButton.addEventListener("click", () => {
  footerNote.firstChild.textContent = playfulReplies[noClickCount % playfulReplies.length] + " ";
  noClickCount += 1;
});
