# 🩸 Blood Donor Management System

Welcome to the **Blood Donor Management System**! This is a full-stack web application designed to help manage and track blood donors efficiently. It features a robust backend API built with ASP.NET Core and a stunning, responsive frontend built with React & Redux.

---

## ✨ Features

- **✅ Full CRUD Operations**: Create, Read, Update, and Delete donor records seamlessly.
- **🎨 Premium UI/UX**: A beautiful, modern "Glassmorphism" design with a clean light theme, custom CSS variables, and micro-animations.
- **🚀 State Management**: Global state managed effortlessly using **Redux** and **Redux-Thunk**.
- **🔌 Seamless API Integration**: Frontend communicates with the backend via **Axios**.
- **🗄️ Database Integration**: Fully integrated with **SQL Server** using **Entity Framework Core**.
- **📖 API Documentation**: Auto-generated Swagger UI for easy backend testing and visualization.

---

## 🛠️ Technology Stack

### **Frontend**
- ⚛️ **React 19**
- 📦 **Redux & Redux-Thunk** (State management)
- 🌐 **Axios** (HTTP Client)
- 💅 **Vanilla CSS** (Custom Glassmorphism UI)

### **Backend**
- 🖥️ **ASP.NET Core Web API (.NET 10)**
- 🗃️ **Entity Framework Core** (ORM)
- 🐬 **Microsoft SQL Server** (Database)
- 📝 **Swashbuckle / Swagger** (API Documentation)

---

## 📂 Project Structure

```text
📦 Web-Api (Root)
 ┣ 📂 WebApi (Backend)
 ┃ ┣ 📂 Controllers      # API Endpoints
 ┃ ┣ 📂 Models           # Database Models & DbContext
 ┃ ┣ 📜 appsettings.json # DB Connection Strings & Configs
 ┃ ┗ 📜 Program.cs       # App Startup, DI, & CORS config
 ┃
 ┗ 📂 react-app (Frontend)
   ┣ 📂 src
   ┃ ┣ 📂 actions        # Redux Actions & Axios API wrapper
   ┃ ┣ 📂 components     # React Components (DCandidates, DCandidateForm)
   ┃ ┣ 📂 reducers       # Redux Reducers
   ┃ ┣ 📜 App.js         # Main Application wrapper & Provider
   ┃ ┗ 📜 index.css      # Premium UI Styles
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1️⃣ Prerequisites
- [.NET SDK 10.0+](https://dotnet.microsoft.com/download)
- [Node.js & npm](https://nodejs.org/)
- [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### 2️⃣ Backend Setup
1. Open your terminal and navigate to the backend folder:
   ```bash
   cd WebApi
   ```
2. Update the connection string in `appsettings.json` to match your local SQL Server instance name if necessary.
3. Apply database migrations to create the SQL Server database:
   ```bash
   dotnet ef database update
   ```
4. Run the API:
   ```bash
   dotnet run
   ```
> The API will run on `http://localhost:5181`. You can view the Swagger documentation at `http://localhost:5181/swagger`.

### 3️⃣ Frontend Setup
1. Open a **new** terminal window and navigate to the frontend folder:
   ```bash
   cd react-app
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
> The React app will automatically open in your browser at `http://localhost:3000`.

