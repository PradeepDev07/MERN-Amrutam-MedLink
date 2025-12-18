# Amrutam-MedLink

Amrutam-MedLink is a comprehensive healthcare platform designed to bridge the gap between patients and doctors. It allows users to easily find doctors, book appointments, and manage their health profiles, while providing doctors with a platform to showcase their expertise and manage their practice.

## 🚀 Main Features

*   **Find Doctors:** Search for doctors by specialization, location, and availability.
*   **Book Appointments:** Seamlessly book appointments with your preferred doctors.
*   **User Profiles:** Manage your personal information and health history.
*   **Doctor Profiles:** View detailed profiles of doctors, including their experience, qualifications, and reviews.
*   **Authentication:** Secure Login and Signup functionality for users.
*   **Responsive Design:** Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

*   **Frontend:** React (Vite), React Router, CSS Modules
*   **Backend:** Node.js, Express (Simple JSON-based storage)
*   **Data Storage:** JSON file (`users.json`)

## 📦 Installation and Running

To run this project, you need to start both the backend server and the frontend application.

### Prerequisites

*   Node.js installed on your machine.

### 1. Backend Setup (Simple Server)

The backend is a simple Node.js server that handles user authentication and data storage using a JSON file.

1.  Navigate to the server directory:
    ```bash
    cd back-end/server
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the server:
    ```bash
    npm start
    ```
    The server will start running at `http://localhost:4000`.

### 2. Frontend Setup

1.  Open a new terminal and navigate to the frontend directory:
    ```bash
    cd front-end
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🔑 Dummy Login Data

You can use the following credentials to log in and test the application:

| Role | Username | Password | Email |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin` | `admin123` | `admin@example.com` |
| **User** | `rahul` | `12345` | `rahul@gmail.com` |
| **User** | `pradeepdev` | `12345` | `pradeep01273@gmail.com` |

## 📂 Project Structure

*   **`front-end/`**: Contains the React application.
    *   `src/pages/`: Individual pages like Home, Login, FindDoctors, etc.
    *   `src/components/`: Reusable UI components.
    *   `src/context/`: React Context for state management.
*   **`back-end/`**: Contains the server-side code.
    *   `server/index.js`: Main server file.
    *   `server/src/storage/users.json`: JSON file storing user data.

## 📝 Notes

*   The backend uses a simple `users.json` file to persist user data. This is for demonstration purposes and easy setup.
*   Ensure the backend server is running on port `4000` for the frontend to communicate correctly.
