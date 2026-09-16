# Darkmoon-Barbershop

A fictional barbershop landing page, built with a responsive design and using Tailwind CSS v4.

## Structure

```
├── index.html          # Main landing page
├── giftcard.html       # Gift card page
├── src/input.css       # Source CSS with the custom theme
├── css/output.css      # Compiled CSS
├── js/main.js          # Shared JavaScript
├── fonts/              # Locally hosted fonts (.woff2)
└── tailwindcss.exe     # Standalone binary (local, not committed)
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Compiles the CSS (Tailwind, minified)|
| `npm run format`  | Formats HTML, CSS and JS with Prettier|

## How to compile the CSS

```powershell
npm run build
```

For development with automatic recompilation:

```powershell
.\tailwindcss.exe -i .\src\input.css -o .\css\output.css --watch
```

> **Important:** the compiled `css/output.css` is committed to the repository.
> GitHub Pages serves static files and does **not** run the binary, so you
> must always recompile before `git push`.

## Palette and typography

Defined in `src/input.css`:

| Token          | Value     |
| -------------- | --------- |
| `text-copper`  | `#b87333` |
| `text-gold`    | `#d4af37` |
| `font-display` | Cinzel    |
| `font-body`    | Inter     |
| `font-bebas`   | Bebas Neue |