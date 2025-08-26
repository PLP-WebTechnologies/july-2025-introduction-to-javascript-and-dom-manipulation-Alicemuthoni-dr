// This is the graduation date: August 29, 2025.
// The new Date() object is a built-in JavaScript feature that lets you work with dates.
const countdownDate = new Date("Aug 29, 2025 00:00:00").getTime();

// This function will run every 1 second (1000 milliseconds) to update the countdown.
const countdownFunction = setInterval(function() {

    // Get today's date and time in milliseconds.
    const now = new Date().getTime();

    // Find the distance (in milliseconds) between today and the countdown date.
    const distance = countdownDate - now;

    // Time calculations to convert milliseconds into days, hours, minutes, and seconds.
    // We use Math.floor() to get a whole number.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Use document.getElementById() to find the correct HTML elements and display the numbers.
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Check if the countdown is over (distance is less than 0).
    if (distance < 0) {
        // If the countdown is finished, stop the function from running again.
        clearInterval(countdownFunction);
        
        // Show the congratulations message.
        document.getElementById("message").innerHTML = "Congratulations on your graduation!";
        
        // Make the GIF visible.
        document.getElementById("gif-container").style.display = "block";
        
        // Hide the countdown numbers.
        document.querySelector(".countdown-container").style.display = "none";
    }
}, 1000);