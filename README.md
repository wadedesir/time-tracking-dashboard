# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Website Thumbnail](https://raw.githubusercontent.com/wadedesir/time-tracking-dashboard/main/screenshot.png)

### Links

- Live Site URL: [https://desir.dev/projects/time-tracking-dashboard/index.html](https://desir.dev/projects/time-tracking-dashboard/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties: Helped to organize the colors and styles provided for this project
- Lots of Flexbox
- Mobile-first layout
- [Angular](https://angular.io/) - Web Framework. First time usign this. Tons of fun

### What I learned

Angular is FUN! Totally not what I was expecting as I am coming from react based frameworks, but it wasn't much trouble to get accustomed to. Some things are easier when compared to React, but alot of things seem to a little harder to figure out too. But I'm just getting started so can't be judging it too much. I might just not know my way around.

Working with actual HTML code again instead of the usual JSX was weird, although they put a spin on just how much you are able to do with these html tags. Being able to create a loop for html tags is pretty cool. Because It can be a drag rewriting html code sometimes. I'm sure there's so much more than just the \*ngFor that I learned about.

Typescript can also be very finnicky. It does make some things easier to work with but you have to know what you're doing. Intellisense works alot better since it knows which types you're working with and can it can provide better suggestions, but the type checking can get in the way. I did have to resort to using the ! to let it know at some moments that a variable would definitely have a value. I'm sure there's a more standard way to do it but that was the solution that worked for me.

All in all I'm super happy I was able to complete this project in a fairly decent amount of time. I think my slight experience with typescript helped a little bit and also the fact that things are fairly simple once you understand a few key parts of angular.

---

### Here are some snippets of code I feel particularly proud of:

This was a nice little templating hack that becomes possible with angular. in the past I would have used a framework like EJS or standard JSX to accomplish the same thing but this is how Angular implements it

```html
<img src="assets/images/icon-{{title}}.svg" class="icon" />
<!-- grabs svg file based on title of card-->
```

This piece of CSS right here came in handy as well.What I wanted to accomplish was to have a hover state for an ellipsis icon that would get brighter. With a normal svg I would have been to edit the colors directly with CSS but since it was within an img tag, I had to revert to other devices.

```css
.icon-ellipsis:hover {
  filter: brightness(0) invert(1);
}
```

I'm proud of this OnInit() function. Super simple honestly and can be compared to a useEffect in react but it came in handy with setting specific values after the component had received the data.

```js
ngOnInit(): void {
  this.processData(this.timeData?.timeframes!, this.timeScale)
}
```

### Continued development

Observables gave me trouble. I still don't quite have a perfect grasp of how they work but I was able to find a solution for my problem. My issue was that I was not able to refresh certain components from within another. It would have been a fairly straight-forward fix in react but I think it gave me the most trouble out of all that I did. Will definitely take a further look into this.

## Author

- Wade Desir
- Portfolio - [Wade's Porfolio](https://www.desir.dev)
