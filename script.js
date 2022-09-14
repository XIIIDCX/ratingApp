const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitBtn = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rating = document.querySelector("#rating");
const ratesBtns = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContainer.style.display = "block"
});

ratesBtns.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
});