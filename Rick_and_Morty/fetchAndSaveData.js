import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

// Replace with your actual API URL
const apiUrl = 'https://rickandmortyapi.com/api/character';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    // Convert the data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);

    // Write the data to the db.json file
    try {
      writeFileSync('db.json', jsonData);
      console.log('Data successfully saved to db.json');
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
  });
