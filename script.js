// Simulate real-time data updates
function updateData() {

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // const currentDate = new Date()

  // const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

  // const currentUTCtimeElement = document.querySelector('[data-testid="currentUTCTime"]');

  // const currentDay = daysOfWeek[currentDate.getUTCDay()];
  // currentDayOfTheWeekElement.textContent = currentDay;
  // currentUTCtimeElement.textContent =


  const currentDate = new Date();
  const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  const currentUTCtimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  console.log(currentDay)

  currentDayOfTheWeekElement.textContent = currentDay;
  const currentUtcTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
  currentUTCtimeElement.textContent = currentUtcTime;
}

// Initialize the data update process
updateData();
setInterval(updateDateTime, 1000);
