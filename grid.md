# .grid

A minimal display grid system build for optimal flexibility with a low learning curve.

Look at the [codepen](https://codepen.io/LobergDesign/pen/MWqvRER) to play around.

## Wrapper (.w)

.w defines the wrapper class, which sets the width and max-width of the content container.

```html
<div class="w"></div>
```

## Row (.r)

.r defines the row class, which sets the display to grid and creates a grid with the specified number of columns and gap.

```html
<div class="w">
  <div class="r"></div>
</div>
```

## Column (.c)

.c defines the default column class, which spans all columns.

```html
<div class="w">
  <div class="r">
    <div class="c"></div>
  </div>
</div>
```

## Settings

Basic settings for the grid

```scss
// $gap defines the gap between grid columns.
$gap: clamp(1rem, 2vw, 2rem);

// $columns defines the number of columns in the grid system.
$c: 12;

// viewports
$vp-small: 640px; // c-sm
$vp-medium: 768px; // c-md
$vp-large: 1025px; // c-lg
$vp-extra-large: 1280px; // c-xl

// wrapper settings used on .w class to define basic with of grid wrapper
$w-max-width: 180rem;
$w-width: 90vw;
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
