async function fetchHealthTip() {
    try {
        // First try to load from local JSON
        const response = await fetch('data/tips.json');
        const tips = await response.json();
        
        // Select a random tip
        const randomIndex = Math.floor(Math.random() * tips.length);
        displayTip(tips[randomIndex]);
    } catch (error) {
        console.error('Error loading tips:', error);
        
        // Fallback to a default tip
        displayTip("Remember to stay hydrated throughout the day!");
    }
}

function displayTip(tip) {
    document.getElementById('tip-content').innerHTML = `
        <p>${tip}</p>
    `;
}

// Initialize tip when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchHealthTip);

// Refresh tip button
document.getElementById('refresh-tip')?.addEventListener('click', fetchHealthTip);