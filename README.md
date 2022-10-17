# Pokedex

This project showcases a first generation Pokedex, created with React. It sends a HTTP request to https://pokeapi.co/api/ in order to store and display the Pokemon. It also uses Tailwind CSS in order to style components and make implementation of certain features easier.

[Pokedex Home Page](Pokedex.JPG)

## Installation

Clone the repository and navigate inside it. Run `npm install` and `craco run`. This will open the Pokedex in localhost.

## Features

Below is a small list of features which I've implemented into the Pokedex to make it more user friendly and technically detailed.

### Infinite Scroll Page

I wanted to make the main content of the site load as quickly as possible. I decided to implement an infinite scroll page, which means that as you scroll down the page, more gets loaded as required. This is used in contrast to a 'next page' button as it is more intuitive and visually appealing. The first 40 Pokemon are loaded first, and as you scroll down, the next 40 Pokemon are shown and so on.

### Filter System

I created a filtering system that allows you to search for Pokemon of a particular type. I decided not to make the filter system any more complex, but filtering by other attributes such as 'name' or 'abilities' would be easy to implement as well. It works well with the infinite scroll page, all other Pokemon are loaded instead of only using the Pokemon that have been retrieved at the current page. 

### Dark Mode

I also wanted to make the site more accessible, so I planted a dark mode within the options sidebar. This allows users to choose what kind of display they want depending on the time of day or personal preference. This was not as difficult to implement due to Tailwind CSS having a dark mode feature.

### Toggleable Sidebar

Since I intended to make this project in pure HTML/CSS and JS, while also brushing up on general knowledge of those languages, the complexity of the project was quite low. The main improvements I focused on here were using better HTML semantics, as well as swifter creation of components and pages. Eventually, I plan to host the portfolio after I have a larger selection of projects and skills to showcase.

