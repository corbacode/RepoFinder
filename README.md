# Repo Finder

Welcome to Repo Finder! This application allows you to search for repositories on GitHub and view details about their owners.

## Overview

Repo Finder is a React Vite application that provides a fast and efficient way to explore GitHub repositories. By utilizing the GitHub API, it enables users to search for repositories based on keywords and discover relevant information about their owners.

## Features

- **Search Repositories:** Easily search for repositories on GitHub by entering keywords into the search bar.
- **View Repository Details:** Explore detailed information about each repository, including the repository name, description, stars count, and owner details.
- **Owner Details:** Get insights into the owners of repositories, such as their username, profile picture, and bio.

## How to Use

1. **Search for Repositories:** Enter keywords related to the repositories you're interested in into the search bar.
2. **Explore Results:** Browse through the search results to find repositories that match your criteria.
3. **View Repository Details:** Click on a repository to view detailed information, including the owner's details.
4. **Learn About Owners:** Click on the owner's username to navigate to their GitHub profile and learn more about them.

## Getting Started

To run Repo Finder locally, follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/corbacode/RepoFinder.git
```

**2. Navigate to the Project Directory:**

```bash
cd RepoFinder
```

**3. Install dependencies:**

```bash
npm install
```

**4. Set up environment variables:**

Create a `.env` file in the root directory and add the following environment variable:

```bash
VITE_API_URL=https://api.github.com
VITE_API_RAW_URL=https://raw.githubusercontent.com
```

**5. Start the development server:**

```bash
npm run dev
```

**6. Run on the browser:**

Navigate tohttp://localhost:5173 to view Repo Finder.

## Running Tests

**1. Run Tests:**

```bash
npm run test
```

This command will execute all unit tests located in the `src/__tests__` directory using Vitest. Unit tests focus on testing individual units or components in isolation, such as functions, components, or modules.

## Usage

- **Development Mode:** During development, you can use hot module replacement (HMR) to see your changes instantly without reloading the page. Simply make edits to your files, and the browser will update automatically.
- **Production Build:** Before deploying your application to production, run `npm run build` to generate a production-optimized build. You can then serve this build using npm run serve.

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that significantly speeds up the development process.
- **GitHub API:** An API provided by GitHub for accessing repository and user data.

## Contributing

Contributions to Repo Finder are welcome! If you have any ideas for new features, improvements, or bug fixes, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
