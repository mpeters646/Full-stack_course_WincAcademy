fetch('https://swapi.dev/api/people/1/') // Go fetch data from server, at this address
  .then(response => response.json()) // configs a response.json
  .then(data => console.log(data)) // logs the data to the consol (can also a function to the DOM)
  .catch(error => console.log(error)); // logs the error when the fetch rejected
