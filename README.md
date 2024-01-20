# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Instructions
1. npm install (install the latest version of vite from the terminal)

2. npm run dev (npm run dev in terminal and paste the local host url in a browser)


# Info
Title: poke-api-project

A functional ReactJS project displaying pokemon name, type, abilities, and base stats using RESTful API calls from pokeapi (https://pokeapi.co/)

# How to use this app:
Scroll up and down to browse pokemon.

Place cursor on pokemon names to reveal more information such as types, abilities, and base stats.
- The types are displayed with the respective type color
- Abilities are shown in yellow
- Base stats are shown in blue

Each page displays 20 pokemon at a time

The "Previous" button at the footer of the page will take you back to the previous browsing page, but is not displayed if you are in the initial page.

The "Next" button located in the footer of the page will display the next 20 pokemon in the pokedex. 
(note: The pokemon are in ascending order of the official pokedex)
