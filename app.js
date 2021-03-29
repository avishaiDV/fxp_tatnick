let username = prompt("What is your nick?");
let result = document.querySelector(".tatRes");
let tatnick = document.querySelector(".tatnick");
let textListen = document.querySelector("#textListen");
let tatRes = document.querySelector(".tatRes");
let tatNickText = document.querySelector(
  "body > div.user > div.tatnick > spasn"
);
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

result.innerHTML = tatnick.innerHTML;

textListen.addEventListener("keypress", () => {
  tatNickText.innerText = textListen.value;
  update();
});

function update() {
  result.innerHTML = tatnick.innerHTML;
}
