/* GET ELEMENTS */

/* FORM */
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

/* CONTAINERS */
const profileContainer = document.getElementById("profile-container");
const pokemonPhysical = document.getElementById("physical");
const pokemonImgContainer = document.getElementById("img-container");

/* IDENTIFIERS */
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");

/* POKEMON PHYSICAL */
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
  pokemonTypes.innerHTML = ``;
  pokemonImgContainer.innerHTML = ``;
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






/* SHOW SPRITE (front_default) IMAGE */

const showImg = (fetchedJson) => {
  fetchedJson.then((data) => {
    /* you should add an img element with the id of "sprite" and the src set to the Pokémon's front_default sprite to the page. */
    const frontDefaultURL = data.sprites.front_default;
    const frontDefaultImg = document.createElement("img");
    
    frontDefaultImg.id = "sprite";
    frontDefaultImg.src = frontDefaultURL;
    
    pokemonImgContainer.appendChild(frontDefaultImg);
  });
};






/* SEARCH POKEMON FUNCTION */

const searchPokemon = () => {
  const pokemon = searchInput.value.toLowerCase();
  const searchURL = `${pokeAPIProxyUrl}/${pokemon}`
  const pokemonJson = fetch(searchURL)
  .then((res) => res.json())
  .catch((error) => {
    window.alert("Pokemon not found");
  });
  
  clearWindow();
  fillTextData(pokemonJson);
  showImg(pokemonJson);
};






/* CLICK SEARCH BUTTON */

searchButton.addEventListener("click", searchPokemon);
