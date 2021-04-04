let username;
const result = document.querySelector(".tatRes");
const tatnick = document.querySelector(".tatnick");
const textListen = document.querySelector("#textListen");
const tatRes = document.querySelector(".tatRes");
const tatNickText = document.querySelector(
  "body > div.user > div.tatnick > spasn"
);
const colorPick = document.querySelector("#pick");
const BgcolorPick = document.querySelector("#pickBbC");
const shadowColorHide = document.querySelector("#pickShadpwColor");
const shadowColorPick = document.querySelector("#pickShadowC");
const addShadow = document.querySelector("#shadowCheck");
const addBg = document.querySelector("#bgCheck");
const roundedCheck = document.querySelector("#roundedCheck");
const pickBgColor = document.querySelector("#pickBgColor");
const checkRoundedCorners = document.querySelector("#checkRoundedCorners");
const sizeSlider = document.querySelector("#textSizeSlider");
const guyStyleCheck = document.querySelector("#guyStyleCheck");
const abirStyleCheck = document.querySelector("#abirStyleCheck");
const reset = document.querySelector("#reset");
const disconnect = document.querySelector("#disconnect");
const font = document.querySelector("#fonts");
const grediant = document.querySelector("#gradientCheck");
const grediantColorHidden = document.querySelector(".grediantColorHidden");
const gc1 = document.querySelector("#gc1");
const gc2 = document.querySelector("#gc2");

// set the text area (result) for the first time.
result.innerHTML = tatnick.innerHTML;

// checks if input has a username and handle with the info

if (getCookie("username") == "") {
  username = prompt("what is your username?");
  if (username) {
    createCookie("username", username, 30);
    loadUser();
  }
} else {
  loadUser();
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
    // listens to color changing
    shadowColorPick.addEventListener("change", () => {
      tatNickText.style.textShadow = "0px 0px 5px" + shadowColorPick.value;
      update();
    });
    shadowColorHide.hidden = false;
    tatNickText.style.textShadow = "0px 0px 5px" + shadowColorPick.value;
    update();
  } else {
    shadowColorHide.hidden = true;
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
    tatNickText.classList = "guystyle";
    update();
  } else {
    tatNickText.classList = "";
    update();
  }
  if (abirStyleCheck.checked || grediant.checked) {
    abirStyleCheck.checked = false;
    grediant.checked = false;
    document.querySelector(
      "body > div.addBg > span:nth-child(2)"
    ).hidden = false;
    grediantColorHidden.hidden = true;
    document.querySelector(
      "body > div.colorChoose > span:nth-child(1)"
    ).hidden = false;
  }
});

// listen to abir style checkbox
abirStyleCheck.addEventListener("change", () => {
  if (abirStyleCheck.checked) {
    tatNickText.classList = "abir";
    update();
  } else {
    tatNickText.classList = "";
    update();
  }
  if (guyStyleCheck.checked || grediant.checked) {
    guyStyleCheck.checked = false;
    grediant.checked = false;
    document.querySelector(
      "body > div.addBg > span:nth-child(2)"
    ).hidden = false;
    grediantColorHidden.hidden = true;
    document.querySelector(
      "body > div.colorChoose > span:nth-child(1)"
    ).hidden = false;
  }
});

// gradient listener
grediant.addEventListener("change", () => {
  if (grediant.checked) {
    tatNickText.style.backgroundImage = `linear-gradient(180deg, ${gc1.value}, ${gc2.value})`;
    tatNickText.style.webkitBackgroundClip = "text";
    tatNickText.style.webkitTextFillColor = "transparent";
    document.querySelector(
      "body > div.addBg > span:nth-child(2)"
    ).hidden = true;
    grediantColorHidden.hidden = false;
    document.querySelector(
      "body > div.colorChoose > span:nth-child(1)"
    ).hidden = true;

    update();
  } else {
    tatNickText.style.backgroundImage = "";
    tatNickText.style.webkitBackgroundClip = "";
    tatNickText.style.webkitTextFillColor = "";
    document.querySelector(
      "body > div.addBg > span:nth-child(2)"
    ).hidden = false;
    document.querySelector(
      "body > div.colorChoose > span:nth-child(1)"
    ).hidden = false;
    grediantColorHidden.hidden = true;
    update();
  }
  if (abirStyleCheck.checked || guyStyleCheck.checked) {
    tatNickText.classList = "";
    abirStyleCheck.checked = false;
    guyStyleCheck.checked = false;
    update();
  }
});

// listens to color pick change (of gradients).
gc1.addEventListener("change", () => {
  tatNickText.style.backgroundImage = `linear-gradient(180deg, ${gc1.value}, ${gc2.value})`;
  update();
});

gc2.addEventListener("change", () => {
  tatNickText.style.backgroundImage = `linear-gradient(180deg, ${gc1.value}, ${gc2.value})`;
  update();
});

// reset to default settings
reset.addEventListener("click", () => {
  reSet();
});

// disconnect/connect button
if (!getCookie("username")) {
  disconnect.innerText = "להתחבר למשתמש";
  disconnect.onclick = function () {
    username = prompt("what is your username?");
    if (username) {
      createCookie("username", username);
      window.location.reload();
    }
  };
} else {
  disconnect.innerText = "להתנתק מהמשתמש";
  disconnect.onclick = function () {
    eraseCookie("username", "", -1);
    window.location.reload();
  };
}

//change font listener
font.addEventListener("change", () => {
  tatNickText.style.fontFamily = font.value;
  update();
});
