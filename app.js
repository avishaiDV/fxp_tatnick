let username = prompt("What is your nick?");
const result = document.querySelector(".tatRes");
const tatnick = document.querySelector(".tatnick");
const textListen = document.querySelector("#textListen");
const tatRes = document.querySelector(".tatRes");
const tatNickText = document.querySelector(
  "body > div.user > div.tatnick > spasn"
);
const colorPick = document.querySelector("#pick");
const BgcolorPick = document.querySelector("#pickBbC");
const addShadow = document.querySelector("#shadowCheck");
const addBg = document.querySelector("#bgCheck");
const roundedCheck = document.querySelector("#roundedCheck");
const pickBgColor = document.querySelector("#pickBgColor");
const checkRoundedCorners = document.querySelector("#checkRoundedCorners");
const sizeSlider = document.querySelector("#textSizeSlider");
const guyStyleCheck = document.querySelector("#guyStyleCheck");

// set the text area (result) for the first time.
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

// listen to add bg
addBg.addEventListener("change", () => {
  if (addBg.checked == true) {
    tatNickText.style.backgroundColor = BgcolorPick.value;
    // listens to color changing
    BgcolorPick.addEventListener("change", () => {
      tatNickText.style.backgroundColor = BgcolorPick.value;
      update();
    });
    pickBgColor.hidden = false;
    checkRoundedCorners.hidden = false;
    update();
  } else {
    tatNickText.style.backgroundColor = "";
    pickBgColor.hidden = true;
    checkRoundedCorners.hidden = true;
    update();
  }
  if (checkRoundedCorners.hidden == true) {
    roundedCheck.checked = false;
    tatNickText.style.borderRadius = "";
    update();
  }
});

// listen to add shadow
addShadow.addEventListener("change", () => {
  if (addShadow.checked == true) {
    tatNickText.style.textShadow = "0px 0px 5px #8c8c8c";
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

// listens to size slider
sizeSlider.addEventListener("change", () => {
  tatNickText.style.fontSize = sizeSlider.value + "px";
  update();
});

// listen to guystyle checkbox
guyStyleCheck.addEventListener("change", () => {
  if (guyStyleCheck.checked) {
    tatNickText.classList += "guystyle";
    update();
  } else {
    tatNickText.classList = "";
    update();
  }
});
