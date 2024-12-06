
AdvanceAuth is a modern authentication system built using Node.js, Express, and MongoDB. It provides secure and reliable user authentication, email verification, and password management features for your applications.

Project Overview
Name: AdvanceAuth
Version: 1.0.0
Description: A complete authentication system.
Author: Mike
License: ISC
Features
Secure user authentication using JSON Web Tokens (JWT).
Password hashing with bcrypt for enhanced security.
Cookie-based session management with cookie-parser.
Email-based verification and notifications using Mailtrap.
Environment variable management with dotenv.
MongoDB integration via Mongoose for data storage.
Hot-reloading during development using nodemon.
Prerequisites
Before running this project, ensure you have the following installed:

Node.js: Version 14 or higher.
MongoDB: A local or cloud-based MongoDB instance.
Mailtrap Account: For email testing and verification.

Installation

Clone the repository:
bash
Copy code
git clone https://github.com/atulshivaan/Advance-auth

Navigate to the project directory:
bash
Copy code
cd advanceauth

Install dependencies:
bash
Copy code
npm install

Environment Variables
Create a .env file in the root directory and configure the following variables:

plaintext
Copy code
PORT=3030
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
MAILTRAP_USERNAME=<Your Mailtrap Username>
MAILTRAP_PASSWORD=<Your Mailtrap Password>
Usage

Development Server
To start the development server with hot-reloading:

bash
Copy code
npm run dev
The server will run at http://localhost:3030.

Endpoints
Authentication Routes
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in with user credentials.
POST /api/auth/verify-email: Verify email with a code.
POST /api/auth/forgot-password: Request password reset link.
POST /api/auth/reset-password: Reset password with a token.

Dependencies
Package	Version	Description
bcrypt	^5.1.1	Password hashing library
bcryptjs	^2.4.3	JavaScript implementation of bcrypt
cookie-parser	^1.4.7	Middleware for handling cookies
crypto	^1.0.1	Node.js module for cryptographic operations
dotenv	^16.4.7	Environment variable management
express	^4.21.2	Web application framework for Node.js
jsonwebtoken	^9.0.2	Library to generate and verify JSON Web Tokens
mailtrap	^3.4.0	API client for Mailtrap email testing
mongoose	^8.8.4	MongoDB object modeling tool
Development Dependencies
Package	Version	Description
nodemon	^3.1.7	Development tool for hot-reloading
Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

License
This project is licensed under the ISC License. See the LICENSE file for details.

Author
Mike
If you have any questions or feedback, please reach out!
