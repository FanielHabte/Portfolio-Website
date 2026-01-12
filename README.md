# Faniel Habte — Portfolio

A clean, fast, static portfolio site (HTML/CSS/JS) built to showcase:
- **Story** (who you are)
- **Career timeline** (high-level narrative)
- **Skills** (strengths + what you're working on)
- **Personal projects** (what you build + what you learned)

## Quick start

Open `index.html` in a browser, or run a tiny local server:

```bash
# Python
python -m http.server 8000

# Node
npx http-server -p 8000
```

Then visit `http://localhost:8000`.

## Files

```
Professional Portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── Faniel_Habte_Resume.pdf
│   └── Faniel_Habte_Resume.docx
└── photos/
```

## Customize content

### 1) Update text
Edit `index.html` sections:
- `#story` (your background + interests)
- `#timeline` (your career narrative)
- `#skills` (chips)
- `#projects` (personal projects)

### 2) Add project links
In the **Personal projects** cards, update the `href` for `Code` / `Demo` links to point to your repositories.

### 3) Optional photo section
In the Story section, replace the placeholders in the mini-gallery with your own images:

```html
<img src="photos/travel-1.jpg" alt="Travel in ..." />
```

### 4) Replace the CV
Replace the files in `assets/` with your latest CV:
- `Faniel_Habte_Resume.pdf`
- `Faniel_Habte_Resume.docx`

## Deploy

### GitHub Pages
- Push the folder to a repo
- Settings → Pages → select branch and root

### Netlify / Vercel
- Drag-and-drop the folder (Netlify) or connect the repo (Vercel)

---

Built with plain HTML/CSS/JS for simplicity.
