# React Projects

A collection of React projects built while learning and practicing React concepts.

---

## 📁 Projects

| Project | Folder | Run Command |
|---------|--------|-------------|
| Calculator | `calculator-version-1` | `npm run dev:calculator` |
| Todo App V1 | `todo-app-version-1` | `npm run dev:todo-v1` |
| Todo App V2 | `todo-app-version-2` | `npm run dev:todo-v2` |
| Bharat Clock | `bharat-clock` | `npm run dev:clock` |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/nihalmohammad705-debug/react-projects.git
cd react-projects

# Install dependencies (once for all projects)
npm install

# Run any project
npm run dev:calculator
npm run dev:todo-v1
```

# Technologies Used
React 18

Vite

CSS

React Hooks (useState, useEffect)

📁 Project Structure
```bash
react-projects/
├── calculator-version-1/          # Calculator app
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── todo-app-version-1/            # Todo app (coming soon)
├── package.json                   # Root: manages all projects
├── package-lock.json
├── .gitignore
└── README.md
```

### Adding a New Project
- Create a new folder: mkdir project-name

- Create package.json with:

```bash
{
  "name": "project-name",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- Create vite.config.js:
```bahs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- Create index.html and src/ folder with React files

- Add script to root package.json:

```bash
"dev:project-name": "npm run dev -w project-name"
Run: npm run dev:project-name
```

### What I Learned

- Building React components

- Managing state with useState

- Side effects with useEffect

- Handling events in React

- Conditional rendering

- Lifting state up

- CSS Modules

- Vite build tool

- Workspaces for multiple projects

### 🤝 Acknowledgments
#### This project was developed as part of my learning journey through:
- React/Redux Course by Prashant Sir

### 👤 Author
- G Nihal

- GitHub: @nihalmohammad705-debug

### 📄 License
- MIT License - see LICENSE file for details.

