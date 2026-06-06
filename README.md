# Portfolio — Nivedhitha A

Personal portfolio website built with Next.js and Tailwind CSS. Ready for Vercel deployment.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this `portfolio` folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Set **Root Directory** to `portfolio` (if the repo root is the parent folder).
5. Framework Preset: **Next.js** (auto-detected).
6. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
cd portfolio
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

## Customize

- Update contact links in `src/data/resume.ts` (email, LinkedIn).
- All resume content is centralized in that file.

## Build

```bash
npm run build
npm start
```
