# cspm-web

**CsPM - Családod Pénzügyi Mentora** (Your Family's Financial Mentor)

A React-based website for a Hungarian financial advisory service.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── logo/               # Brand logos and favicons
│   │   ├── achievements/       # Achievement/award images
│   │   ├── actualities/        # Images for news/actuality cards
│   │   ├── misc/               # Other images (backgrounds, icons)
│   │   └── _private/           # 🔒 Personal data (gitignored)
│   └── content/
│       └── actualities/        # Markdown content for actuality cards
│
├── components/
│   ├── common/                 # Reusable UI components (Button, Typography, etc.)
│   ├── layout/                 # Page structure (Appbar, Screen, Footer)
│   ├── navigation/             # Navigation components
│   └── features/               # Feature-specific components
│       ├── actualities/        # News carousel
│       ├── services/           # Services section
│       ├── colleagues/         # Team members section
│       └── achievements/       # Achievements section
│
├── data/                       # Static data definitions
│   ├── actualities.js          # News/announcements data
│   ├── services.js             # Services offered
│   ├── achievements.js         # Awards and achievements
│   └── _private/               # 🔒 Personal data (gitignored)
│
├── hooks/                      # Custom React hooks
│   └── useScrollNavigation.js  # Smooth scroll navigation
│
└── theme/                      # Design system
    └── colors.js               # Centralized brand colors
```

---

## 🔒 Sensitive Data

Personal information (colleague names, photos, bios) is stored in `_private/` folders which are **gitignored**.

### Setting Up Private Data

1. Copy the template file:
   ```bash
   cp src/data/colleagues.template.js src/data/_private/_private.colleagues.js
   ```

2. Add colleague images to:
   ```
   src/assets/images/_private/colleagues/
   ```

3. Fill in the actual data in the copied file.

**Naming Convention:** Files prefixed with `_private.` are automatically gitignored.

---

## 📖 Documentation

- **Developer Guides:** See `/guides/` directory
- **Development Logs:** See `/logs/dev/` directory

---

## 🛠 Tech Stack

- **React 18** - UI framework
- **Material-UI (MUI) 6** - Component library
- **react-markdown** - Markdown rendering
- **react-slick** - Carousel functionality
- **react-helmet** - SEO management

---

## 📝 Important Notice

This repository is intended for viewing and reference purposes only. Contributions, including pull requests and issue submissions, are **not** accepted.

Feel free to browse and utilize the code or documentation within this repository for your personal learning or reference. However, please note that this repository is not designed for collaborative development.

While forking is technically possible on GitHub, this repository is maintained solely by the owner. Please respect the intent of this repository, which is for viewing only.

---

## 📧 Contact

For any inquiries, please contact originalmartin97+github@gmail.com.

---
+.+
