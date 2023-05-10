const messages = [
  "Hello, there!",
  "Don't do that again.",
  "😡🤬#@$&$&#.",
  "Okay you win..for now.",
  "I'am out of it😡.",
];
const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const toggleSoundOn = new Audio("assets/SwitchClicksOnOffH PE449302.mp3");
const toggleSoundOff = new Audio("assets/LampSwitchFlipOno TE2035601.mp3");
const messageBox = document.getElementById("message-box");
// Set the initial mode to dark mode
body.classList.add("dark-mode");
toggleBtn.checked = true;

// Get the current time and display it in the webpage
function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = currentTime;
}

// Call the updateTime() function every second
setInterval(updateTime, 1000);

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.disabled = true;
    toggleSoundOn.play();
    setTimeout(() => {
      body.classList.toggle("dark-mode");
      toggleBtn.checked = false;
      toggleBtn.disabled = false;
      toggleSoundOff.play();
    }, 2000);
  } else {
    toggleBtn.disabled = true;
    toggleSoundOn.play();
    setTimeout(() => {
      body.classList.toggle("dark-mode");
      toggleBtn.checked = true;
      toggleBtn.disabled = false;
      toggleSoundOff.play();
    }, 2000);
  }
});
let messageIndex = 0;
toggleBtn.addEventListener("click", () => {
  messageBox.innerText = messages[messageIndex];
  messageIndex++;
  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }
  if (messageIndex === 1) {
    const audio = new Audio("assets/Sound1.wav");
    audio.play();
  }
  if (messageIndex === 2) {
    const audio = new Audio("assets/Sound2.wav");
    audio.play();
  }
  if (messageIndex === 3) {
    const audio = new Audio("assets/Sound3.wav");
    audio.play();
  }
  if (messageIndex === 4) {
    const audio = new Audio("assets/Sound4.wav");
    audio.play();
  }
  if (messageIndex === 0) {
    const audio = new Audio("assets/Sound5.wav");
    audio.play();
  }
});
