`use strict`;

// Define variables
let starNum;

const main1 = document.querySelector(`.main-1`);
const main2 = document.querySelector(`.main-2`);

// const star = document.querySelector(`.btn-number`);
// const stars = document.querySelectorAll(`.btn-number`);

const starContainer = document.querySelector(`.numbers`);
const stars = starContainer.getElementsByTagName(`button`);

const star1 = document.querySelector(`.star-1`);
const star2 = document.querySelector(`.star-2`);
const star3 = document.querySelector(`.star-3`);
const star4 = document.querySelector(`.star-4`);
const star5 = document.querySelector(`.star-5`);

const submit = document.querySelector(`.btn-submit`);

const result = document.querySelector(`.result-number`);

// User clicks rating --- only one rating can have clicked status
starNum = 0;

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener(`click`, function () {
    document.querySelector(`.star-clicked`)
      ? document.querySelector(`.star-clicked`).classList.remove(`star-clicked`)
      : ``;
    this.classList.add(`star-clicked`);
  });
}

// User clicks submit -- if rating is clicked
submit.addEventListener(`click`, function () {
  if (starNum > 0) {
    result.innerText = `${starNum}`;
  }
  main1.classList.add(`hidden`);
  main2.classList.remove(`hidden`);
});
