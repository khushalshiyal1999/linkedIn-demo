# LinkedIn Clone Demo

A modern, responsive LinkedIn clone application built with **Next.js 14**, **React 18**, and **Material UI (MUI) v5**. This project demonstrates a production-grade frontend architecture, implementing features like responsive layouts, sidebar navigation, and a feed interface.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Directory)
- **Library:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Material UI (MUI) v5](https://mui.com/), [Emotion](https://emotion.sh/)
- **Linting:** ESLint

## ✨ Features

- **Responsive Layout:** Adaptive design that adjusts seamlessly for desktop, tablet, and mobile views using MUI's Grid system.
- **Modern UI/UX:** Clean, professional interface mimicking the LinkedIn platform.
- **Sidebar Navigation:** Context-aware sidebars (Left and Right) that toggle visibility based on screen size.
- **Component Architecture:** Modular and reusable components (`MainLayout`, `LeftSidebar`, `RightSidebar`, `Feed`).
- **Production Optimization:** Configured for optimal performance with Next.js built-in optimizations.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Version 18.17 or later (Recommended: v20 LTS)
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khushalshiyal1999/linkedIn-demo.git
   cd linkedIn-demo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## 📂 Project Structure

```
linkedIn-demo/
├── app/                  # Next.js App Directory (Routes & Pages)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable UI Components
│   ├── layout/           # Layout components (MainLayout, etc.)
│   ├── sidebar/          # Sidebar components (LeftSidebar, RightSidebar)
│   └── feed/             # Feed related components
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```
