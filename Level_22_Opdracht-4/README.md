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

Make a GET request on <http://www.omdbapi.com/?i=tt3896198http://www.omdbapi.com/?i=tt3896198>

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
Can you recognize some data from the movie finder?
