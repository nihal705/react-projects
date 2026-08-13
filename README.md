# React Projects

A collection of React projects built while learning and practicing React concepts.

---

## 📁 Projects

| Project | Folder | Run Command |
|---------|--------|-------------|
| Calculator-v1 | `calculator-version-1` | `npm run dev:calculator-v1` |
| Calculator-v2 | `calculator-version-2` | `npm run dev:calculator-v2` |
| Healthy Food List | `healthy-food-list` | `npm run dev:healthy-food-list` |
| Todo App V1 | `todo-app-version-1` | `npm run dev:todo-v1` |
| Todo App V2 | `todo-app-version-2` | `npm run dev:todo-v2` |
| Bharat Clock | `bharat-clock` | `npm run dev:bharat-clock` |
| Todo App V3 | `todo-app-version-3` | `npm run dev:todo-v3` |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/nihalmohammad705-debug/react-projects.git
cd react-projects

# Install dependencies (once for each project)
npm install
npm install @vitejs/plugin-react --save-dev
npm install vite --save-dev
npm install react react-dom
npm i bootstrap@5.3.8 --install-latest-version
npm install react-icons --save


# Run any project
npm run dev:calculator-v1
npm run dev:todo-v1
npm run dev:todo-v2
npm run dev:bharat-clock
npm run dev:todo-v3
```

**Technologies Used**
   - React 18
   - Vite
   - CSS
   - React Hooks (useState, useEffect)

📁 Project Structure
```bash
react-projects/
├── calculator-version-1/          # Calculator app only UI
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── calculator-version-2/          # Calculator app with functionality
├── bharat-clock/                  # Bharat Clock
├── healthy-food-list/             # Healthy Food List 
├── todo-app-version-1/            # Todo app version-1
├── todo-app-version-2/            # Todo app version-2
├── todo-app-version-3/            # Todo app version-3
├── package.json                   # Root: manages all projects
├── package-lock.json
├── .gitignore
└── README.md
```

### Adding a New Project
1. Create a new folder: mkdir project-name

2. Create package.json with:
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

3. Create vite.config.js:
```bahs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

4. Create index.html and src/ folder with React files

5. Add script to root package.json:
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

- React
- Bootstrap
- Google Fonts

### 👤 Author
- G Nihal

- GitHub: https://github.com/nihalmohammad705-debug

### 📄 License
- MIT License

