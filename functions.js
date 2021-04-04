// functiones
function update() {
  result.innerHTML = tatnick.innerHTML;
}

function resetTatnick() {
  tatNickText.innerText = "משתמש כבוד";
  update();
}

function loadUser() {
  fetch(
    `https://fxptest.000webhostapp.com/who/user.php?user=${getCookie(
      "username"
    )}`
  )
    .then((res) => res.json())
    .then(function (res) {
      const username = res[0].usernamenormal;
      const img = "https://i.imagesup.co" + res[0].profilepic;
      document.querySelector(
        ".image"
      ).innerHTML = `<img class="image" src=${img} alt="default" />`;
      document.querySelector(".username").innerText = username;
    });
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

function reSet() {
  document.querySelectorAll("input").forEach((ch) => {
    if (ch.checked) {
      ch.click();
    }
  });
  textListen.value = "";
  resetTatnick();
  sizeSlider.value = 13;
  tatNickText.style.fontSize = "";
  tatNickText.style.color = "";
  colorPick.value = "#0099ff";
  shadowColorPick.value = "#8c8c8c";
  tatNickText.style.fontFamily = "";
  gc1.value = "#ff5500";
  gc2.value = "#ffe600";
  update();
}
