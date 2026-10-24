const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const yesDialog = document.querySelector(".yes-dialog");
const closeDialogButton = document.querySelector(".close-dialog");
const footerNote = document.querySelector("#footer-note");

const playfulReplies = [
  "Hmm... quer pensar mais um pouquinho? ♡",
  "Até o botão ficou tímido... tenta de novo? ♡",
  "Meu coração ainda espera um sim! ♥",
];
let noClickCount = 0;

yesButton.addEventListener("click", () => {
  yesDialog.showModal();
});

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
