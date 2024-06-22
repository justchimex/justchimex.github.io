# Real-time Search and Highlight

This project is a simple, interactive web application that allows users to search through a list of items in real-time. As the user types in the search field, the list of items is filtered to show only those that contain the search query, with the matching part of the text highlighted.

## Features

- Real-time filtering of items based on user input.
- Case-insensitive search.
- Highlighting of the matching text in each item.
- Clean and visually appealing user interface.


## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

You need a modern web browser to run this project.

### Installation

1. **Clone the repository:**

    ```bash
    git clone git clone https://github.com/justchimex/justchimex.github.io.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd real-time-search-highlight
    ```

3. **Open `index.html` in your web browser:**

    You can simply double-click on the `index.html` file, or you can open it using a web server (e.g., using VSCode's Live Server extension).

## Project Structure

- `index.html`: The main HTML file that sets up the structure of the application.
- `styles.css`: The CSS file that contains styles to make the application visually appealing.
- `scripts.js`: The JavaScript file that contains the logic for real-time searching and highlighting.

## Usage

1. **Open the application:**

    Open `index.html` in your web browser.

2. **Search for items:**

    Start typing in the search input field. The list of items below will be filtered in real-time to show only those that contain the search query. The matching part of the text will be highlighted.

## Customization

### Adding More Items

To add more items to the list, simply modify the `items` array in `scripts.js`:

```javascript
const items = [
  'JavaScript programming',
  'HTML and CSS basics',
  'Frontend development',
  'Web design principles',
  'Dynamic content handling',
  'Responsive web design',
  'JavaScript frameworks',
  'Server-side programming',
  'Database management',
  'Version control with Git',
  'Web performance optimization',
  'User experience design',
  'Mobile-first design',
  'Cross-browser compatibility',
  'Progressive web apps',
  'Single-page applications',
  'API integration',
  'Backend development',
  'Content management systems',
  'Web security basics'
];

   
