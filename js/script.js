document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("heart-container");
  const button = document.getElementById("love-button");
  const heartsContainer = document.getElementById("hearts-container");
  const headerText = document.getElementById("header-text");
  const quote = document.getElementById("quote");
  let clicked = false;
  let heartInterval;

  button.addEventListener("click", () => {
    if (!clicked) {
      button.textContent = "";
      headerText.textContent = "Я тебя люблю!";
      heart.style.opacity = "0";
      quote.style.opacity = "0";
      heart.style.transition = "opacity 0.5s";
      quote.style.transition = "opacity 0.5s";
      heartInterval = setInterval(createFallingHeart, 300);
      button.classList.add("glow");
      clicked = true;
    } else {
      button.textContent = "Нажми меня";
      headerText.textContent = "С Днем Святого Валентина!";
      heart.style.opacity = "1";
      quote.style.opacity = "1";
      clearInterval(heartInterval);
      heartsContainer.innerHTML = "";
      button.classList.remove("glow");
      clicked = false;
    }
  });

  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-falling");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
    heartsContainer.appendChild(heart);
  }
});
