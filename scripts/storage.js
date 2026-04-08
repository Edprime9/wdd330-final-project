// Initialize user data if not exists
function initUserData() {
    if (!localStorage.getItem('fitDashUser')) {
        const defaultData = {
            steps: 6842,
            water: 4,
            calories: 420,
            sleep: 7.5,
            goals: {
                steps: 10000,
                water: 8,
                calories: 650,
                sleep: 8
            },
            activityData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                steps: [5000, 6000, 7500, 8000, 9000, 12000, 8500],
                calories: [300, 350, 400, 450, 500, 600, 450]
            }
        };
        localStorage.setItem('fitDashUser', JSON.stringify(defaultData));
    }
}

// Get user data
function getUserData() {
    return JSON.parse(localStorage.getItem('fitDashUser'));
}

// Update user data
function updateUserData(key, value) {
    const userData = getUserData();
    userData[key] = value;
    localStorage.setItem('fitDashUser', JSON.stringify(userData));
    return userData;
}

// Update activity data
function updateActivityData() {
    const userData = getUserData();
    const today = new Date().getDay() - 1; // 0-6 for Mon-Sun
    
    // Only update if it's a new day
    if (userData.lastUpdated !== today) {
        // Simulate some variation in daily activity
        userData.activityData.steps[today] = Math.floor(Math.random() * 3000) + 7000;
        userData.activityData.calories[today] = Math.floor(Math.random() * 200) + 400;
        userData.lastUpdated = today;
        localStorage.setItem('fitDashUser', JSON.stringify(userData));
    }
}

export { initUserData, getUserData, updateUserData, updateActivityData };