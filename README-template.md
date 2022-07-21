# Frontend Mentor - Interactive rating component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](screenshot.jpg)

### Links

- Solution URL: [https://github.com/kongguksu/interactive-rating-component.git]
- Live Site URL: [https://kongguksu.github.io/interactive-rating-component/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

It's my first time trying out a JS challenge from Frontend Mentor. I used the basic JS skills I learned so far, mainly focusing on using classList properties.

```js
submit.addEventListener(`click`, function () {
  if (starNum > 0) {
    result.innerText = `${starNum}`;
  }
  main1.classList.add(`hidden`);
  main2.classList.remove(`hidden`);
});
```

### Continued development

I couldn't follow the DRY principle so I found a resource to get help and fixed it!
- resource - [https://travis.media/how-to-add-and-remove-a-class-from-list-items-with-pure-javascript/#:~:text=Just%20click%20on%20the%20buttons%20and%20see.&text=When%20you%20click%20on%20another,box%20shadow%20to%20the%20button.]

```js
stars.forEach(star =>
  star.addEventListener(`click`, function () {
    document.querySelector(`.star-clicked`)
      ? document.querySelector(`.star-clicked`).classList.remove(`star-clicked`)
      : ``;
    this.classList.add(`star-clicked`);
    starNum = star.innerHTML;
  });
```

## Author

- Frontend Mentor - [@kongguksu](https://www.frontendmentor.io/profile/kongguksu)
- Twitter - [@sooj2050](https://www.twitter.com/sooj2050)
