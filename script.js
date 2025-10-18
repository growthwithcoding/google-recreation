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
    
    // Remove the query if it already exists (to avoid duplicates)
    updatedHistory = updatedHistory.filter(query => query !== trimmedQuery);
    
    // Add the new query to the beginning of the array (most recent first)
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

// ==================== SEARCH FORM EVENT HANDLER ====================
/**
 * Initialize search functionality when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsText = document.getElementById('resultsText');
    
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
        
        // Display results
        resultsText.innerHTML = `
            <strong>Searched for:</strong> "${results.query}"<br>
            About <strong>${results.resultCount}</strong> results (${results.searchTime} seconds)
        `;
        
        // Show the results container
        searchResults.style.display = 'block';
        
        // Store the search query in history
        if (typeof storeSearchQuery === 'function') {
            // Note: This stores in memory only. To persist, would need localStorage
            storeSearchQuery(query);
        }
        
        console.log(`Search performed: "${query}" - ${results.resultCount} results in ${results.searchTime}s`);
    });
    
    // Optional: Clear results when user starts typing a new query
    searchInput.addEventListener('focus', function() {
        // You could add logic here to clear results or show search history
    });
});
