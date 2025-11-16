# Project Structure and Dependencies

This project is a *single Git repo* consisting of two separately configured projects, each with their own dependencies.

Each directory has a *separate .gitignore file.*

The documentation directory is strictly informational and does not contain a project of its own.

## Frontend

The frontend directory contains an *Expo project* written primarily in React Native for mobile devices.

### Dependencies

#### Production

- React - Custom UI components with props, style, and state
- React Native - React for mobile devices

## Backend

The backend directory contains a *Node.js project* written primarily in JavaScript.

### Dependencies

#### Production

- dotenv - Environment variables accessible in code
- Express - Routing and HTTP request handling
- bcrypt - Password hashing
- pg - PostgreSQL database interface

#### Development

- cross-env - Command line environment variables across OS platforms
- Jest - JavaScript testing

---

[Back to README](../README.md)
