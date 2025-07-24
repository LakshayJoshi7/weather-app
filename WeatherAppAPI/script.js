async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'b0692ac4f4f440d29af132201252601';

  if (!location) {
    document.getElementById('weatherResult').innerText = 'Please enter a location.';
    return;
  }

  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`);
    const data = await response.json();

    if (data.error) {
      document.getElementById('weatherResult').innerText = `Error: ${data.error.message}`;
    } else {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      document.getElementById('weatherResult').innerHTML = 
        `<strong>${data.location.name}, ${data.location.country}</strong><br>
         Temperature: ${temp}&deg;C<br>
         Condition: ${condition}`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerText = 'Failed to fetch weather data.';
  }
}