"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

// YES BUTTON
yesButton.addEventListener("click", handleYesClick);

// NO BUTTON
noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.innerHTML = "i love you!";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function handleNoClick() {
  if (!play) return;

  noCount++;

  const imageIndex = Math.min(noCount, MAX_IMAGES);
  changeImage(imageIndex);

  resizeYesButton();
  resizeNoButton();
  updateNoButtonText();

  if (noCount === MAX_IMAGES) {
    play = false;
  }
}

function resizeYesButton() {
  const style = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(style.fontSize);
  yesButton.style.fontSize = fontSize * 1.4 + "px";
}

function resizeNoButton() {
  const style = window.getComputedStyle(noButton);
  const fontSize = parseFloat(style.fontSize);
  noButton.style.fontSize = fontSize * 1.2 + "px";
}

function generateMessage(count) {
  const messages = [
    "no",
    "are you sure???",
    "maybe think about it again?",
    "wrong button HA",
    "NOOOOO!",
    "STOP IT!!!",
  ];

  return messages[Math.min(count, messages.length - 1)];
}

function updateNoButtonText() {
  noButton.textContent = generateMessage(noCount);
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}