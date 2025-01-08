# Vault - eCommerce Platform

## About
Vault is a modern eCommerce platform built with **Node.js** + **Express** for the backend and **React** + **Next.js** for the frontend. It aims to provide an easy-to-use and responsive platform for users to browse and purchase products. This project is designed for scalability, maintainability, and performance.

- **Backend**: Built using Node.js and Express to handle API requests, authentication, and database operations.
- **Frontend**: Built using React and Next.js, offering a rich, dynamic user experience for browsing products, searching, and making purchases.
  
## Features
- Product browsing
- Search and filter functionalities

## Tech Stack
- **Frontend**: React, Next.js
- **Backend**: Node.js, Express
- **Database**: MongoDB (or any other as per your configuration, a mockup json file is also provided inside the server/utils directory)

---

## Frontend Setup (Next.js)

### 1. Clone the repository
To get started with the frontend, first clone the repository:

```bash
git clone https://github.com/sayanbose-100/Vault.git
cd Vault
```

### 2. Navigate to the client directory and install the necessary dependencies
```bash
cd client
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The client will be started on http://localhost:3000

## Backend Setup (NodeJS)

### 1. Navigate to the server directory
```bash
cd vault/server
```

### 2. Install the required dependencies
```bash
npm install
```

### 3. Create a .env file within the server directory
```bash
touch .env
```
The .env file will contain the following:
- Database URI
- PORT number

### 4. Run the server file
```bash
npm start
```
