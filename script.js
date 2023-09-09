// Simulate real-time data updates
function updateData() {
  const saysOfTheWeek = [
    Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
  ]

  const currentDate = new Date()
  const currentDateElement = document.querySelector('data-testid=""]')
  const temperatureElement = document.querySelector('[data-testid="temperature"]');
  const humidityElement = document.querySelector('[data-testid="humidity"]');

  // Simulated data values (replace with actual data fetching)
  const temperature = Math.floor(Math.random() * 100);
  const humidity = Math.floor(Math.random() * 100);

  temperatureElement.textContent = `${temperature}°C`;
  humidityElement.textContent = `${humidity}%`;

  // Update data every 5 seconds
  setTimeout(updateData, 5000);
}

// Initialize the data update process
updateData();
