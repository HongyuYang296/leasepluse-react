# React App - Vite & TypeScript

This repository contains a **React** application built with **TypeScript** and **Vite**. The app has three main pages: **Home**, **Salary calculator** We use **Material-UI (MUI)** to enhance the user interface, providing responsive components like tables, forms, dialogs, bottom snackbars, and more. The project is structured to use modern tools like **Yup**, **Formik**, **Axios**, **ESLint**, and **Prettier** to ensure clean code and smooth form handling.

## Features

- **Home Page**: Displays an overview of the app.
- **Salary calculator Page**: A form page where users can input and submit employee details.
- **UI Components**: MUI components like forms, dialogs, and snackbars to enhance the user interface.
- **Form Validation**: Uses **Formik** and **Yup** for form management and validation.
- **API Integration**: Uses **Axios** to handle API calls.
- **Responsive Design**: Built with MUI to ensure the app is responsive and accessible.

## Libraries Used

The following libraries are used in the project:

- **Material-UI (MUI)**: For responsive UI components (tables, forms, dialogs, snackbars, etc.)
- **Yup**: For form validation schema
- **Formik**: For form state management and validation
- **Axios**: For handling API requests
- **ESLint**: For code linting and enforcing best practices
- **Prettier**: For code formatting
- **Vite**: For fast builds and hot reloading during development
- **TypeScript**: Strongly typed JavaScript to ensure reliability and scalability

## Project Structure

```bash
├── src
│   ├── components      # Reusable React components
│   ├── layouts         # centrally manage the layout
│   ├── pages           # Main pages (Home, Salary calculator)
│   ├── routes          # centrally manage the routes
│   ├── theme           # customize mui theme
│   ├── types           # some TS type interface 
│   ├── utils           # Utility functions
│   ├── App.tsx         # Main App component
│   ├── index.tsx       # Entry point of the application
├── public              # Public assets (e.g., images, fonts)
├── .eslintrc.json      # ESLint configuration file
├── .prettierrc         # Prettier configuration file
├── tsconfig.json       # TypeScript configuration file
└── package.json        # Project dependencies and scripts
```

Available Scripts
In the package.json, the following scripts are available for building, running, and maintaining the codebase:

```json
"scripts": {
  "dev": "vite",                               # Start the development server
  "build": "tsc -b && vite build",             # Compile TypeScript and build the project for production
  "serve": "vite preview --port 5173 --host",
  "lint": "eslint --fix",                      # Run ESLint and automatically fix problems
  "prettier": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",  # Format code with Prettier
  "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"  # Format all code files and configuration files
}
```

# Getting Started
## Prerequisites
Ensure you have the following installed:

Node.js (version 16 or higher)
npm (comes with Node.js)
Vite (included in the project dependencies)

## Step 1: Clone the Repository
Clone the repository from GitHub:

```bash
git clone https://github.com/HongyuYang296/leasepluse-react.git
cd leasepluse-react
```

## Step 2: Install Dependencies
Install the required dependencies by running:

```bash
npm install
```
## Step 3: Run the Development Server
To start the development server with hot reloading, run:

```bash
npm run dev
```
By default, the app will be running on http://localhost:5173/.

## Accessing the Application
- Home Page: Displays a basic overview of the application.
- Contact Page: A form where users can add contact details.
- Contact List Page: A table showing all the contacts added through the form.
  

