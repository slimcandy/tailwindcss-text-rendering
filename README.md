# Tailwind CSS Text Rendering

A Tailwind CSS plugin that helps you create utility classes for using the `text-rendering` CSS property.

## Installation

Install it in a new or existing Tailwind CSS project

```bash
npm install --save-dev tailwindcss-text-rendering
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-text-rendering"),
    // ...
  ],
};
```

## Basic usage

You can use it in your markup like this:

```html
<p class="rendering-auto">auto text</p>
<p class="rendering-speed">optimizeSpeed text</p>
<p class="rendering-legibility">optimizeLegibility text</p>
<p class="rendering-precision">geometricPrecision text</p>
```

The plugin generates these utility classes:

```css
.rendering-auto: {
  text-rendering: auto;
}

.rendering-speed: {
  text-rendering: optimizeSpeed;
}

.rendering-legibility: {
  text-rendering: optimizeLegibility;
}

.rendering-precision: {
  text-rendering: geometricPrecision;
}
```
