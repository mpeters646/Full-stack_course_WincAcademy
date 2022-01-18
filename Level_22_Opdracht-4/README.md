# Deel 1

<!-- Informatie over katten: Cat API Doe een GET request op https://api.thecatapi.com/v1/breeds
- Wat is de response?
  JSON file met CatBreeds
- Welke status code krijg je terug?
  statuscode 200 (ok) -->

Information about cats: Cat API Make a GET request on <https://api.thecatapi.com/v1/breedshttps://api.thecatapi.com/v1/breeds/>

- What is the response?

```json
{
  "message": "404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"
}
```

- Which status code do you get back?  
  _404Not Found_

## Deel 2

<!-- Informatie over films: Open Movie Database API

Doe een GET request op http://www.omdbapi.com/?i=tt3896198

- Wat is de response?
  false No API key provided.
- Welke status code krijg je terug?
  401 Unauthorized -->

Movie information: Open Movie Database API

Make a GET request on <http://www.omdbapi.com/?i=tt3896198>

- What is the response?

```json
{
  "Response": "False",
  "Error": "No API key provided."
}
```

- Which status code do you get back?  
  _401Unauthorized_
- Answers

## Deel 3

<!-- Voeg nu aan de parameters het volgende toe. Wanneer je ze aan de parameters toevoegt zie je ze verschijnen in je request URL. Doe opnieuw de GET request:

key: apikey value: API_key

- Welke response krijg je nu?
  JSON file met een film
- Herken je wellicht wat data van de filmzoeker?
  Data uit de database filmzoeker opdracht -->

Now add the following to the parameters. When you add them to the parameters you will see them appear in your request URL. Do the GET request again:

**key**: apikey **value**: 896f18d6

What response do you get now?

```json
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Comedy",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett, Andy Lanning",
  "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
  "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 15 wins & 58 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
    },
    {
      "Source": "Metacritic",
      "Value": "67/100"
    }
  ],
  "Metascore": "67",
  "imdbRating": "7.6",
  "imdbVotes": "630,077",
  "imdbID": "tt3896198",
  "Type": "movie",
  "DVD": "22 Aug 2017",
  "BoxOffice": "$389,813,101",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```

- Can you recognize some data from the movie finder?  
  _Data from filmfinder excersize_
