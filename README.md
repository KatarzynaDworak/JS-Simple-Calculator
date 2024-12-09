# JS Simple Calculator

This is a simple calculator application implemented in pure JavaScript, with no frameworks or external libraries. The app supports basic mathematical operations and adheres to the requirements specified in the task.

## Task

The goal was to create a JavaScript application with the following constraints and features:
- **No frameworks or external libraries** for calculations.
- The project structure is organized into appropriate groups.
- **Webpack configuration** ensures the build output contains only two files: `index.html` and `bundle.js`.
- **Functional requirements** include:
  - Division (`/`)
  - Multiplication (`*`)
  - Subtraction (`-`)
  - Addition (`+`)
  - Percentage (`%`)
  - Sign change (`±`)
- **Technical requirements**:
  - Avoid using `eval` or JavaScript's built-in `Math` library.
  - ESLint was set up with optional integration of Prettier.
  - A pre-commit hook was implemented to prevent code with linting errors from being pushed.
- **Extra Credit**:
  - User-friendly interface with a responsive design.
  - Light and dark theme toggles for a better user experience.
  - Online deployment of the application.

## How to Use the Application

### Install Dependencies
Clone the repository:

   git clone https://github.com/KatarzynaDworak/JS-Simple-Calculator.git

### Navigate to the project folder:

    cd JS-Simple-Calculator

### Install the necessary dependencies:

      npm install

### Development Mode
Run the app locally in development mode with live reloading:

      npm start

This will open the app in your default browser and reload the app whenever changes are made.

### Build for Production
To build the app for production, run:

      npm run build

The build output will be located in the dist/ folder and will include the following:

      index.html
      bundle.js

### Deploy the App
The app has been deployed using GitHub Pages. You can view the live application here: [JS Simple Calculator Live](https://katarzynadworak.github.io/JS-Simple-Calculator/)

      Folder Structure
      The project is structured as follows:
          
          JS-Simple-Calculator/
          │
          ├── dist/                 # Build output (generated by Webpack, not included in the repository)
          │   ├── index.html        # Compiled HTML file
          │   ├── bundle.js         # Compiled JavaScript file
          │
          ├── src/                  # Source files
          │   ├── index.html        # Application HTML
          │   ├── index.js          # Main JavaScript file (UI logic)
          │   ├── math.js           # Business logic for calculations
          │   ├── theme.js          # Theme toggling logic
          │   ├── style.css         # Application styling
          │
          ├── .eslintrc.json        # ESLint configuration
          ├── .prettierrc           # Prettier configuration
          ├── .gitignore            # Ignored files for git
          ├── package.json          # Node.js project configuration
          ├── webpack.config.js     # Webpack configuration

### Features
**Core Functionalities:**
- Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- Calculate percentages and toggle the sign of the current number.
  
**Theming:**
- Toggle between light and dark themes for improved usability.

**Optimized Code:**
- Output consists of only two files for deployment: index.html and bundle.js.

**Code Quality:**
- ESLint and Prettier ensure clean and consistent code.
- A pre-commit hook prevents invalid or poorly formatted code from being pushed.

**Testing:**
Added Jest unit tests to ensure the correctness of the calculator's functionality.
Example: Tests for basic arithmetic operations like addition and division.

### Remarks
This project follows the standard practices for setting up a JavaScript application without any framework. It utilizes Webpack for bundling, ESLint for code linting, Prettier for formatting, and GitHub Pages for deployment.

If you encounter any issues or have any questions, feel free to create an issue or contact me. 😊
