let username = prompt("What is your nick?");
let result = document.querySelector(".tatRes");
let tatnick = document.querySelector(".tatnick");
let textListen = document.querySelector("#textListen");
let tatRes = document.querySelector(".tatRes");
let tatNickText = document.querySelector(
  "body > div.user > div.tatnick > spasn"
);
const colorPick = document.querySelector("#pick");
const BgcolorPick = document.querySelector("#pickBbC");
const addShadow = document.querySelector("#shadowCheck");
const addBg = document.querySelector("#bgCheck");
const roundedCheck = document.querySelector("#roundedCheck");

let bgColor;
result.innerHTML = tatnick.innerHTML;

// checks if input has a username and handle with the info

if (username) {
  loadUser();
} else {
  alert("user input is empty, you will use default user now.");
}

// listen to edit text
textListen.addEventListener("keyup", () => {
  tatNickText.innerText = textListen.value;
  update();
  if (textListen.value == 0) {
    resetTatnick();
  }
});

// listen to change color

colorPick.addEventListener("change", function () {
  tatNickText.style.color = colorPick.value;
  update();
});

// listen to cahnge bg color
pickBbC.addEventListener("change", () => {
  bgColor = pickBbC.value;
  update();
  for (let i = 0; i < 2; i++) {
    addBg.click();
  }
});
// listen to add bg
addBg.addEventListener("change", () => {
  if (addBg.checked == true) {
    tatNickText.style.backgroundColor = pickBbC.value;
    update();
  } else {
    tatNickText.style.backgroundColor = "";
    update();
  }
});

// listen to add shadow
addShadow.addEventListener("change", () => {
  if (addShadow.checked == true) {
    tatNickText.style.textShadow = "0px 0px 5px rgb(140, 140, 140)";
    update();
  } else {
    tatNickText.style.textShadow = "";
    update();
  }
});

// listen to rounded check
roundedCheck.addEventListener("change", () => {
  if (roundedCheck.checked == true) {
    tatNickText.style.borderRadius = "20px";
    update();
  } else {
    tatNickText.style.borderRadius = "";
    update();
  }
});
