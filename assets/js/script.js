console.log("Ca marche bg");

let datasFetch;
const urlPokemon = "https://pokebuildapi.fr/api/v1/pokemon/limit/10";
await getDataFetch();
async function getDataFetch() {
    const res = await fetch(urlPokemon);
    datasFetch = await res.json();
} 

console.log("Voici les données récupérées via Fetch : ", datasFetch);
// let monH2 = document.createElement("h2");
// monH2.innerText = "Mon titre";
// document.querySelector(".pokemon").appendChild(monH2);

let pokemonSelect = document.createElement("select");
pokemonSelect.classList.add("select-pokemon");

let ChoisirTonPoke = document.createElement("option");
ChoisirTonPoke.innerText = "Choisir votre Pokemon";
pokemonSelect.appendChild(ChoisirTonPoke);

document.querySelector(".pokemon-select").appendChild(pokemonSelect);
garnirSelectList();
document.querySelector("select").addEventListener("change", (selectChange) => {
    console.log(selectChange.value);
    console.log("Infos de l'évènement : ", selectChange);
    const pokemonTrouve = datasFetch.find((pokemonChoisi) => pokemonChoisi.name == selectChange.target.value);
    console.log("Pokemon trouvé : ", pokemonTrouve);
    affichePokemon(pokemonTrouve);
});


function garnirSelectList() {
    datasFetch.forEach(pokemon => {
    let nomPokemon = document.createElement("option");
    nomPokemon.innerText = pokemon.name;
    console.log(pokemon.name);
    pokemonSelect.appendChild(nomPokemon);
    });
}

function affichePokemon(objetPokemon)
{
    document.querySelector(".mystere").setAttribute("src", objetPokemon.image);
    console.log("InnerHTML initial : ", document.querySelector(".donnee").innerHTML);
    document.querySelector(".donnee").innerHTML = "";
    console.log("InnerHTML avant d'injecter : ", document.querySelector(".donnee").innerHTML)

    let nomPokemonInfo = document.createElement("li");
    nomPokemonInfo.innerText = "Nom Pokemon : " + objetPokemon.name;
    document.querySelector(".donnee").appendChild(nomPokemonInfo);

    let pokedexPokemon = document.createElement("li");
    pokedexPokemon.innerText = "Place pokedex: " + objetPokemon.id;
    console.log(objetPokemon.id);
    document.querySelector(".donnee").appendChild(pokedexPokemon);

    let elementsPokemon = document.createElement("li");
    let typesPokemon = objetPokemon.apiTypes;
    // typesPokemon.innerText = "Types: " + objetPokemon.apiTypes;
    let stringTypes = [];
    let imagesTypes = [];
    typesPokemon.forEach(type => {
        stringTypes.push(type.name);
        imagesTypes.push(type.image);
    });
    console.log(stringTypes);
    console.log(imagesTypes);
    elementsPokemon.innerText = "Types : " + stringTypes.join(" et ");
    console.log(elementsPokemon);
    document.querySelector(".donnee").appendChild(elementsPokemon);
}