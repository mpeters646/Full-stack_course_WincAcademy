// Random Dad joke
const getDadJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await response.json();
  console.log(`Dad Joke: ${json.joke}`);
  console.log(json);
};

// Random Tronald Dump tweet
const getTronaldDumpTweet = async () => {
  const response = await fetch('http://api.tronalddump.io/random/quote', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();
  console.log(`Tronald Dump Tweet: ${json.value}`);
  console.log(json);
};

// PokeAPI
const getPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  const json = await response.json();
  console.log(json);
};
// getPokemon();

document.querySelector('#tweet').addEventListener('click', getTronaldDumpTweet);
document.querySelector('#joke').addEventListener('click', getDadJoke);
