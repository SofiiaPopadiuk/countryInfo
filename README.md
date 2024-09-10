# Country Info

This is a simple Angular application designed to provide detailed information about countries.

## Prerequisites

Before running the application, ensure you have [Node.js](https://nodejs.org/) installed.

## Setup

To set up the project on your local machine, follow these steps:

1. **Install Dependencies**  
   Execute the following command to install all required dependencies:
   ```bash
   npm install

2. **Start the Application**  
   Run the development server with:
   ```bash
   npm start

This will start the Angular application, and you can view it in your browser at http://localhost:4200.

## Additional Libraries Used

- **Angular Material**: A UI component library for Angular. [Learn more](https://material.angular.io/)

## Configuration

### Environment Variables
Manage environment-specific settings using a `.env` file.

### ESLint and Prettier
The project uses ESLint for linting and Prettier for code formatting.

- **ESLint**: Run `npm run lint` to check for linting issues.
- **Prettier**: Run `npm run format` to format the code according to the Prettier configuration.

### Configuration Files
- **.eslintrc.json**: Configuration for ESLint.
- **.prettierrc**: Configuration for Prettier.

## Application features:
- Search for countries by name.
- View holidays for a selected country in a specified year.

## Table of Contents
1. [Application Structure](#application-structure)
2. [Components](#components)
3. [Configs](#configs)
4. [Interceptors](#interceptors)
5. [Models](#models)
6. [SCSS](#scss)
7. [Services](#services)

## Application Structure

### Components
The components folder contains all the UI-related files divided into different features.

### Configs
- country.config.ts: This file contains configuration details, such as
widgetNumber - specifies the number of country widgets displayed on the homepage.
yearInterval - defines the range of years available for checking country holidays.

### Interceptors
- base-url.interceptor.ts: This interceptor ensures that all outgoing HTTP requests use a base URL

### Models
This folder contains the application's data models, defining the structure of the data objects used in the application.

### SCSS
- Containing SCSS media queries and breakpoints to ensure scalability and maintainability.

### Services
This folder contains services used across the application. Services are typically used to handle business logic and interactions with external APIs.

## Points for Improvement
- Integrate NgRx to manage state and prevent duplicate requests, enhancing performance.
- Implement a loader to display during request processing.
- As functionality expands, consider modularizing the code to maintain organization and scalability.
