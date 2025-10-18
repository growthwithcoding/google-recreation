/**
 * Google Homepage Recreation - JavaScript Functions
 * 
 * This file contains 5 standalone JavaScript functions that demonstrate
 * various programming concepts including variables, functions, arrays, and strings.
 * These functions are NOT integrated into the HTML but are written as practice
 * to show functionality that could be added to a Google-like homepage.
 * 
 * Each function is well-commented and could be integrated into the site in the future.
 */

// ==================== FUNCTION 1: VALIDATE SEARCH QUERY ====================
/**
 * Validates whether a search query meets minimum requirements
 * 
 * Purpose: Ensures the user has entered a valid search query before submitting
 * 
 * Parameters:
 *   - query (string): The search term entered by the user
 * 
 * Returns:
 *   - Object with two properties:
 *     - isValid (boolean): true if query is valid, false otherwise
 *     - message (string): A message explaining the validation result
 * 
 * Validation Rules:
 *   - Query must be at least 3 characters long
 *   - Query cannot be only whitespace
 * 
 * Future Integration:
 *   - Attach this to the search form's submit event
 *   - Display the message to users if validation fails
 *   - Prevent form submission if query is invalid
 * 
 * Example Usage:
 *   const result = validateSearchQuery("cat");
 *   if (result.isValid) {
 *     // Submit the search
 *   } else {
 *     alert(result.message);
 *   }
 */
function validateSearchQuery(query) {
    // Trim whitespace from the query
    const trimmedQuery = query.trim();
    
    // Check if the query is empty after trimming
    if (trimmedQuery.length === 0) {
        return {
            isValid: false,
            message: "Please enter a search query."
        };
    }
    
    // Check if the query meets minimum length requirement
    if (trimmedQuery.length < 3) {
        return {
            isValid: false,
            message: "Search query must be at least 3 characters long."
        };
    }
    
    // Query is valid
    return {
        isValid: true,
        message: "Search query is valid!"
    };
}

// ==================== FUNCTION 2: RANDOMLY SELECT A DOODLE ====================
/**
 * Randomly selects a Google Doodle from an array of doodle objects
 * 
 * Purpose: Can be used to display a "Random Doodle of the Day" feature
 * 
 * Parameters:
 *   - doodlesArray (array): An array of doodle objects, each containing:
 *     - name (string): Name of the doodle
 *     - date (string): Date the doodle was published
 *     - category (string): Category of the doodle
 * 
 * Returns:
 *   - Object: A randomly selected doodle object from the array
 *   - null: If the array is empty
 * 
 * Future Integration:
 *   - Load this on page load to show a featured random doodle
 *   - Use with a "Surprise Me!" button to show random doodles
 *   - Implement in a daily rotation feature
 * 
 * Example Usage:
 *   const doodles = [
 *     { name: "Earth Day", date: "April 22, 2024", category: "Environment" },
 *     { name: "Olympics", date: "Feb 4, 2024", category: "Sports" }
 *   ];
 *   const randomDoodle = getRandomDoodle(doodles);
 *   console.log("Today's featured doodle:", randomDoodle.name);
 */
function getRandomDoodle(doodlesArray) {
    // Check if array is empty
    if (!doodlesArray || doodlesArray.length === 0) {
        console.log("No doodles available.");
        return null;
    }
    
    // Generate a random index within the array bounds
    const randomIndex = Math.floor(Math.random() * doodlesArray.length);
    
    // Return the randomly selected doodle
    const selectedDoodle = doodlesArray[randomIndex];
    
    console.log(`Selected doodle: ${selectedDoodle.name} (${selectedDoodle.date})`);
    
    return selectedDoodle;
}

// ==================== FUNCTION 3: CALCULATE TOTAL CHARACTERS ====================
/**
 * Calculates the total number of characters entered across multiple searches
 * 
 * Purpose: Track user engagement by measuring how much text users have searched
 * 
 * Parameters:
 *   - searchHistory (array): An array of strings, each representing a past search query
 * 
 * Returns:
 *   - Object with statistics:
 *     - totalCharacters (number): Total characters across all searches
 *     - averageLength (number): Average length of search queries (rounded to 2 decimals)
 *     - searchCount (number): Total number of searches
 * 
 * Future Integration:
 *   - Display user statistics in a dashboard
 *   - Track engagement metrics for analytics
 *   - Show "You've searched X characters today" message
 * 
 * Example Usage:
 *   const searches = ["cat videos", "weather today", "news"];
 *   const stats = calculateSearchCharacters(searches);
 *   console.log(`Total characters: ${stats.totalCharacters}`);
 */
