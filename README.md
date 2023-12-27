# Pokedex

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Introduction](Introduction)
- [Features](Features)
- [Live](Live)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Integration](APIIntegration)
- [Improvements](#Improvements)
- [Warning](#Warning)
- - [Contributing](#Contributing)


## Introduction
The Pokedex App made with Next js & PokeAPI is a simple and user-friendly web application that provides real-time pokemon information using the PokeAPI.
With this app, you can quickly check the stats of your favourite pokemon.


## Features
- Real-time pokemon data retrieval.
- Display of stats which shows ( hp, attack, defense, special-attack, special-defense, speed ).
- User-friendly interface.
- Search for information using name.
- Responsive design for a seamless experience on desktop and mobile devices.


## Live - Preview
[Click here to view live preview]
https://pokemon-madness-ng8tuxiy6-subhashs-projects-2c5f9e55.vercel.app/





## Built With
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PokeAPI](https://pokeapi.co/)
- [Vercel](https://vercel.com/)


## Getting Started

  ### Prerequisites
- Check out the Next js documentation.
  This project is created using
  ```
  npx create-next-app@latest --typescript --tailwind --eslint  //  used to create latest Next JS app

  npx shadcn-ui@latest init  // use this for awesome buttons, search and other ui

  npm run build  // After completing the projecting check the optimized production build for error.

  npx vercel  // Deploy it on vercel using vercel cli

  ```
  
  Before you can run the Pokedex App locally or deploy it, you'll need the following:
  - VS code and a browser ( chrome is preferred to run your local server at localhost:3000 ) on your machine.
  - An API key from your preferred pokemon data provider (e.g., PokeAPI, etc ).
  - Follow the API provider's documentation to obtain an API key.



### Installation

1. Clone the repo

```sh
git clone https://github.com/resuouroborous/pokedex.git
```

2. Install NPM packages

```sh
npm install npm@latest -g
```

3. Run the local development server 

```sh
npm run dev
```

   
## API Integration
The Weather App integrates with the OpenWeatherMap API to fetch weather data. To use a different weather data provider, you can modify the API integration code in the project.
In the index.js line: 15, replace the http of fetch and update the API request parameters as needed to work with your chosen weather data provider.

```Next.js
const POKEMON_API = 'https://pokeapi.co/api/v2/';

// getPokemonList -> Get the first 151 pokemon
const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0'); /*you can set the limit according to your requirement */
  const data = await response.json();
  return data.results;

// get the information of pikachu using name
const response = await fetch(POKEMON_API + 'pokemon/' + name);
  const data = await response.json();
  return data;

```


## Improvements
1. Need to improve the logo by adding the scroll animation.
2. Need to add the type attribute button to improve and categorize the search of pokemons.
3. Pokemon cards displaying only the name and soon I will be adding the pokemon icon, id and micro interaction on card component.



## Warning
After using the API key from PokeAPI if the image from raw.github.com is broken or it says connection issue.
Try changing your dns server to something like cloudflare, google rather than the isp provided dns. Cloudflare (1.1.1.1, 1.0.0.1) google dns (8.8.8.8, 8.8.4.4)

You can follow this guide to change your dns server https://developers.google.com/speed/public-dns/docs/using#change_your_dns_servers_settings
( After changing the dns it should work...it's due to your network provider )


## Contributing
We welcome contributions from the community! If you'd like to contribute to the Pokedex App.
please follow the general community guidelines.
- Be nice to other devs and feel free to branch or clone.
