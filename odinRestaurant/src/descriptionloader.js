import "./style.css";
import Description from "./desc.txt";
import Mission from "./mission.txt";

export function loadDescription(parent) {
  createDesc(parent);
  createHours(parent);
}

function createDesc(parent) {
  const descMissionBox = document.createElement("div");
  descMissionBox.classList.add("desc-mission-container");
  parent.appendChild(descMissionBox);

  const welcomeTxt = document.createElement("h4");
  welcomeTxt.classList.add("welcome-txt");
  welcomeTxt.textContent = "Welcome to Olympus Café";
  descMissionBox.appendChild(welcomeTxt);

  const descriptionText = document.createElement("p");
  descriptionText.classList.add("p-txt");
  descriptionText.textContent = Description;
  descMissionBox.appendChild(descriptionText);

  const missionText = document.createElement("p");
  missionText.classList.add("p-txt");
  missionText.textContent = Mission;
  descMissionBox.appendChild(missionText);
}

function createHours(parent) {
  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours-container");
  parent.appendChild(hoursContainer);

  const hoursTxt = document.createElement("p");
  hoursTxt.classList.add("p-txt");
  hoursTxt.innerHTML =
    "<br><b>Hours:</b></br><br>Monday to Wednesday: 5:30 pm to 10 pm </br><br>Thursday to Friday: 5 pmto 11 pm</br><br>Saturday: 12 pm to 2pm, 5pm to 11pm</br><br>Sunday: 5pm to 11pm</br>";
  hoursContainer.appendChild(hoursTxt);
}

