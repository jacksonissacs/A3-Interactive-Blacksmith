// Plan for making a sword:
// Check whether the forge has at least 30 heat.
// If it does, use 30 heat, add one sword, and show a success message.
// Otherwise, leave both numbers alone and ask for more heat.
// Refresh the forge display after either result.

const forge = document.getElementById("forge");
const heatDisplay = document.getElementById("heat-value");
const swordCount = document.getElementById("sword-count");
const forgeStatus = document.getElementById("forge-status");
const forgeImage = document.getElementById("forge-image");
const actionMessage = document.getElementById("action-message");
const heatForm = document.getElementById("heat-form");
const heatInput = document.getElementById("heat-amount");
const makeSwordButton = document.getElementById("make-sword");
const resetForgeButton = document.getElementById("reset-forge");

let heat = 20;
let swordsMade = 0;

function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

function updateForge() {
  heatDisplay.textContent = heat;
  swordCount.textContent = swordsMade;
  const status = getForgeStatus(heat);
  forgeStatus.textContent = status;

  // Remove the old state before applying the current one.
  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

function resetForge() {
  heat = 20;
  swordsMade = 0;
  heatInput.value = "";
  actionMessage.textContent = "";
  updateForge();
}

function heatForge(amount) {
  heat = heat + amount;
  if (heat > 100) {
    heat = 100;
  }
  actionMessage.textContent = "You heated the forge.";
  updateForge();
}

function makeSword() {
  if (heat >= 30) {
    heat = heat - 30;
    swordsMade = swordsMade + 1;
    actionMessage.textContent = "You made a sword!";
  } else {
    actionMessage.textContent = "You need at least 30 heat to make a sword.";
  }
  updateForge();
}

// Read and convert the heat input when the player submits the form.
// If the amount is invalid, show a message and leave the forge alone.
// Otherwise, pass the amount to the existing heating function.
heatForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const rawAmount = heatInput.value;
  const amount = Number(rawAmount);

  if (rawAmount.trim() === "" || !Number.isFinite(amount) || !Number.isInteger(amount) || amount < 1) {
    actionMessage.textContent = "Enter a whole number of 1 or more to add heat.";
    heatInput.focus();
  } else {
    heatForge(amount);
  }
});

// Try to craft one sword when the player clicks Make sword.
makeSwordButton.addEventListener("click", makeSword);

// Restore the starting state and clear the input and log on reset.
resetForgeButton.addEventListener("click", resetForge);

resetForge();
