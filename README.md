# 🛍️ Stylique - Fashion E-commerce Website

**Stylique** is a dynamic, responsive, and stylish e-commerce web application built with **React**, **React Router**, **Tailwind CSS**, and **Context API**. It offers a seamless shopping experience with real-time cart and wishlist functionality, product details, and a clean modern UI.

🎯 **Live Demo**: [Click Here to Visit the Site](https://styliquee.netlify.app/)

---

## 🚀 Features

- 🏠 Dynamic Hero Section
- 🛒 Add to Cart & Wishlist
- 🧾 Product Details Page
- 💾 Persistent Cart & Wishlist (LocalStorage)
- 🔍 Clean and Responsive UI
- ⚙️ Pagination for Product Listings
- 🧭 React Router-based Navigation
- ❤️ Wishlist with toggle support
- 💨 Smooth scroll to top on route change

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API
- **API**: [Fake Store API](https://fakestoreapi.com/)
- **Icons**: React Icons
- **Tooling**: Vite

---

## 📁 Project Structure

```plaintext
stylique/
├── public/
├── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── assets/
│   ├── Components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductPage.jsx
│   │   ├── Shop.jsx
│   │   └── Wishlist.jsx
│   ├── utils/
│   │   ├── ProductLoader.js
│   │   └── shopLoader.js
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

```

---

## 🧪 Getting Started

Follow these steps to set up the project locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/stylique.git
cd stylique
 ```

### 2. Install dependencies
``` bash
npm install
```
### 3. Run the development server
``` bash
npm run dev
```
---

## 🔧 Available Scripts
## Script	Description
- npm run dev	Start the development server
- npm run build	Build the app for production
- npm run preview	Preview the production build locally

---

## 🔍 Folder Breakdown
- api/axiosInstance.js – Axios setup for API communication

- assets/ - All pictures

- components/ – Reusable UI components (Navbar, Footer, ProductCard, etc.)

- context/ – React Context API for Cart and Wishlist

- pages/ – All main route components (Home, Shop, Product Page, etc.)

- utils/ – Product and shop loader utility functions

---

## 🤝 Contributing
- Contributions are welcome and appreciated!
- Fork the repository
- Create a new branch (git checkout -b feature-name)
- Make your changes
- Commit your changes (git commit -m "Add some feature")
- Push to the branch (git push origin feature-name)
- Open a pull request

---

## 📄 License
This project is licensed under the MIT License.


