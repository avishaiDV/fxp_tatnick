let username = prompt("What is your nick?");
let result = document.querySelector(".tatRes");
let tatnick = document.querySelector(".tatnick");
let textListen = document.querySelector("#textListen");
let tatRes = document.querySelector(".tatRes");
let tatNickText = document.querySelector(
  "body > div.user > div.tatnick > spasn"
);
const colorPick = document.querySelector("#pick");
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

checkbox.forEach((ch) => {
  ch.addEventListener("change", function (e) {
    if (ch.checked) {
      tatNickText.style.color = "black";
      update();
    } else {
      tatNickText.style.color = "";
      update();
    }
  });
});

// functiones
function update() {
  result.innerHTML = tatnick.innerHTML;
}

function resetTatnick() {
  tatNickText.innerText = "משתמש כבוד";
  update();
}

function loadUser() {
  fetch(`https://fxptest.000webhostapp.com/who/user.php?user=${username}`)
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      const username = res[0].usernamenormal;
      console.log(username);
      const img = "https://i.imagesup.co" + res[0].profilepic;
      document.querySelector(
        ".image"
      ).innerHTML = `<img class="image" src=${img} alt="default" />`;
      document.querySelector(".username").innerText = username;
    });
}
