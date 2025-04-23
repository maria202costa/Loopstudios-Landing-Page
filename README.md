# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [Author](#author)

## Overview

This project is a landing page made mainly with HTML and CSS (and a bit of JavaScript for the mobile versions).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Project Screenshot](image.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/responsive-landing-page-made-with-html-and-css--TtrxEmnPh)
- Live Site URL: [Live site URL](https://loopstudios-landing-page-eight-mu.vercel.app/)

## My process

PS: english is not my first language, sorry if it have any errors.

This project was made with semantic HTML for the estructure and Sass css for the style, a bit of JavaScript for the open-close menu in mobile devices. The project was divided in four markup tags:

- Sass css: in the beginning of the doc are marked the variables that are used in the hole project, and the nesting ability was too used.

- Header: for the beginning of the page, where is the nav tag. Made using the background image for the background, making the image responsive with the background-position and size. Marking a margin that is used in every next division, the header was sub divised in the navigation bar and the title block, the navigation bar was made using the flexbox properties like justify content and gaps. The title was made using padding and changing the font-sizes and using the style that was gived.

- 1nd Section: this section was made with flexbox propertie, and the position absolute for the text block, using the transform translate to move the block to the right position.

- 2nd Section: this section was made with both flexbox and css grid, flexbox for the entire block, the title and button using the justify content and align items, and the css grid for the cards, repeating the components four times in the space specified, using gaps for the horizontal and vertical distances between the cards, the button and the cards have the active states made with hover propertie.

- Footer: was the most simples of the entire project, made with flexbox, making the elements stays in collumn state with flex-direction: collumn and using gap for the distance between every element, and between the images of the social medias and nav links, the navigation links used too the collumn direction, but the social medias row used the row direction.

- Responsiviness: the project is reponsive in every size device that the devtools gives, made with media queries, the mobile versions(425, 375 and 320px), have a entire separeted document for better organization and styling, but was made using the same properties that the bigger sizes. The style of that versions is made in the 425px media queries.

- JavaScript: the only JavaScript in this project is made for the menu button in mobile versions, to open and close the menu bar with event listener for the click event, the menu bar was made mainly with the absolute position to cover the entire page when active.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SASS
- BEM metodology
- JavaScript events

## Author

- Frontend Mentor - [@maria202costa](https://www.frontendmentor.io/profile/maria202costa)