function calculateSearchCharacters(searchHistory) {
    // Check if array is empty or undefined
    if (!searchHistory || searchHistory.length === 0) {
        return {
            totalCharacters: 0,
            averageLength: 0,
            searchCount: 0
        };
    }
    
    // Calculate total characters by summing length of each search query
    let totalCharacters = 0;
    for (let i = 0; i < searchHistory.length; i++) {
        totalCharacters += searchHistory[i].length;
    }
    
    // Calculate average length
    const averageLength = (totalCharacters / searchHistory.length).toFixed(2);
    
    // Return statistics object
    return {
        totalCharacters: totalCharacters,
        averageLength: parseFloat(averageLength),
        searchCount: searchHistory.length
    };
}

// ==================== FUNCTION 4: STORE SEARCH QUERIES ====================
/**
 * Stores and manages a history of submitted search queries
 * 
 * Purpose: Maintain a search history that could be displayed to users or used for autocomplete
 * 
 * Parameters:
 *   - newQuery (string): The new search query to add
 *   - existingHistory (array): Current array of search queries (optional)
 *   - maxHistorySize (number): Maximum number of queries to store (default: 10)
 * 
 * Returns:
 *   - Array: Updated search history with the new query added
 * 
 * Behavior:
 *   - Adds new query to the beginning of the array (most recent first)
 *   - Removes duplicates (keeps only the most recent occurrence)
 *   - Limits history to maxHistorySize entries
 *   - Trims whitespace from queries
 * 
 * Future Integration:
 *   - Store in localStorage to persist across sessions
 *   - Display as "Recent Searches" below the search bar
 *   - Use for search suggestions/autocomplete
 * 
 * Example Usage:
 *   let history = ["cats", "dogs"];
 *   history = storeSearchQuery("birds", history, 5);
 *   console.log(history); // ["birds", "cats", "dogs"]
 */
function storeSearchQuery(newQuery, existingHistory = [], maxHistorySize = 10) {
    // Trim whitespace from the new query
    const trimmedQuery = newQuery.trim();
    
    // Don't store empty queries
    if (trimmedQuery.length === 0) {
        console.log("Empty query not stored.");
        return existingHistory;
    }
    
    // Create a copy of existing history to avoid mutating the original
    let updatedHistory = [...existingHistory];
    
    // Add the new query to the beginning of the array (most recent first)
    // NOTE: We now allow duplicates so statistics accurately reflect total searches
    updatedHistory.unshift(trimmedQuery);
    
    // Limit the history size to maxHistorySize
    if (updatedHistory.length > maxHistorySize) {
        updatedHistory = updatedHistory.slice(0, maxHistorySize);
    }
    
    console.log(`Query "${trimmedQuery}" added. History size: ${updatedHistory.length}`);
    
    return updatedHistory;
}

// ==================== FUNCTION 5: TOGGLE MODAL POPUP ====================
/**
 * Simulates toggling a modal popup (sign-in dialog) with visibility state management
 * 
 * Purpose: Manage the open/close state of a modal dialog programmatically
 * 
 * Parameters:
 *   - currentState (boolean): Current visibility state of the modal (true = visible, false = hidden)
 *   - action (string): Action to perform - "open", "close", or "toggle" (optional, defaults to "toggle")
 * 
 * Returns:
 *   - Object with:
 *     - isVisible (boolean): New visibility state of the modal
 *     - action (string): The action that was performed
 *     - message (string): A descriptive message about the action
 * 
 * Future Integration:
 *   - Connect to actual Bootstrap modal events
 *   - Use with custom modal implementations
 *   - Track modal interaction analytics
 *   - Implement keyboard shortcuts (ESC to close, etc.)
 * 
 * Example Usage:
 *   let modalState = false;
 *   const result = toggleModal(modalState, "open");
 *   modalState = result.isVisible;
 *   console.log(result.message); // "Modal opened"
 */
