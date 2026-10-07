# 713 Bar — Online Menu

Mobile-friendly online menu for a real bar I run in Tandil, Argentina. Simple on purpose: the owner can update prices and items by editing a single JSON file, with no backend.

**Live site:** https://713bar.netlify.app/

## What it does

- Menu organized by category and subcategory (beers by size, food, etc.).
- Ratings displayed as stars.
- Happy hour badge that is switched on and off from the data file.
- Spanish UI, responsive layout.

## How it works

All content lives in `src/menu.json` and is typed in `src/types`. Components (`Menu`, `Subcategories`, `Stars`, `HappyHourBadge`, `Banner`) only render that data, so changing the menu never requires touching the UI code.

## Stack

React 19, TypeScript, Vite, deployed on Netlify.

## Run it locally

```bash
npm install
npm run dev
```