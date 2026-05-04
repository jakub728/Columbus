# Product Listing Page - Recruitment Task

A modern, responsive product listing application built with **Next.js**, **TypeScript**, and **pnpm**. This project was created as part of a recruitment process, focusing on clean code, state management, and performance.

## 🚀 Features

- **Asynchronous Data Fetching**: Fetches product data from a secure REST API using custom headers (``).
- **Global State Management**: Implementation of `CartContext` to manage the shopping cart state across the entire application.
- **Persistence**: Cart data is synchronized with `localStorage`, ensuring the state survives page refreshes.
- **Responsive UI**: Hand-crafted styling using **CSS Modules**, strictly following the "no-framework" requirement.
- **Interactive Elements**:
  - Cart badge with real-time updates.
  - Interactive cart dropdown with "Empty Cart" functionality.
  - Outside-click detection for better UX.
  - Toast notifications for user feedback.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **State Management**: React Context API + Hooks (`useContext`, `useEffect`)
- **Styling**: CSS Modules (Pure CSS)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📦 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jakub728/Columbus.git
   cd columbus

   ```

2. **Install dependencies:**

   ```bash
   pnpm install

   ```

3. **Run the development server:**
   Create a `.env.local` file in the root directory and add the API key:
   ```bash
   API_KEY=x-api-key
   ```


4. **Run the development server:**
   ```bash
   pnpm dev
   ```

## 🏗️ Architecture & Decisions

**Data Modeling**
Based on the provided JSON schema, I created robust TypeScript interfaces to ensure type safety during data fetching and component rendering. All product properties (image, title, brand, description, price, discount) are strictly typed.

**State Persistence**
To provide a seamless user experience, the cart's state is stored in localStorage. I used a synchronized useEffect hook within the CartProvider to handle reading and writing data, ensuring no hydration mismatches in Next.js (client-side only execution).

**Styling Strategy**
As per the requirements, I avoided utility-first frameworks like Tailwind or component libraries like Material UI. Instead, I used CSS Modules, which provide local scoping for styles, preventing name collisions and keeping the CSS maintainable.

**Cart Logic**
The cart dropdown supports both hover interactions for desktop users and click toggling for accessibility.
