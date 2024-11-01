# Nika - Blockchain Investment & News platform

This is a blockchain investment & news platform featuring asset investment plans, news blogs & CMS system.

You may checkout the project at https://nika-v2.vercel.app

Server is deployed on render so kindly wait atleast a minute for server to get deployed

## Features

- Blockchain News for users
- CMS system for managing content
- Stores data in MongoDB using Mongoose
- Cloudinary integration for file uploads

## Prerequisites

Before running the project, ensure that you have the following:

- Node.js installed (version 18.X.X or higher)
- MongoDB instance (Atlas or local)
- Cloudinary account for file storage

## Project Structure

The project is organized into two main folders:

- **Client**: Contains the React.js front-end application that interacts with the server.
- **Server**: Contains the Express.js back-end application that handles API requests, user authentication, and database management.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kjsingh03/nika.git
```

### 2. Navigate to Project Directory

```bash
cd nika
```

### 3. Client Setup

Navigate to the `client` folder and install dependencies:

```bash
cd client
npm install
```

### 4. Server Setup

Navigate to the `server` folder and install dependencies:

```bash
cd ../server
npm install
```

### 5. Environment Variables

Create a `.env` file in both `client` and `server` directories with the following environment variables:

#### Client `.env`:
```plaintext
VITE_CLOUDINARY_CLOUD_NAME=dser8edfz
VITE_CLOUDINARY_UPLOAD_PRESET=nika_v3
VITE_SERVER_URL=http://localhost:8000
VITE_TINY_API_KEY=rqkjgp2ptjmdx04v1wegbw62xpybu7c7s0urrsarst8xqam8
```

#### Server `.env`:
```plaintext
PORT=8000
MONGODB_URI=mongodb+srv://varshneykv1:KexkwZT6L7mXU3cs@nika.xw8s2.mongodb.net/?retryWrites=true&w=majority&appName=nikan
```

### 6. Run the Project

#### Client
Start the client development server:

```bash
npm run dev
```

#### Server
Start the server:

```bash
npm start
```

The project will be available at `http://localhost:5173` for the client, and the server will run on `http://localhost:8000`.

## License

This project is licensed under the ISC License.

## Author

Karanjot Singh  
k.jsingh.12003@gmail.com  
[GitHub](https://github.com/kjsingh03)
