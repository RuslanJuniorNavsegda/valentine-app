function startRain() {
  const container = document.getElementById("hearts-container");

  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart-falling");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  document.querySelector("header").classList.add("rain-active");
}

function createFloatingHearts() {
  const heartElement = document.querySelector(".heart");

  setInterval(() => {
    let floatHeart = document.createElement("div");
    floatHeart.classList.add("float-heart");
    floatHeart.innerHTML = "💜";
    floatHeart.style.left = Math.random() * 100 + "px";
    floatHeart.style.top = Math.random() * 100 + "px";
    heartElement.appendChild(floatHeart);

    setTimeout(() => {
      floatHeart.remove();
    }, 3000);
  }, 1000);
}

document.getElementById("love-button").addEventListener("click", startRain);

document.getElementById("header-text").classList.add("fade-in");
document.getElementById("romantic-quote").classList.add("fade-in");

createFloatingHearts();

document.getElementById("test-button").addEventListener("click", function () {
  let score1 = parseInt(document.getElementById("question1").value);
  let score2 = parseInt(document.getElementById("question2").value);
  let score3 = parseInt(document.getElementById("question3").value);

  let totalScore = score1 + score2 + score3;
  let resultText = "";

  if (totalScore >= 13) {
    resultText =
      "💖 Ваша любовь крепка и непоколебима! Вы идеально совместимы!";
  } else if (totalScore >= 8) {
    resultText = "💕 У вас хорошие отношения, но всегда есть место для роста!";
  } else {
    resultText =
      "💔 Вам стоит больше работать над вашими отношениями и находить общие интересы.";
  }

  document.getElementById("test-result").textContent = resultText;
});
