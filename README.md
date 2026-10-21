# Vishal Patil — Portfolio Website

Modern, responsive portfolio built with **React**, **React Router**, and **Tailwind CSS**.

## Pages

| Route | Page |
|-------|------|
| `/` | Profile (Hero + Summary + Skills) |
| `/experience` | Internship Experience |
| `/projects` | Personal / Academic Projects |
| `/education` | Education |
| `/certifications` | Certifications & Achievements |

## Tech Stack

- React 18
- React Router v6
- Tailwind CSS 3
- Lucide React (icons)
- Vite

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy

You can deploy the `dist` folder to **Netlify**, **Vercel**, or **GitHub Pages**.

### Netlify
```bash
npm run build
# Drag & drop the dist folder, or connect the repo
```

### Vercel
```bash
npx vercel
```

## Customize

- Update personal links in `src/components/Footer.jsx` and `src/pages/Profile.jsx`
- Edit project data in `src/pages/Projects.jsx` and `src/pages/Experience.jsx`
- Change accent color in `tailwind.config.js` (`colors.accent`)
