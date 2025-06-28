# cashstash

[![Build](https://github.com/karandeepbhardwaj/cashstash/actions/workflows/deploy.yml/badge.svg)](https://github.com/karandeepbhardwaj/cashstash/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Private, offline-first budget tracker that syncs to Google Drive. No ads. No tracking.

## Features

- **Offline-first** - works without internet, all data in IndexedDB
- **Google Drive sync** - backup and restore from your Drive
- **Transaction tracking** - income and expenses with categories
- **Budget limits** - monthly limits per category with progress bars
- **Dashboard** - visual breakdown with charts and trends
- **CSV export** - export your data anytime
- **Dark/light mode** - system-aware with manual toggle
- **Installable PWA** - add to home screen
- **Zero ads, zero tracking** - your data stays private

## Tech Stack

- React 19 + TypeScript
- Vite 6 with PWA plugin
- Dexie.js (IndexedDB)
- Recharts
- Google Drive REST API

## Getting Started

```sh
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth 2.0 client ID |

## Privacy

Your financial data never touches a server. All processing happens in your browser. Google Drive sync uses the `appDataFolder` scope — only this app can access its backup.

## License

MIT
