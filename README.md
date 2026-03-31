# SHAM

SHAM is a web-based asset manager for game development teams, built with SvelteKit, TypeScript, and Tailwind CSS. It lets teams share, search, preview, and upload game assets such as SFX, 3D models, tilemaps, and textures. The app features a dark-themed UI with image and audio previews, drag-and-drop file uploads, and an asset tagging system. It requires a separate backend API server running at `http://localhost:8000`.

## Features

- **Asset Search** — Browse and filter assets fetched from the backend API
- **Drag-and-Drop Upload** — Upload files with real-time status tracking
- **Media Preview** — In-browser image thumbnails and audio playback with progress controls
- **Asset Tagging** — Key-value tag system for organizing assets
- **Dark Theme** — Modern dark UI with smooth page transitions and hover animations

## Limitations

- No built-in backend — requires a separate API server at `http://localhost:8000`
- Audio preview supports `.ogg` files; image preview supports `.png` files
- No authentication or user management
- No test suite

## Developing

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

To open the app in a browser tab automatically:

```bash
npm run dev -- --open
```

## Building

Install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment, then build:

```bash
npm run build
```

You can preview the built app with `npm run preview` (not for production use).

## Other Commands

```bash
npm run check       # Run svelte-check for type errors
npm run lint        # Run Prettier and ESLint checks
npm run format      # Auto-format code with Prettier
```

## History

Development on SHAM started 2021-11-10, and largely stopped on 2021-12-08:

- 2021-11-10 — Initial SvelteKit project scaffolding with ESLint and Prettier
- 2021-11-13 — Configured Tailwind CSS with a custom violet/dark-gray color palette
- 2021-11-13 — Implemented basic project structure: layout with navigation, Home/Search/Upload pages
- 2021-11-15 — UI polish pass across all pages
- 2021-11-19 — Added TypeScript support
- 2021-11-20 — Added drag-and-drop file upload with status tracking
- 2021-11-21 — Implemented audio thumbnail preview with playback controls and progress bar
- 2021-12-08 — Enhanced asset row hover effects and button visibility
