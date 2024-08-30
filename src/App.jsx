import './App.css';
import { useEffect } from 'react';

function App() {
   const token = "pk-bVtkXoKNcyIysvHulGBrfckzRlRBbvtMoNICScKJbYldxmFH"; // Ensure you replace with your actual token

  let messagesToSend = [
    {
      role: 'user',
      content: 'give me 14-july-2024 update and top ranking news and  data in json formet using source,date,title,details,catagory etc and aslo you should nclude new catagories data like politics and hot newses and also one thing, detail parameter should have more information as you can , give me at least 10-15 json unique data'
    }
  ];

  const fetchResponse = async () => {
    try {
      const response = await fetch('https://api.pawan.krd/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include Bearer in the Authorization header
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'pai-001',
          messages: messagesToSend
        })
      });

      const data = await response.json(); // Parse the response to JSON
      console.log(data); // Log the response data
    } catch (error) {
      console.error('Error:', error); // Log any errors
    }
  };
//   const apiKey = 'd97624b43b6c33e5fa7c0bf2aa7b393b'; // Replace with your actual API key
// const city = 'Sylhet'; // City name

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => response.json())
//   .then(data => {
//     const weather=data.weather;
//     console.log(weather[0].description); // Log the JSON weather data
//     // Handle the data as needed
//   })
//   .catch(error => console.error('Error fetching weather data:', error));




  useEffect(() => {
    fetchResponse();
  }, []); // Ensure the fetchResponse function is called when the component mounts

  return (
    <>
      <div>
      শিক্ষকদের পেনশন স্কিম শুরু হবে ২০২৫ সাল থেকে: ওবায়দুল কাদের
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
