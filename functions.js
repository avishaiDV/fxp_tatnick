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
      const username = res[0].usernamenormal;
      const img = "https://i.imagesup.co" + res[0].profilepic;
      document.querySelector(
        ".image"
      ).innerHTML = `<img class="image" src=${img} alt="default" />`;
      document.querySelector(".username").innerText = username;
    });
}
