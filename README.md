# 🏥 Patient Data Management

Here you can find a first version of a React-based SPA (Single Page Application) designed to manage patient records. 
It fetches patient data from a remote API and displays it in individual cards. Users can add or edit patient information through modals; however, these changes are not persisted to the backend.

## 🛠 Technologies Used

- React – For building user interfaces and managing component state.

- Vite – A fast development build tool that provides a modern frontend workflow.

- Tailwind CSS – A utility-first CSS framework for rapid UI development.

- JavaScript (ES6+) – For application logic and component development.

## 📁 Project Structure

This project follows a modular structure, organizing code into specific directories for clarity and maintainability:

- components : Reusable UI components (e.g., PatientCard, PatientForm)

- services : API interaction logic

- hooks: Custom hooks for state handling

- styles : Global styles including Tailwind CSS directives

- utils : Utility functions (e.g., date formatting)

- App.jsx : Root component and main state lifting

- main.jsx : Entry point of the React app

## ▶️ Getting Started

Prerequisites
Ensure you have the following installed:

- Node.js (version 16 or higher)
- npm (version 7 or higher)

Installation: 
- Clone the repository:
- git clone https://github.com/chiaracx/patient-data-management.git
- cd patient-data-management

Install dependencies:
- npm install

Start the development server:
- npm run dev

Access the application:
- Open your browser and navigate to the local host entry point.


## 📌 Some quick notes to consider

Data Persistence: Currently, any additions or edits to patient data are handled on the frontend and are not persisted to the backend API.

API Configuration: The API endpoint is defined in the services/patientService.js file. Ensure that the API is accessible.

Styling: Besides custom styles added, Tailwind CSS is used for styling components.
