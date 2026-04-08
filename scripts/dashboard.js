import { initUserData, getUserData, updateUserData, updateActivityData } from './storage.js';

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initUserData();
    updateActivityData();
    const userData = getUserData();
    
    // Update stats display
    updateStatsDisplay(userData);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize charts
    initCharts(userData.activityData);
});

function updateStatsDisplay(userData) {
    // Steps
    document.querySelector('#steps-progress span').textContent = userData.steps.toLocaleString();
    const stepsPercentage = (userData.steps / userData.goals.steps * 100).toFixed(0);
    document.querySelector('#steps-progress').style.background = 
        `conic-gradient(var(--accent-color) 0% ${stepsPercentage}%, #e0e0e0 ${stepsPercentage}% 100%)`;
    
    // Water
    document.querySelector('.water-fill').style.height = `${userData.water / userData.goals.water * 100}%`;
    document.querySelector('.water-controls span').textContent = `${userData.water}/${userData.goals.water} glasses`;
    
    // Calories
    document.querySelector('.progress-fill').style.width = `${userData.calories / userData.goals.calories * 100}%`;
    document.querySelector('#calories-card p').textContent = `${userData.calories}/${userData.goals.calories} kcal`;
    
    // Sleep
    document.querySelector('.sleep-display span').textContent = userData.sleep;
    document.querySelector('.sleep-controls input').value = userData.sleep;
}

function setupEventListeners() {
    // Water controls
    document.querySelector('.water-plus').addEventListener('click', function() {
        const userData = getUserData();
        if (userData.water < userData.goals.water) {
            updateUserData('water', userData.water + 1);
            updateStatsDisplay(getUserData());
        }
    });
    
    document.querySelector('.water-minus').addEventListener('click', function() {
        const userData = getUserData();
        if (userData.water > 0) {
            updateUserData('water', userData.water - 1);
            updateStatsDisplay(getUserData());
        }
    });
    
    // Sleep slider
    document.querySelector('.sleep-controls input').addEventListener('input', function() {
        updateUserData('sleep', parseFloat(this.value));
        updateStatsDisplay(getUserData());
    });
}

function initCharts(activityData) {
    const ctx = document.getElementById('activity-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: activityData.labels,
            datasets: [
                {
                    label: 'Steps',
                    data: activityData.steps,
                    backgroundColor: 'rgba(74, 111, 165, 0.7)',
                    borderColor: 'rgba(74, 111, 165, 1)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'Calories',
                    data: activityData.calories,
                    backgroundColor: 'rgba(79, 195, 247, 0.7)',
                    borderColor: 'rgba(79, 195, 247, 1)',
                    borderWidth: 1,
                    type: 'line',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Steps'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Calories'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}