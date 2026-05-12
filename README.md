# Gondor Chic

Une base React + Vite moderne, élégante et prête pour un premier sprint produit.

## Architecture

- `src/pages/` : pages de navigation principales
- `src/components/` : composants UI réutilisables et layout
- `src/layouts/` : layout applicatif global
- `src/routes/` : configuration React Router
- `src/services/` : configuration Axios et services métier
- `src/styles/` : styles Tailwind CSS et imports globaux

## Installation

```bash
npm install
```

## Commandes disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Environnement

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Bonnes pratiques suivies

- séparation claire pages / composants / layouts / services
- composants UI atomiques et réutilisables
- configuration Tailwind CSS propre et maintenable
- architecture prête pour évoluer vers un projet plus large
- responsive design dès la v1
- configuration API centralisée via `src/services/api.js`

## Structure recommandée

```text
src/
  assets/
  components/
    layout/
      Footer.jsx
      Navbar.jsx
    ui/
      Button.jsx
      SectionTitle.jsx
  layouts/
    MainLayout.jsx
  pages/
    HomePage.jsx
  routes/
    AppRouter.jsx
  services/
    api.js
  styles/
    tailwind.css
  App.jsx
  index.css
  main.jsx
```
