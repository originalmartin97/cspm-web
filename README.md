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

# Start dev server in extended mode for browser/remote reachability
npm run start:ext

# Build for production
npm run build
```

## VS Code Browser Pane

`npm` can start the dev server, but it cannot open VS Code's integrated browser pane by itself.

Use this flow instead:

1. Run `npm run start:ext`.
2. In VS Code, open the Command Palette.
3. Run `Simple Browser: Show`.
4. Enter `http://localhost:5173/`.

`npm run start:ext:open` still exists, but it opens the system browser, not the VS Code browser pane.

---

## 📁 Project Structure

```
cspm-web/
├── _archive/                   # 📦 Archived assets & builds (gitignored)
│   ├── builds/                 # Previous production builds
│   └── src/                    # Archived source files (images, content)
│
├── guides/                     # 📖 Developer documentation
├── logs/                       # 📝 Development logs & updates
│
├── public/                     # Static public assets
│   └── documents/              # PDF documents served to users
│
└── src/
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
    │   ├── _unused/                # Deprecated/unused components
    │   └── features/               # Feature-specific components
    │       ├── actualities/        # News carousel
    │       ├── services/           # Services section
    │       ├── colleagues/         # Team members section
    │       ├── achievements/       # Achievements carousel
    │       └── documents/          # Documents section & PDF viewer
    │
    ├── data/                       # Static data definitions
    │   ├── actualities.js          # News/announcements data
    │   ├── services.js             # Services offered
    │   ├── achievements.js         # Awards and achievements
    │   ├── documents.js            # PDF documents metadata
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

## 📦 Archive

The `_archive/` directory at the project root is used to store:
- **Previous builds** (`_archive/builds/`) - Old production builds for reference
- **Archived source files** (`_archive/src/`) - Unused images, content, or assets that may be needed later

This directory is **gitignored** to keep the repository clean while preserving assets locally.

---

## 🌿 Branching & Deployment Pipeline

The project follows a three-branch pipeline:

```
dev-test  →  main  →  prod
```

| Branch     | Purpose |
|------------|---------|
| `dev-test` | Active development and testing |
| `main`     | Interval/staging point; merges from `dev-test` before production |
| `prod`     | Live production branch; receives the built output from `main` |

### Why `build/` is committed

Unlike a typical setup where build artifacts are gitignored, **this repository intentionally commits the `build/` directory**. The `prod` branch is updated directly from the built output generated in `main`, so the build artifacts must be part of version control to flow through the pipeline.

- Run `npm run build` after finalizing changes on `main`.
- Commit the updated `build/` directory as part of the release.
- Merge `main` → `prod` to deploy.

---

## 📖 Documentation

- **Developer Guides:** See `/guides/` directory
- **Development Logs:** See `/logs/dev/` directory

---

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server (replaces Create React App)
- **Vitest** - Unit testing
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
