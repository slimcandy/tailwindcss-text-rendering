# Tailwind CSS Text Rendering

A Tailwind CSS plugin that helps you create utility classes for using the `text-rendering` CSS property.

## Installation

Install it in a new or existing Tailwind CSS project

```bash
npm install -D @loopreport/tailwindcss-text-rendering
# or
yarn add -D @loopreport/tailwindcss-text-rendering
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@loopreport/tailwindcss-text-rendering"),
    // ...
  ],
};
```

## Basic usage

The plugin generates these utility classes:

```css
.text-rendering-auto: {
  text-rendering: auto;
}

.text-rendering-speed: {
  text-rendering: speed;
}

.text-rendering-legibility: {
  text-rendering: optimizeLegibility;
}

.text-rendering-precision: {
  text-rendering: geometricPrecision;
}
```

You can use it in your markup like this:

```html
<h1 class="text-rendering-speed">Hello world</h1>
```
