`use strict`;

// Define variables
let starNum;

const main1 = document.querySelector(`.main-1`);
const main2 = document.querySelector(`.main-2`);

const star1 = document.querySelector(`.star-1`);
const star2 = document.querySelector(`.star-2`);
const star3 = document.querySelector(`.star-3`);
const star4 = document.querySelector(`.star-4`);
const star5 = document.querySelector(`.star-5`);

const submit = document.querySelector(`.btn-submit`);

const result = document.querySelector(`.result-number`);

// User clicks rating --- only one rating can have clicked status
starNum = 0;

star1.addEventListener(`click`, function () {
  star1.classList.add(`star-clicked`);

  star2.classList.remove(`star-clicked`);
  star3.classList.remove(`star-clicked`);
  star4.classList.remove(`star-clicked`);
  star5.classList.remove(`star-clicked`);

  starNum = 1;
  return starNum;
});

star2.addEventListener(`click`, function () {
  star2.classList.add(`star-clicked`);

  star1.classList.remove(`star-clicked`);
  star3.classList.remove(`star-clicked`);
  star4.classList.remove(`star-clicked`);
  star5.classList.remove(`star-clicked`);

  starNum = 2;
  return starNum;
});

star3.addEventListener(`click`, function () {
  star3.classList.add(`star-clicked`);

  star1.classList.remove(`star-clicked`);
  star2.classList.remove(`star-clicked`);
  star4.classList.remove(`star-clicked`);
  star5.classList.remove(`star-clicked`);

  starNum = 3;
  return starNum;
});

star4.addEventListener(`click`, function () {
  star4.classList.add(`star-clicked`);

  star1.classList.remove(`star-clicked`);
  star2.classList.remove(`star-clicked`);
  star3.classList.remove(`star-clicked`);
  star5.classList.remove(`star-clicked`);

  starNum = 4;
  return starNum;
});

star5.addEventListener(`click`, function () {
  star5.classList.add(`star-clicked`);

  star1.classList.remove(`star-clicked`);
  star2.classList.remove(`star-clicked`);
  star3.classList.remove(`star-clicked`);
  star4.classList.remove(`star-clicked`);

  starNum = 5;
  return starNum;
});

// User clicks submit -- if rating is clicked
submit.addEventListener(`click`, function () {
  if (starNum > 0) {
    result.innerText = `${starNum}`;
  }
  main1.classList.add(`hidden`);
  main2.classList.remove(`hidden`);
});
