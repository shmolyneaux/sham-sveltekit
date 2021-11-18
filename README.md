# SHAM
SHAM is an asset manager for games. It allows group to share, preview, and download assets like SFX, 3D Models, Tilemaps, Textures, and more. It allows teams to organize and version assets across projects. It also allows individual to catalog their asset purchases including tracking any licencing terms.

## Developing

After installing dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
