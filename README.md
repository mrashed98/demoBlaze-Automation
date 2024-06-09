# Automation Testing for Demoblaze.com using Playwright and Node.js

Welcome to the repository for automation testing scripts for [Demoblaze.com](https://www.demoblaze.com) using Playwright and Node.js. This README file will guide you through setting up, running, and contributing to this project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository contains automation tests for Demoblaze.com, an e-commerce web application. The tests are written using [Playwright](https://playwright.dev/), a Node.js library to automate Chromium, Firefox, and WebKit with a single API.

## Features

- Automated UI tests for critical user flows.
- Easy setup and execution with Node.js.
- Extensible test suite with examples.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher) installed on your machine.
- npm (v6 or higher) installed on your machine.

## Installation

Follow these steps to set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/demoblaze-playwright-tests.git
    cd demoblaze-playwright-tests
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```


To run tests with a specific browser (Chromium, Firefox, WebKit):

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Project Structure

The project structure is organized as follows:

```
.
├── tests
│   ├── example.spec.js
│   └── ...
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

- `tests/`: Directory containing all test files.
- `playwright.config.js`: Configuration file for Playwright.
- `package.json`: Project metadata and dependencies.
- `package-lock.json`: Lockfile for project dependencies.
- `README.md`: This file.

## Writing Tests

To add new tests, create a `.spec.js` file in the `tests` directory. Here's a basic example:

```javascript
const { test, expect } = require('@playwright/test');

test('should display correct title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await expect(page).toHaveTitle('STORE');
});
```

Refer to the [Playwright documentation](https://playwright.dev/docs/intro) for more details on writing tests.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a Pull Request.

Please ensure your code follows the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy Testing! 🎉