function toggleModal(currentState, action = "toggle") {
    let newState;
    let actionPerformed;
    
    // Determine the new state based on the action
    switch(action.toLowerCase()) {
        case "open":
            newState = true;
            actionPerformed = "opened";
            break;
        case "close":
            newState = false;
            actionPerformed = "closed";
            break;
        case "toggle":
        default:
            newState = !currentState;
            actionPerformed = newState ? "opened" : "closed";
            break;
    }
    
    // Log the action for debugging
    console.log(`Modal ${actionPerformed}: ${newState}`);
    
    // Return the new state and action information
    return {
        isVisible: newState,
        action: actionPerformed,
        message: `Modal ${actionPerformed}`
    };
}

// ==================== DEMONSTRATION CODE ====================
/**
 * This section demonstrates how all the functions could work together
 * Uncomment the code below to see the functions in action in the browser console
 */

/*
console.log("===== GOOGLE HOMEPAGE JAVASCRIPT FUNCTIONS DEMO =====\n");

// Demo 1: Validate Search Query
console.log("--- Demo 1: Validate Search Query ---");
console.log(validateSearchQuery("hi"));           // Too short
console.log(validateSearchQuery("   "));          // Empty
console.log(validateSearchQuery("cat videos"));   // Valid
console.log("");

// Demo 2: Random Doodle Selection
console.log("--- Demo 2: Random Doodle Selection ---");
const doodleDatabase = [
    { name: "Earth Day 2024", date: "April 22, 2024", category: "Environment" },
    { name: "International Women's Day", date: "March 8, 2024", category: "Social" },
    { name: "Winter Olympics 2024", date: "February 4, 2024", category: "Sports" },
    { name: "Halloween 2023", date: "October 31, 2023", category: "Holiday" }
];
const randomDoodle = getRandomDoodle(doodleDatabase);
console.log("Random doodle selected:", randomDoodle);
console.log("");

// Demo 3: Calculate Search Characters
console.log("--- Demo 3: Calculate Search Characters ---");
const searchHistory = ["cat videos", "weather today", "news", "restaurants near me"];
const stats = calculateSearchCharacters(searchHistory);
console.log("Search Statistics:", stats);
console.log("");

// Demo 4: Store Search Queries
console.log("--- Demo 4: Store Search Queries ---");
let mySearchHistory = ["dogs", "cats"];
mySearchHistory = storeSearchQuery("birds", mySearchHistory, 5);
mySearchHistory = storeSearchQuery("fish", mySearchHistory, 5);
mySearchHistory = storeSearchQuery("dogs", mySearchHistory, 5); // Duplicate - will move to front
console.log("Current search history:", mySearchHistory);
console.log("");

// Demo 5: Toggle Modal
console.log("--- Demo 5: Toggle Modal ---");
let modalVisible = false;
let result = toggleModal(modalVisible, "open");
modalVisible = result.isVisible;
console.log(result);
result = toggleModal(modalVisible, "toggle");
modalVisible = result.isVisible;
console.log(result);
console.log("");

console.log("===== END OF DEMO =====");
*/

// ==================== FUNCTION 6: SIMULATE SEARCH RESULTS ====================
/**
 * Simulates Google search results by generating realistic result counts
 * 
 * Purpose: Provide a realistic search experience without actual API calls
 * 
 * Parameters:
 *   - query (string): The search term entered by the user
 * 
 * Returns:
 *   - Object with:
 *     - resultCount (string): Formatted number of results (e.g., "4,230,500,000")
 *     - searchTime (string): Simulated search time in seconds (e.g., "0.48")
 *     - query (string): The original search query
 * 
 * Algorithm:
 *   - Common words (3-5 chars) → Billions of results
 *   - Medium terms (6-10 chars) → Hundreds of millions
 *   - Specific terms (11-15 chars) → Millions
 *   - Very specific (16+ chars) → Thousands to hundreds of thousands
 *   - Adds randomization for authenticity
 */
