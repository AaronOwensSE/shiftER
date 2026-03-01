# Architecture Specification

## Model

This project will utilize a classic *layered architectural model* with frontend, backend, and database layers. The backend and database layers will be accounted for by the broader backend API, which will be written in JavaScript to utilize the Node.js runtime and a PostgreSQL DBMS. Although the initial frontend will be written in React Native for mobile devices, the project will support the possibility of additional frontend options, such as a website.

## Communication

Communication between layers will take place over HTTPS.

## System Diagram

![High-level architectural diagram](system-diagram.jpeg)

## Additional Architecture

For more detailed diagrams, such as ER diagrams, database schemas, site maps, and component diagrams, please visit the corresponding sub-project repos linked from the README page. Layer-specific architecture is documented in those repos.

---

[Back to README](../README.md)
