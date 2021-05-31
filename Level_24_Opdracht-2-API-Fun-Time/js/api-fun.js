const clearContent = () => {
  document.querySelector('#apiContent').innerHTML = '';
  document.querySelector('#apiContent').classList.remove('quote');
};

// Random Dad joke
const getDadJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await response.json();
  const img = document.createElement('img');

  clearContent();

  const content = document.querySelector('#apiContent');

  content.classList.add('quote');
  content.innerHTML = json.joke;

  /* document.querySelector('#apiContent').classList.add('quote');

  img.src = `https://icanhazdadjoke.com/j/${json.id}.png`;
  document.querySelector('#apiContent').appendChild(img); */
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

  clearContent();

  const content = document.querySelector('#apiContent');

  content.classList.add('quote');
  content.innerHTML = json.value;
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