function simulateSearch(query) {
    const trimmedQuery = query.trim();
    const queryLength = trimmedQuery.length;
    const wordCount = trimmedQuery.split(' ').length;
    
    // Base result count calculation based on query characteristics
    let baseResults;
    
    if (queryLength <= 5) {
        // Short queries (common words) - billions
        baseResults = Math.floor(Math.random() * 5000000000) + 1000000000;
    } else if (queryLength <= 10) {
        // Medium queries - hundreds of millions
        baseResults = Math.floor(Math.random() * 900000000) + 100000000;
    } else if (queryLength <= 15) {
        // Longer queries - millions
        baseResults = Math.floor(Math.random() * 90000000) + 10000000;
    } else {
        // Very specific queries - thousands to hundreds of thousands
        baseResults = Math.floor(Math.random() * 900000) + 100000;
    }
    
    // Adjust based on word count (more words = fewer results typically)
    if (wordCount > 3) {
        baseResults = Math.floor(baseResults / (wordCount / 2));
    }
    
    // Format the number with commas
    const formattedResults = baseResults.toLocaleString('en-US');
    
    // Generate random search time between 0.3 and 0.7 seconds
    const searchTime = (Math.random() * 0.4 + 0.3).toFixed(2);
    
    return {
        resultCount: formattedResults,
        searchTime: searchTime,
        query: trimmedQuery
    };
}

// ==================== RANDOM DOODLE FUNCTIONALITY ====================
/**
 * Array of recent Google Doodle images from https://doodles.google/
 * These are actual Google Doodles that can be embedded
 */
const recentGoogleDoodles = [
    {
        name: "Celebrating Cherry Blossom Season",
        image: "https://www.google.com/logos/doodles/2025/celebrating-cherry-blossom-season-copy-6753651837110757-2xa.gif",
        date: "2025"
    },
    {
        name: "NBA Playoffs 2025",
        image: "https://www.google.com/logos/doodles/2025/nba-playoffs-2025-am-6753651837110780.2-2xa.gif",
        date: "2025"
    },
    {
        name: "Celebrating House Music",
        image: "https://www.google.com/logos/doodles/2025/celebrating-house-music-6753651837110601.2-2xa.gif",
        date: "2025"
    },
    {
        name: "Celebrating the Appalachian Trail",
        image: "https://www.google.com/logos/doodles/2023/celebrating-the-appalachian-trail-6753651837110071.2-2xa.gif",
        date: "2023"
    },
    {
        name: "Earth Day 2025",
        image: "https://www.google.com/logos/doodles/2025/earth-day-2025-6753651837110746.2-2x.png",
        date: "2025"
    },
    {
        name: "US Teacher Appreciation Day 2025",
        image: "https://www.google.com/logos/doodles/2025/us-teacher-appreciation-day-2025-6753651837110735.2-2x.png",
        date: "2025"
    },
    {
        name: "New Year's Day 2025",
        image: "https://www.google.com/logos/doodles/2025/new-years-day-2025-6753651837110593-2xa.gif",
        date: "2025"
    },
    {
        name: "Halloween 2024",
        image: "https://www.google.com/logos/doodles/2024/halloween-2024-6753651837110311.2-2xa.gif",
        date: "2024"
    },
    {
        name: "Fourth of July 2025",
        image: "https://www.google.com/logos/doodles/2025/fourth-of-july-2025-6753651837110704-2x.png",
        date: "2025"
    },
    {
        name: "Mid-Autumn Festival 2025",
        image: "https://www.google.com/logos/doodles/2025/mid-autumn-festival-2025-6753651837110706-2xa.gif",
        date: "2025"
    }
];

/**
 * Displays a random Google Doodle from the recent doodles array
 */
function displayRandomGoogleDoodle() {
    const randomDoodle = getRandomDoodle(recentGoogleDoodles);
    
    if (randomDoodle) {
        const doodleContainer = document.getElementById('randomDoodleDisplay');
        
        if (doodleContainer) {
            // Update with new random doodle
            doodleContainer.innerHTML = `
                <div class="text-center">
                    <img src="${randomDoodle.image}" 
                         alt="${randomDoodle.name}" 
                         class="img-fluid mb-3"
                         style="max-height: 200px; max-width: 100%;">
                    <h5>${randomDoodle.name}</h5>
                    <p class="text-muted">${randomDoodle.date}</p>
                </div>
            `;
            
            // Add fade-in effect
            doodleContainer.style.opacity = '0';
            setTimeout(() => {
                doodleContainer.style.transition = 'opacity 0.5s';
                doodleContainer.style.opacity = '1';
            }, 50);
        }
    }
}

// ==================== SEARCH HISTORY DISPLAY ====================
/**
 * Displays the user's recent search history in an alert/modal
 */
function showSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    if (history.length === 0) {
        alert('No search history yet. Start searching to build your history!');
        return;
    }
    
    let historyHTML = '<div style="text-align: left; max-width: 400px;">';
    historyHTML += '<h6 style="margin-bottom: 10px;"><i class="bi bi-clock-history"></i> Recent Searches (Most Recent First)</h6>';
    historyHTML += '<ol style="padding-left: 20px; margin: 0;">';
    
    history.forEach(query => {
        historyHTML += `<li style="margin: 5px 0;">${query}</li>`;
    });
    
    historyHTML += '</ol>';
    historyHTML += '<div style="margin-top: 15px; text-align: center;">';
    historyHTML += '<button class="btn btn-sm btn-danger" onclick="clearSearchHistory()">Clear History</button>';
    historyHTML += '</div>';
    historyHTML += '</div>';
    
    // Create a custom modal-like display
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;';
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 8px; max-width: 500px; position: relative;">
            <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 10px; right: 10px; border: none; background: none; font-size: 24px; cursor: pointer;">&times;</button>
            ${historyHTML}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

/**
 * Clears the user's search history from localStorage
 */
function clearSearchHistory() {
    if (confirm('Are you sure you want to clear your search history?')) {
        localStorage.removeItem('searchHistory');
        alert('Search history cleared!');
        // Remove any open modals
        document.querySelectorAll('div[style*="z-index: 9999"]').forEach(el => el.remove());
    }
}

// ==================== SEARCH FORM EVENT HANDLER ====================
/**
 * Initialize search functionality when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Display a random doodle on page load
    displayRandomGoogleDoodle();
    
    // Add event listener to random doodle button
    const refreshBtn = document.getElementById('refreshDoodleBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', displayRandomGoogleDoodle);
    }
    
    // Add event listener to "I'm Feeling Lucky" button
    const luckyBtn = document.querySelector('.btn-light:nth-of-type(2)');
    if (luckyBtn) {
        luckyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = document.getElementById('searchInput').value.trim();
            if (query) {
                // Open Google's "I'm Feeling Lucky" search in new window
                const luckyUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
                window.open(luckyUrl, '_blank');
            } else {
                alert('Please enter a search term first!');
            }
        });
    }
    
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsText = document.getElementById('resultsText');
    
    // Load search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    console.log('Initial search history loaded:', searchHistory);
    
    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        
        const query = searchInput.value;
        
        // Validate the search query
        const validation = validateSearchQuery(query);
        
        if (!validation.isValid) {
            // Show validation error
            alert(validation.message);
            return;
        }
        
        // Simulate the search
        const results = simulateSearch(query);
        
        console.log('Before storing - searchHistory:', searchHistory);
        
        // Store the search query in history and persist to localStorage
        searchHistory = storeSearchQuery(query, searchHistory, 10);
        console.log('After storing - searchHistory:', searchHistory);
        
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        console.log('Saved to localStorage:', JSON.parse(localStorage.getItem('searchHistory')));
        
        // Calculate search statistics
        const stats = calculateSearchCharacters(searchHistory);
        console.log('Statistics calculated:', stats);
        
        // Display results with statistics
        resultsText.innerHTML = `
            <strong>Searched for:</strong> "${results.query}"<br>
            About <strong>${results.resultCount}</strong> results (${results.searchTime} seconds)
            <div class="mt-3 p-3 bg-light rounded">
                <h6 class="mb-2"><i class="bi bi-bar-chart"></i> Your Search Statistics</h6>
                <small class="d-block">Total searches: <strong>${stats.searchCount}</strong></small>
                <small class="d-block">Total characters searched: <strong>${stats.totalCharacters}</strong></small>
                <small class="d-block">Average query length: <strong>${stats.averageLength} characters</strong></small>
                <button class="btn btn-sm btn-outline-secondary mt-2" onclick="showSearchHistory()">
                    <i class="bi bi-clock-history"></i> View Recent Searches
                </button>
            </div>
        `;
        
        // Show the results container
        searchResults.style.display = 'block';
        
        console.log(`Search performed: "${query}" - ${results.resultCount} results in ${results.searchTime}s`);
    });
    
    // Optional: Clear results when user starts typing a new query
    searchInput.addEventListener('focus', function() {
        // You could add logic here to clear results or show search history
    });
});
