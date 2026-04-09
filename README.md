
# 🛒DigiTools-Platform buying website

A modern React application where users can browse products, add them to a cart, and explore different sections like pricing, steps, and stats.

---

## 🚀 Live Demo

🔗 Live Site: https://digitoolsbuyingwebsite.netlify.app/
🔗 GitHub Repo: https://github.com/mdantormia1779-dev/DigiTools-Platform.git

---

## 🎯 Project Overview

This project is a React-based product store application. It allows users to:

* Browse products
* Add items to cart
* Switch between Products and Cart tabs
* View real-time cart count
* Explore additional UI sections like stats, pricing, and steps

---

## ✨ Features

* 🔹 Product listing from local JSON data
* 🔹 Add to cart functionality
* 🔹 Dynamic tab switching (Products / Cart)
* 🔹 Real-time cart count update
* 🔹 Multiple UI sections (Stats, Pricing, Steps, etc.)
* 🔹 Clean and reusable component structure
* 🔹 Responsive modern UI

---

## 📌 Components Included

* 🧭 Navbar (with cart count)
* 🎯 Banner
* 📊 Stats Section
* 📦 Main Section
* 🛍️ Products (Cards)
* 🛒 Cart
* 🪜 Steps Section
* 💰 Pricing Section
* ⚙️ Optional Section
* 🔚 Footer

---

## 🧠 Core Concepts Used

* React Components
* useState Hook
* Props (data passing)
* Conditional Rendering
* Async Data Fetching (fetch API)
* Dynamic UI update

---

## 📂 Project Structure

```id="0r5nkm"
src/
│── Components/
│   ├── Navbar/
│   ├── Banner/
│   ├── Stats/
│   ├── Main/
│   ├── Cards/
│   ├── Cart/
│   ├── Steps/
│   ├── Pricing/
│   ├── Optional/
│   ├── Footer/
│
│── App.jsx
│── index.css
│── data.json
```

---

## ⚙️ How It Works

* Data is fetched from `data.json`
* Stored as a Promise (`promiseData`)
* Passed to `Cards` component
* Users can add products to `cart`
* Tab switches between:

  * Products view
  * Cart view

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6)
* Tailwind CSS / DaisyUI
* Fetch API

---

## 🧑‍💻 How to Use

### 1️⃣ Clone the Repository

```bash id="t1n8vx"
git clone https://github.com/mdantormia1779-dev/DigiTools-Platform.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash id="v4k2qp"
npm install
```

### 3️⃣ Run the Project

```bash id="j8m3ls"
npm run dev
```

### 4️⃣ Open in Browser

```id="z6p1wr"
http://localhost:5173
```

---

## 📖 How to Use the App

### 🛍️ Products Tab

* Shows all available products
* Click to add product to cart

### 🛒 Cart Tab

* Shows selected products
* Displays total item count
* Can remove items (if implemented)

### 📊 Other Sections

* Stats → Shows analytics/info
* Steps → How system works
* Pricing → Plans or offers
* Optional → Extra features

---

## 🔄 Data Source

```id="c9k2az"
/public/data.json
```

---

## ⚠️ Important Notes

* Make sure `data.json` is inside **public folder**
* Cart state is managed using `useState`
* Tab state controls which section is visible

---

## 🧪 Example Flow

1. Open app
2. Go to Products tab
3. Add products to cart
4. Switch to Cart tab
5. View selected items
6. Explore other sections

---

## 👨‍💻 Author

**Md Antor Mia**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
