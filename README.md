# ⚡ QuickShop SPA

A modern, responsive Single-Page Application (SPA) built with **React JS** and **Tailwind CSS**. The application fetches, displays, and filters product data in real-time from a public API, delivering a seamless and high-performance user experience.

---

## 🚀 Links

* **Live Demo:** https://intern-pied-six.vercel.app/
* **GitHub Repository:** https://github.com/MoohammedAdell/intern

---

## 📖 Project Overview

QuickShop SPA is a responsive product browsing application that allows users to:

* Browse products fetched from a public API.
* Search products instantly in real time.
* Filter products by category.
* Experience smooth loading, error, and empty states.
* Use the application seamlessly across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack & Tools

### Core Technologies

* React JS
* Vite
* JavaScript (ES6+)
* Tailwind CSS

### Libraries

* Lucide React (Icons)

### Data Fetching

* Native Fetch API

### Deployment

* Vercel

---

## 🌐 API Source

Data is fetched from the Fake Store API:

https://fakestoreapi.com/products

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   └── EmptyState.jsx
│
├── hooks/
├── pages/
│   └── Home.jsx
│
├── services/
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📱 Features

### 🔍 Real-Time Search

Users can search products instantly as they type without needing to submit a form.

### 🏷️ Category Filtering

Products can be filtered dynamically by category using a responsive navigation system.

### 📦 Product Cards

Each product is displayed inside a reusable card component showing:

* Product Image
* Product Title
* Product Price
* Product Category

### ⏳ Loading State

A loading spinner is displayed while data is being fetched from the API.

### ❌ Error Handling

Graceful error messages are shown if the API request fails.

### 📭 Empty State

A dedicated empty-state message appears when no products match the current search or filter criteria.

### 📱 Responsive Design

The application is fully responsive and optimized for:

* Mobile Devices
* Tablets
* Desktop Screens

---

## 🧠 Performance Optimizations

To satisfy the advanced requirements of the challenge, the project includes several optimization techniques:

### useMemo for Filtering Logic

The search and category filtering logic is wrapped inside `useMemo` to avoid recalculating filtered results on every render.

### React.memo

Reusable UI components are wrapped with `React.memo` where appropriate to prevent unnecessary re-renders.

### Dynamic Category Extraction

Categories are generated dynamically from API data using JavaScript `Set`, eliminating hardcoded category values and improving scalability.

---

## 🎯 Challenges & Solutions

### Challenge 1: Preventing Unnecessary Re-renders

**Solution:**

Implemented `useMemo` and `React.memo` to optimize rendering performance and reduce redundant calculations.

### Challenge 2: Responsive Category Navigation

**Solution:**

Created a horizontally scrollable category bar to maintain usability on smaller screens without breaking the layout.

### Challenge 3: Managing Multiple UI States

**Solution:**

Separated Loading, Error, and Empty states into dedicated reusable components for cleaner code and improved maintainability.

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/MoohammedAdell/intern.git
```

#### 2. Navigate to the Project Folder

```bash
cd intern
```

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Start Development Server

```bash
npm run dev
```

#### 5. Open in Browser

```text
http://localhost:5173
```

---

## 📌 Git Workflow

The project was developed incrementally using multiple meaningful commits covering:

* Project Setup
* Folder Structure
* Reusable Components
* API Integration
* Search Functionality
* Category Filtering
* Loading & Error States
* Responsive Design
* Performance Optimization

---


## 👨‍💻 Author

**Mohamed Adel**

Frontend Developer passionate about building modern, responsive, and user-friendly web applications using React and modern frontend technologies.
