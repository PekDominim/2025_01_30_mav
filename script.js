function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentTime = new Date();
    
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();
