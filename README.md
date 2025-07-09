# SAQAYA E-Commerce 🛍️

A modern e-commerce web application built with Vue 3 and Pinia. Users can browse products, view details, and manage their cart in a seamless and responsive UI.

## 🔗 Live Demo

[https://saqaya-store.vercel.app/](https://saqaya-store.vercel.app/)

## 🛠 Tech Stack

- Vue 3
- Pinia (state management) – migrated from Vuex
- Composition API – migrated from Options API
- Vue Router
- Vite

> 🛠 This project originally used Vuex and the Options API but has since been migrated to Pinia and the Composition API to follow modern Vue best practices.

## ✨ Features

- View product details
- Add and remove items from cart
- Quantity control in cart sidebar
- Responsive design

## 📁 Project Structure
```bash
src/
├── assets/               # Static assets (e.g., images)
├── components/           # Reusable UI components
├── router/               # Vue Router configuration
├── stores/               # Pinia stores (cartItems, products, selectedProduct)
├── types/                # TypeScript types and interfaces
├── views/                # Page-level components (e.g., HomePage, ProductPage)
├── App.vue               # Root component
└── main.ts               # App initialization and mounting
```
## 🧑‍💻 Getting Started

Clone the project and install dependencies.

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```
