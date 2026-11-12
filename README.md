# Pokedex
# Pokedex

A simple, responsive Pokedex web app. Type a Pokemon's name, press **Fetch**, and see its stats and sprite. Data comes from the free [PokeAPI](https://pokeapi.co/).

## Features

- Search any Pokemon by name (case-insensitive)
- Shows name, ID, height, weight and base experience
- Shows the Pokemon's front sprite
- Responsive layout for desktop, tablet and phone
- Retro pixel-style look (black, red and white theme)

## Project structure

```
.
├── index.html   # Page structure
├── style.css    # Styling and responsive rules
├── index.js     # Fetches data from PokeAPI and updates the page
└── PixelifySans-VariableFont_wght.ttf   # Custom font (add this file yourself)
```

## Getting started

1. Download or clone the project.
2. Put `index.html`, `style.css` and `index.js` in the same folder.
3. (Optional) Download the [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) font and place `PixelifySans-VariableFont_wght.ttf` in the same folder. Without it, the page falls back to a default sans-serif font.
4. Open `index.html` in your browser. No build step or installation needed.

An internet connection is required, since the data is fetched from PokeAPI.

## How to use

1. Type a Pokemon name in the input box, for example `pikachu`.
2. Click **Fetch**.
3. The stats and sprite appear below.

## How it works

When you click **Fetch**, `index.js` reads the name from the input, lowercases it, and requests:

```
https://pokeapi.co/api/v2/pokemon/<name>
```

It then displays selected fields from the JSON response and sets the image source to `sprites.front_default`.

## Responsive design

`style.css` includes media queries at the end of the file:

- **Up to 900px:** smaller gap between the details and the image
- **Up to 600px:** smaller padding and title, full-width input and button, and the details stacked above the image

## Tech used

- HTML, CSS, JavaScript (no frameworks or libraries)
- [PokeAPI](https://pokeapi.co/)

## Credits

- Created by [adi008-max](https://github.com/adi008-max)
- Pokemon data from [PokeAPI](https://pokeapi.co/)
- Font: Pixelify Sans (Google Fonts)

Pokemon and Pokemon character names are trademarks of Nintendo, Game Freak and The Pokemon Company. This is a fan project and is not affiliated with them.
