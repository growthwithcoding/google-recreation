# Google Homepage Recreation

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)

A simplified recreation of the Google homepage built with Bootstrap 5, HTML, CSS, and JavaScript. This project was created for **Coding Temple** and demonstrates responsive web design, modern Bootstrap components, and JavaScript programming fundamentals. The project features actual Google Doodle images to showcase the rich history of Google's creative homepage designs.

## 📋 Project Overview

This project recreates the clean, minimalist design of Google's homepage while incorporating modern web development practices. It features a responsive navigation bar, centered search interface, interactive components, and well-documented JavaScript functions that could enhance the user experience.

**Key Features:**
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Bootstrap 5 components and utilities
- ✅ Custom CSS styling for Google-like aesthetic
- ✅ Clean, organized, and well-commented code
- ✅ 6 standalone JavaScript functions demonstrating core programming concepts
- ✅ Features actual Google Doodle images (Earth Day 2024, International Women's Day 2024, Winter Olympics 2024)
- ✅ Dedicated sign-in page with Google-authentic design
- ✅ Updated navbar branding highlighting Doodle focus

## 🆕 Recent Updates

### October 2025 Updates

**Navigation Enhancement:**
- Updated navbar brand from "Google Recreation" to "Google Recreation- Doodle Highlight" to better reflect the project's focus on showcasing Google Doodles
- Converted sign-in button to navigate to dedicated signin.html page instead of modal popup for improved user experience

**New Sign-In Page (signin.html):**
- Created standalone sign-in page matching Google's authentic design
- Includes Google SVG logo for professional appearance
- Email input field with proper validation
- "Forgot email?" and "Learn more about Guest mode" links
- "Create account" button that links back to index.html
- Responsive footer with language selector and Help/Privacy/Terms links
- Bootstrap 5 styling with custom Google-like CSS
- JavaScript form handler with demo alert functionality

**JavaScript Function Updates:**
- Modified `storeSearchQuery()` function to allow duplicate entries in search history
- Added comment explaining that duplicates now reflect actual search statistics for more accurate analytics
- Added new `simulateSearch()` function for enhanced search functionality demonstration

**File Structure Changes:**
- Added signin.html as new standalone page
- Modified index.html to link to sign-in page
- Updated script.js with improved search history tracking

---

## 🎨 Bootstrap Components Used

This project utilizes **4 Bootstrap components** to create a polished, professional interface:

### 1. **Navbar (Navigation Bar)**
- **Purpose:** Provides site navigation with responsive mobile menu
- **Why chosen:** Essential for any website; demonstrates responsive design patterns
- **Features:**
  - Collapses into hamburger menu on mobile devices
  - Contains Home, About, and Contact links
  - Includes Sign In button that links to dedicated signin.html page
  - Uses Bootstrap's `.navbar-expand-lg` for responsive behavior

### 2. **Cards**
- **Purpose:** Display featured Google Doodles in an organized, visual format
- **Why chosen:** Cards are perfect for showcasing content with images and descriptions
- **Features:**
  - Three cards displaying different doodles
  - Hover effects with shadow and transform animations
  - Responsive grid layout (stacks on mobile, side-by-side on desktop)
  - Image, title, description, and date for each doodle

### 3. **Accordion**
- **Purpose:** Interactive FAQ section about Google Doodles
- **Why chosen:** Saves space while providing detailed information on demand
- **Features:**
  - Three expandable/collapsible FAQ items
  - Smooth animations when opening/closing
  - Only one section open at a time (Bootstrap's collapse behavior)
  - Accessible keyboard navigation

### 4. **Buttons & Form Controls**
- **Purpose:** Interactive elements for user actions and navigation
- **Why chosen:** Essential Bootstrap components for user interaction
- **Features:**
  - Primary and secondary button styles
  - Form inputs with Bootstrap styling
  - Responsive button behavior
  - Sign-in button that navigates to dedicated signin.html page
  - Search submission and "I'm Feeling Lucky" buttons

---

## 💻 JavaScript Functions

This project includes **6 well-documented JavaScript functions** in `script.js`. These functions are standalone (not integrated into the HTML) but demonstrate practical functionality that could be added to enhance the Google homepage experience.

### Function 1: `validateSearchQuery(query)`
**Purpose:** Validates user search input before submission

**Parameters:**
- `query` (string): The search term to validate

**Returns:**
- Object with `isValid` (boolean) and `message` (string)

**How it works:**
- Trims whitespace from the query
- Checks if query is empty or too short (< 3 characters)
- Returns validation status with appropriate message

**Current Implementation:**
- **ACTIVELY USED** in search form submit event handler
- Validates queries before calling `simulateSearch()`
- Displays alert with validation message if query is invalid
- Prevents search execution for empty or too-short queries
- Integrated with DOMContentLoaded event listener

**Example with actual usage:**
```javascript
// From actual implementation in search form handler
const query = searchInput.value;
const validation = validateSearchQuery(query);

if (!validation.isValid) {
    alert(validation.message);  // Shows error to user
    return;  // Prevents form submission
}
// Continue with search if valid...
```

---

### Function 2: `getRandomDoodle(doodlesArray)`
**Purpose:** Randomly selects a doodle from an array for "Doodle of the Day" feature

**Parameters:**
- `doodlesArray` (array): Array of doodle objects with name, date, and image URL

**Returns:**
- Randomly selected doodle object, or null if array is empty

**How it works:**
- Checks if array is valid and not empty
- Generates random index using `Math.random()`
- Returns the doodle at that index
- Logs the selected doodle name and date to console

**Current Implementation:**
- **ACTIVELY USED** with `recentGoogleDoodles` array containing 10 actual Google Doodles
- Called by `displayRandomGoogleDoodle()` helper function on page load
- Array includes real Google Doodle image URLs from google.com/logos/doodles/
- Powers the random doodle display feature on the homepage

**Example with actual usage:**
```javascript
// Real array used in the project (10 Google Doodles with image URLs)
const recentGoogleDoodles = [
  {
    name: "Celebrating Cherry Blossom Season",
    image: "https://www.google.com/logos/doodles/2025/celebrating-cherry-blossom-season-copy-6753651837110757-2xa.gif",
    date: "2025"
  },
  {
    name: "Earth Day 2025",
    image: "https://www.google.com/logos/doodles/2025/earth-day-2025-6753651837110746.2-2x.png",
    date: "2025"
  },
  // ... 8 more doodles
];

const randomDoodle = getRandomDoodle(recentGoogleDoodles);
// Returns: { name: "Earth Day 2025", image: "https://...", date: "2025" }
```

---

### Function 3: `calculateSearchCharacters(searchHistory)`
**Purpose:** Calculates statistics about user's search activity

**Parameters:**
- `searchHistory` (array): Array of past search query strings

**Returns:**
- Object with `totalCharacters`, `averageLength`, and `searchCount`

**How it works:**
- Iterates through search history array
- Sums up character length of each query
- Calculates average query length (rounded to 2 decimals)
- Returns comprehensive statistics object

**Current Implementation:**
- **ACTIVELY USED** in search form submit handler
- Called after each search to generate live statistics
- Statistics displayed in search results UI with search count, total characters, and average length
- Works in conjunction with localStorage-based search history

**Example with actual usage:**
```javascript
// From actual implementation - called after storing search
const stats = calculateSearchCharacters(searchHistory);
// Used to display in UI:
// Total searches: 5
// Total characters searched: 127
// Average query length: 25.4 characters
```

---

### Function 4: `storeSearchQuery(newQuery, existingHistory, maxHistorySize)`
**Purpose:** Maintains a managed history of search queries

**Parameters:**
- `newQuery` (string): New search to add
- `existingHistory` (array): Current search history (optional, defaults to empty array)
- `maxHistorySize` (number): Maximum history entries (optional, defaults to 10)

**Returns:**
- Updated search history array

**How it works:**
- Trims whitespace from new query
- **Now allows duplicate entries** to accurately reflect total search statistics
- Adds query to front of array (most recent first)
- Limits array size to maxHistorySize
- Logs actions to console for debugging

**Current Implementation:**
- **ACTIVELY USED** in search form submit handler
- Integrates with localStorage for persistent storage across browser sessions
- Loads search history from localStorage on page load
- Saves updated history back to localStorage after each search
- Powers the "View Recent Searches" feature
- Works with `showSearchHistory()` and `clearSearchHistory()` helper functions

**Recent Update (October 2025):**
- Modified to allow duplicate search queries instead of removing them
- This change enables more accurate search statistics and analytics tracking

**Example with actual usage:**
```javascript
// From actual implementation
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
searchHistory = storeSearchQuery(query, searchHistory, 10);
localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
// History persists across page reloads and can be viewed/cleared by user
```

---

### Function 5: `toggleModal(currentState, action)`
**Purpose:** Manages modal popup visibility state programmatically

**Parameters:**
- `currentState` (boolean): Current modal visibility (true = visible, false = hidden)
- `action` (string): Action to perform - "open", "close", or "toggle" (defaults to "toggle")

**Returns:**
- Object with `isVisible`, `action`, and `message`

**How it works:**
- Uses switch statement to handle different actions
- Opens, closes, or toggles modal based on action parameter
- Returns new state and descriptive message
- Logs actions to console for debugging

**Current Status:**
- **DEMONSTRATION FUNCTION ONLY** - Not actively integrated into the application
- Serves as a learning example for state management patterns
- Shows proper switch statement usage and object return values
- Could be integrated with Bootstrap modals or custom popup components

**Future Integration:**
- Connect to Bootstrap modal events
- Implement keyboard shortcuts (ESC to close)
- Track modal interactions for analytics
- Add custom animation effects
- Manage multiple modals on the page (e.g., sign-in, settings, confirmations)

**Example:**
```javascript
let modalState = false;
const result = toggleModal(modalState, "open");
// Returns: { isVisible: true, action: "opened", message: "Modal opened" }

// Can also toggle or close
toggleModal(true, "close");  // Closes the modal
toggleModal(false, "toggle"); // Opens since current state is false
```

---

### Function 6: `simulateSearch(query)`
**Purpose:** Simulates a search operation and returns mock results with realistic result counts

**Parameters:**
- `query` (string): The search term to simulate

**Returns:**
- Object containing:
  - `resultCount` (string): Formatted number with commas (e.g., "4,230,500,000")
  - `searchTime` (string): Simulated search time in seconds (e.g., "0.48")
  - `query` (string): The original trimmed search query

**How it works - Intelligent Result Algorithm:**
- **Short queries (≤5 characters):** Common words generate 1-5 billion results
- **Medium queries (6-10 characters):** Generate 100-900 million results
- **Longer queries (11-15 characters):** More specific, generate 10-90 million results
- **Very specific queries (16+ characters):** Generate 100,000-1 million results
- **Word count adjustment:** More words = fewer results (divided by word count / 2)
- **Formatting:** Uses `toLocaleString()` to add comma separators
- **Random search time:** Generates realistic time between 0.3-0.7 seconds

**Current Implementation:**
- **ACTIVELY USED** in search form submit handler
- Called after query validation passes
- Results displayed in search results UI showing:
  - Formatted result count with commas
  - Simulated search time
  - Original query text
- Provides realistic Google-like search experience without API calls

**Recent Addition (October 2025):**
- New function added to demonstrate realistic search result simulation
- Uses sophisticated algorithm based on query characteristics
- Prepares groundwork for future API integration

**Example with actual usage:**
```javascript
// From actual implementation - called in search handler
const results = simulateSearch(query);
// Display: About 3,245,000,000 results (0.52 seconds)

// Algorithm adapts to query complexity:
simulateSearch("cat");  // → ~3 billion results
simulateSearch("web development");  // → ~500 million results  
simulateSearch("react hooks tutorial");  // → ~20 million results
simulateSearch("advanced typescript generic constraints");  // → ~400,000 results
```

---

## 📁 Project Structure

```
google-homepage-recreation/
│
├── index.html          # Main HTML file with Bootstrap structure
├── signin.html         # Dedicated sign-in page with Google-authentic design
├── style.css           # Custom CSS for styling and responsive design
├── script.js           # JavaScript functions (standalone, for practice)
├── README.md           # This file - project documentation
└── images/             # Directory containing Google Doodle images
    ├── CTDoodle.png
    ├── earth-day-2024-6753651837110453-2xa.gif
    ├── halloween23.png
    ├── international-womens-day-2024-6753651837110196-2x.png
    ├── new-years-eve-2024-6753651837110349-2xa.gif
    └── WinterOlympics2024.avif
```

### File Descriptions

**index.html**
- Complete HTML structure with semantic markup
- Bootstrap 5 CDN links for CSS and JavaScript
- Responsive navigation bar with updated "Doodle Highlight" branding
- Hero section with Google logo and search form
- Two input types: text (search) and email (newsletter signup)
- Cards section for featured doodles
- Table section with doodle archive (5 entries)
- Accordion FAQ section
- Sign-in button now links to dedicated signin.html page
- Footer with links

**signin.html** *(New)*
- Standalone sign-in page matching Google's authentic design
- Google SVG logo for brand consistency
- Email input form with validation
- "Forgot email?" functionality link
- Guest mode information and learn more link
- "Create account" button linking back to main page
- Responsive footer with language selector
- Help, Privacy, and Terms links
- Custom Google-style CSS (embedded in file)
- JavaScript form handler with demo functionality

**style.css**
- Custom styles to enhance Bootstrap components
- Google-like color scheme and typography
- Hover effects and transitions
- Responsive design media queries for mobile, tablet, and desktop
- Custom scrollbar styling
- Animation keyframes

**script.js**
- 6 well-documented core JavaScript functions for demonstration
- Additional helper functions for enhanced interactivity:
  - `displayRandomGoogleDoodle()` - Displays random doodle from curated array
  - `showSearchHistory()` - Shows user's recent searches in modal-style display
  - `clearSearchHistory()` - Clears search history from localStorage
  - Event handlers for search form, "I'm Feeling Lucky" button, and page load
- Each function uses variables, arrays, strings, and control structures
- Commented demo code showing usage examples
- Functions demonstrate: validation, randomization, calculations, data management, state control, and search simulation
- Updated `storeSearchQuery()` to allow duplicate entries for accurate statistics tracking
- localStorage integration for persistent search history across sessions
- Array of 10 recent Google Doodles with direct image URLs

---

## 🚀 Setup and Run Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - pure HTML/CSS/JS

### Running the Project

1. **Download/Clone the Project**
   ```bash
   # If using git
   git clone <repository-url>
   
   # Or simply download the ZIP file and extract
   ```

2. **Open in Browser**
   - Navigate to the project folder
   - Double-click `index.html` to open in your default browser
   - OR right-click `index.html` → Open With → Your preferred browser

3. **View in VS Code (Optional)**
   - Open the project folder in Visual Studio Code
   - Install "Live Server" extension
   - Right-click `index.html` → Open with Live Server
   - This provides auto-reload on file changes

### Testing JavaScript Functions

The JavaScript functions in `script.js` are standalone and not integrated into the HTML. To test them:

1. Open `index.html` in a browser
2. Open the browser's Developer Console (F12 or right-click → Inspect → Console)
3. In `script.js`, scroll to the bottom and uncomment the demonstration code section
4. Refresh the page
5. View the console output showing all functions in action

**Alternative:** Copy individual functions into the browser console and test manually:
```javascript
// Example: Test in browser console
validateSearchQuery("test query");
```

---

## ✅ Project Requirements Checklist

### Navigation Bar ✓
- [x] Responsive navbar with hamburger menu on mobile
- [x] At least 3 navigation links (Home, About, Contact)
- [x] Works on mobile and desktop devices

### Home Page Style ✓
- [x] Clean Google-like design
- [x] Centered search interface
- [x] Google logo prominently displayed
- [x] Professional color scheme and typography

### Form Section ✓
- [x] Centered search form with text input
- [x] Email input for newsletter signup
- [x] Two different input types as required
- [x] Styled search buttons

### Table Section ✓
- [x] Responsive table with Bootstrap styling
- [x] Displays at least 3 doodle entries (includes 5)
- [x] Columns: Number, Name, Date, Category
- [x] Hover effects and striped rows

### 3 Bootstrap Components ✓
- [x] **Component 1:** Navbar (responsive navigation)
- [x] **Component 2:** Cards (featured doodles display)
- [x] **Component 3:** Accordion (FAQ section)
- [x] **Bonus Component 4:** Buttons & Form Controls (interactive elements)

### 4-6 JavaScript Functions ✓
- [x] **Function 1:** validateSearchQuery() - input validation
- [x] **Function 2:** getRandomDoodle() - random selection from array
- [x] **Function 3:** calculateSearchCharacters() - statistics calculation
- [x] **Function 4:** storeSearchQuery() - array management (updated to allow duplicates)
- [x] **Function 5:** toggleModal() - state management
- [x] **Function 6:** simulateSearch() - search simulation and mock results
- [x] All functions use variables, arrays, strings, and control structures
- [x] Functions are in separate JS file with detailed comments

### Responsive Design ✓
- [x] Mobile responsive (320px+)
- [x] Tablet responsive (768px+)
- [x] Desktop responsive (1024px+)
- [x] Bootstrap grid system utilized
- [x] Custom media queries for enhanced responsiveness

### README Content ✓
- [x] Project description
- [x] Bootstrap components list with explanations
- [x] Detailed JS function documentation
- [x] Setup and run instructions
- [x] Clear markdown formatting

### Overall Presentation ✓
- [x] Clean, organized code structure
- [x] Consistent formatting and indentation
- [x] Comprehensive comments throughout
- [x] Professional appearance
- [x] All files properly named

---

## 🎯 Key Learning Outcomes

This project demonstrates proficiency in:

1. **HTML5 Structure**
   - Semantic HTML elements
   - Forms and input types
   - Accessibility considerations

2. **CSS3 Styling**
   - Custom properties and variables
   - Flexbox and Grid layouts
   - Responsive design principles
   - Animations and transitions

3. **Bootstrap Framework**
   - Component integration
   - Responsive grid system
   - Utility classes
   - Customization techniques

4. **JavaScript Programming**
   - Function declaration and usage
   - Array manipulation
   - String operations
   - Object creation and management
   - Control flow (if/else, switch)
   - Math operations and randomization

5. **Web Development Best Practices**
   - Code organization and comments
   - File structure
   - Responsive design
   - User experience considerations

---

## 🔧 Future Enhancements

Potential improvements that could be made:

- **Integration:** Connect JavaScript functions to actual page elements
- **Persistence:** Use localStorage to save search history
- **API Integration:** Fetch real Google Doodle data from an API
- **Search Functionality:** Implement actual search with results page
- **Autocomplete:** Add search suggestions based on history
- **Dark Mode:** Toggle between light and dark themes
- **Internationalization:** Multi-language support
- **Performance:** Lazy loading for images
- **Accessibility:** Enhanced ARIA labels and keyboard navigation
- **PWA Features:** Make it installable as a Progressive Web App

---

## 📄 License

This is an educational project created for learning purposes.

---

## 👨‍💻 Author

**Austin Carlson** - *#growthwithcoding*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/austin-carlson-720b65375/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/growthwithcoding)

Created as part of a web development coding assignment to demonstrate proficiency in HTML, CSS, Bootstrap, and JavaScript.

---

## 📝 Notes

- All Bootstrap components are loaded via CDN (no local files required)
- JavaScript functions are intentionally kept separate for educational purposes
- The project is fully functional and can be deployed to any web hosting service
- **Custom Coding Temple Doodle logo** (`CTDoodle.png`) is used as the main homepage logo
- **Actual Google Doodle images** are used in the Featured Doodles section, including:
  - Earth Day 2024 (animated GIF)
  - International Women's Day 2024 (PNG)
  - Winter Olympics 2024 (AVIF format)
- This project was created as a **Coding Temple** assignment to demonstrate web development skills

---

## 📅 Change Log

### October 18, 2025
- ✅ Created dedicated `signin.html` page with Google-authentic design
- ✅ Updated navbar branding to "Google Recreation- Doodle Highlight"
- ✅ Modified sign-in button to navigate to signin.html instead of modal
- ✅ Enhanced `storeSearchQuery()` function to allow duplicate entries for better analytics
- ✅ Added `simulateSearch()` function for search functionality demonstration
- ✅ Updated README with comprehensive documentation of all changes

---

**Last Updated:** October 18, 2025

**Technologies:** HTML5 | CSS3 | JavaScript ES6 | Bootstrap 5.3.2
