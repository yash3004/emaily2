# Express.js Email Promotion App

This Express.js app is designed to send promotional emails using Google OAuth for authentication, MongoDB for data storage, and a React front-end.

## Features

- **Google OAuth**: Authenticate users via Google OAuth to access the email promotion functionalities.
- **MongoDB Integration**: Store user data, email campaigns, and other relevant information in a MongoDB database.
- **React Front-end**: Utilize React for a dynamic and user-friendly front-end to interact with the email promotion system.

## Prerequisites

Before running the application, ensure you have the following:

- Node.js installed
- MongoDB set up and running
- Google OAuth credentials (client ID and client secret)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/express-email-promotion.git
    cd express-email-promotion
    ```

2. Install dependencies for the Express backend:
    ```bash
    cd backend
    npm install
    ```

3. Install dependencies for the React front-end:
    ```bash
    cd ../frontend
    npm install
    ```

## Configuration

1. Obtain Google OAuth credentials (client ID and client secret) from the Google Developer Console.

2. Set up environment variables:
    - Create a `.env` file in the `backend` directory and add the following:
        ```
        GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
        GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
        MONGODB_URI=YOUR_MONGODB_URI
        ```

## Running the Application

1. Start the Express.js server (from the `backend` directory):
    ```bash
    npm start
    ```

2. Start the React front-end (from the `frontend` directory):
    ```bash
    npm start
    ```

The application will run with the Express server on one port and the React app on another. Access the app through the browser.

## Usage

- Navigate to the provided URL in your browser to access the React front-end.
- Users can authenticate via Google OAuth, create and manage email campaigns, and send promotional emails.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for improvements, bug fixes, or additional features.

## License

This project is licensed under the [MIT License](LICENSE).
