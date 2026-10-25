# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size.
- Perform mathematical operations like addition, subtraction, multiplication, and division.
- Adjust the color theme smoothly between 3 different visual styles.
- Use physical keyboard input (numbers, operators, Backspace, Enter/Escape) to control the calculator.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL:(https://github.com/Naeemah-Tech/Calculator-App/)
- Live Site URL: ([https://your-live-site-url.com](https://calculator-app-main-weld.vercel.app/))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- CSS Grid & Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation, event listeners, `try...catch` error handling)

### What I learned

Working on this project helped solidify several core web development concepts, particularly around DOM interaction, error handling, and performance optimization:

1. **High-Performance Theming with `data-theme`**: 
   Instead of constantly manipulating class lists in JavaScript, I learned how to use a `data-theme` attribute on the root `<html>` element paired with CSS attribute selectors (`[data-theme="2"]`). This allows CSS custom properties to handle theme switches instantly with zero layout lag.

```html
<!-- The root element controls the global theme -->
<html lang="en" data-theme="1">
```

```css
/* CSS variables switch automatically when the attribute changes */
[data-theme="1"] {
  --bg-main: hsl(222, 26%, 31%);
}
[data-theme="2"] {
  --bg-main: hsl(0, 0%, 90%);
}
```

2. **Graceful Error Handling with `try...catch`**:
   Using JavaScript's `eval()` can break an application if a user types an invalid expression. Wrapping the evaluation inside a `try...catch` block ensures the app doesn't crash and instead safely displays `"Error"`.

```javascript
function calculate() {
    try {
        let expression = display.value.replace(/x/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
```

3. **Global Keyboard Listeners**:
   Adding a `keydown` event listener allowed me to map physical keyboard strokes (`Enter`, `Backspace`, numbers, and operators) directly to the calculator functions for a seamless desktop experience.

### Continued development

In future projects, I want to continue focusing on:
- Enhancing accessibility (ARIA attributes and better screen-reader compatibility).
- Adding persistent local storage so the user's selected theme preference stays saved when they revisit the page.

### Useful resources

- [MDN Web Docs - Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - This helped me understand how to leverage `data-*` attributes for dynamic styling.
- [JavaScript `try...catch` Statement Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) - Essential for managing safe evaluations in custom mini-apps.

### AI Collaboration

During this project, I used an AI assistant to help debug layout issues, refine JavaScript logic for keyboard events and error handling, and explore modern CSS architectural patterns like root attribute theme switching. It helped accelerate my learning process by explaining *why* certain approaches (like avoiding `type="number"` for math expressions containing operator strings) work better.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Naeemah-Tech)
- Twitter - [@yourusername](https://www.twitter.com/Anebira_Dev)
