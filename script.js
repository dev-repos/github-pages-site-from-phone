"use strict";

const waterButton = document.querySelector("#water-button");
const waterLabel = document.querySelector("#water-button-label");
const reminderTitle = document.querySelector("#reminder-title");
const reminderDetail = document.querySelector("#reminder-detail");
const resetButton = document.querySelector("#reset-demo");

waterButton.disabled = false;
waterButton.addEventListener("click", () => {
  reminderTitle.textContent = "A little care, happily received.";
  reminderDetail.textContent = "Watered today. Next check-in in 5 days.";
  waterLabel.textContent = "All watered. Nice work!";
  waterButton.disabled = true;
  resetButton.hidden = false;
  resetButton.focus({ preventScroll: true });
});

resetButton.addEventListener("click", () => {
  reminderTitle.textContent = "Time for a little drink";
  reminderDetail.textContent = "Check the soil before you water.";
  waterLabel.textContent = "Mark as watered";
  waterButton.disabled = false;
  resetButton.hidden = true;
  waterButton.focus({ preventScroll: true });
});

document.querySelector("#year").textContent = new Date().getFullYear();
