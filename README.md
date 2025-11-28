# Blogsy

Welcome to **Blogsy**, a modern, feature-rich blogging platform built with React and Vite. Blogsy empowers users to create, share, and manage engaging content with ease, featuring secure authentication and a rich text editor.

## Key Features

* **User Authentication:** Secure signup, login, and logout functionality powered by **Appwrite**.
* **Create & Manage Posts:** Full CRUD (Create, Read, Update, Delete) capabilities for blog posts. Manage your content status (Active/Inactive) easily.
* **Rich Text Editor:** Integrated **TinyMCE** editor for writing beautiful, formatted content.
* **Image Management:** Upload and preview featured images for your posts using Appwrite Storage.
* **Modern UI/UX:** Styled with **Tailwind CSS** and **DaisyUI**, featuring smooth animations with **GSAP** and interactive elements.

## Tech Stack

**Frontend:**
* **React** (v19) with **Vite**
* **Redux Toolkit** for state management
* **React Router DOM** for navigation
* **React Hook Form** for form handling

**Backend & Services:**
* **Appwrite** (Auth, Database, Storage)

**Styling & Animation:**
* **Tailwind CSS** & **DaisyUI**
* **GSAP** (GreenSock Animation Platform)

## Getting Started

Follow these steps to set up Blogsy locally.

### Prerequisites
* Node.js (Latest LTS recommended)
* An Appwrite account and project

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/blogsy.git](https://github.com/yourusername/blogsy.git)
    cd blogsy
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and add your Appwrite credentials. Use the following keys based on the project configuration:

    ```env
    VITE_APPWRITE_URL=<Your Appwrite Endpoint>
    VITE_APPWRITE_PROJECT_ID=<Your Project ID>
    VITE_APPWRITE_DATABASE_ID=<Your Database ID>
    VITE_APPWRITE_COLLECTION_ID=<Your Collection ID>
    VITE_APPWRITE_BUCKET_ID=<Your Bucket ID>
    VITE_APPWRITE_API_KEY0=<Your Appwrite API Key>
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will typically start at `http://localhost:5173`.
