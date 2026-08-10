// Get Clock element
const clock = document.getElementById("clock");

// Function to update Clock
function updateClock() {

    // Get current time
    let time = new Date();

    // Get current hours, minutes and seconds
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // See if time is currently AM or PM
    let meridiem;

    if (hours < 12) {
        meridiem = "AM";
    } else {
        meridiem = "PM";
    }

    // Convert the hours from 24-hour format to 12-hour format
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Add a zero to minutes 
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Add a zero to seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Display the current time on the webpage
    clock.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

// Run the function once when the page loads
updateClock();

// Update the Clock every 1 second
setInterval(updateClock, 1000);