/* GET ELEMENTS */

/* FORM */
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

/* POKEMON IDENTIFIER */
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");

/* POKEMON PHISICAL */
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");


/* POKEMON STATS TABLE */
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");







/* CONSTANTS */

const pokeAPIProxyUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";






/* CLEAR WINDOW */

const clearWindow = () => {

};






/* FILL TEXT DATA */

/* HAVE TO APPLY STYLE */
const fillTextData = (fetchedJson) => {
  fetchedJson.then((data)=> {
    /* FILL POKEMON IDENTIFIER */
    pokemonName.innerText = data.name.toUpperCase();
    pokemonId.innerText = `#${data.id}`;

    /* FILL POKEMON PHISICAL */
    pokemonWeight.innerText = `Weight: ${data.weight}`;
    pokemonHeight.innerText = `Height: ${data.height}`;
    
    /* MULTI TYPE */
    data.types.forEach(e => pokemonTypes.innerHTML += `<div>${e.type.name.toUpperCase()}</div>`);

    /* FILL STATS TABLE */
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;
  });
};






/* SEARCH POKEMON FUNCTION */

const searchPokemon = () => {
  const pokemon = searchInput.value;
  const searchURL = `${pokeAPIProxyUrl}/${pokemon}`
  const pokemonJson = fetch(searchURL)
  .then((res) => res.json())
  .catch((error) => {
    window.alert("Pokemon not found");
  });
  
  clearWindow();
  fillTextData(pokemonJson);
};






/* CLICK SEARCH BUTTON */

searchButton.addEventListener("click", searchPokemon);
