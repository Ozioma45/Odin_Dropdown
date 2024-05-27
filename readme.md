# Dropdown Menu Project

This project implements a reusable dropdown menu using HTML, CSS, and JavaScript. The JavaScript code is modular, allowing multiple dropdowns to function independently on a single page. This project is part of the Odin Project's JavaScript Full Stack Curriculum.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Code Explanation](#code-explanation)
- [License](#license)

## Demo

A live demo of the project can be found [here](#).

## Features

- Multiple dropdown menus on a single page.
- Toggle dropdown visibility on button click.
- Hide dropdown content when clicking outside the dropdown.
- Simple and reusable code structure.

## Technologies

- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dropdown-menu.git
```

2. Navigate to the project directory:

```bash
cd dropdown-menu
```

3. Open `index.html` in your web browser to see the dropdown in action.

## Code Explanation

### Dropdown Class

- **Constructor**: Initializes the dropdown elements and calls the `init` method.
- **init Method**: Sets up event listeners for button click and clicking outside the dropdown.
  - `this.button.addEventListener("click", () => { this.toggle(); });`: Toggles dropdown content visibility on button click.
  - `window.addEventListener("click", (e) => { if (!this.dropdown.contains(e.target)) { this.hide(); } });`: Hides dropdown content when clicking outside the dropdown.
- **toggle Method**: Toggles the `visible` class on the dropdown content to show/hide it.
- **hide Method**: Removes the `visible` class to hide the dropdown content.

### Initialization

- The code at the end selects all elements with the `dropdown` class and creates a new `Dropdown` instance for each, enabling multiple dropdowns on a single page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This project is a part of [The Odin Project's JavaScript Full Stack Curriculum](https://www.theodinproject.com/paths/full-stack-javascript).
