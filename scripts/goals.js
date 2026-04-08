// goals.js
document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('fitDashUser')) || {};
    
    // Initialize form with current goals
    if (userData.goals) {
        document.getElementById('steps-goal').value = userData.goals.steps;
        document.getElementById('water-goal').value = userData.goals.water;
        document.getElementById('calories-goal').value = userData.goals.calories;
        document.getElementById('sleep-goal').value = userData.goals.sleep;
    }
    
    // Save goals
    document.getElementById('save-goals').addEventListener('click', function() {
        const newGoals = {
            steps: parseInt(document.getElementById('steps-goal').value),
            water: parseInt(document.getElementById('water-goal').value),
            calories: parseInt(document.getElementById('calories-goal').value),
            sleep: parseFloat(document.getElementById('sleep-goal').value)
        };
        
        userData.goals = newGoals;
        localStorage.setItem('fitDashUser', JSON.stringify(userData));
        
        alert('Goals saved successfully!');
    });
});