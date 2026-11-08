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
  actionMessage.textContent = "Welcome to the forge. Add heat to begin.";
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
    actionMessage.textContent = "You need more heat to make a sword.";
  }
  updateForge();
}

resetForge();
