function updateTimeAndDay() {
	const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
	const currentDayElement = document.querySelector('[data-testid="currentDay"]');
	
	const now = new Date();
	const utcTime = now.toUTCString().split(' ')[4];  // Extracting time part from UTC string
	const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });  // Getting day of the week
	
	currentTimeElement.textContent = utcTime;
	currentDayElement.textContent = dayOfWeek;
}

// Call the function to update the time and day initially
updateTimeAndDay();
// Update the time and day every minute
setInterval(updateTimeAndDay, 60000);