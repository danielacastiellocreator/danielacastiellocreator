# Daniela · UGC Creator

Portfolio personale realizzato con React e Vite, con sezioni separate per video e immagini, filtri per Beauty, Tech, Design e Lifestyle, switch italiano/inglese e pricing su richiesta. Configurato per la pubblicazione gratuita su GitHub Pages.

## Avvio in locale

Richiede Node.js 20 o superiore.

```bash
npm install
npm run dev
```

Per verificare la versione pronta per la pubblicazione:

```bash
npm run build
npm run preview
```

## Pubblicazione gratuita su GitHub Pages

1. Crea su GitHub un repository **pubblico** per il portfolio (ad esempio `daniela-ugc-portfolio`).
2. Collega questa cartella al repository e pubblica il branch `main`:

   ```bash
   git remote add origin https://github.com/TUO-UTENTE/daniela-ugc-portfolio.git
   git add .
   git commit -m "Create UGC creator portfolio"
   git push -u origin main
   ```

3. Nel repository GitHub apri **Settings → Pages** e scegli **GitHub Actions** come fonte.
4. Attendi il completamento del workflow **Deploy portfolio to GitHub Pages** nella scheda **Actions**. L’indirizzo del sito apparirà nei dettagli del deployment.

Il workflow compila e pubblica automaticamente il sito a ogni push su `main`. Vite imposta il percorso del repository durante la build per caricare correttamente gli asset su Pages.

## Personalizzazione

- Modifica testi in italiano e inglese, categorie, progetti e pacchetti in `src/App.jsx`.
- Aggiorna colori, font e layout in `src/index.css` e `src/App.css`.
- Aggiorna i collegamenti a Instagram e TikTok con i link ai tuoi profili personali.
- Le immagini e i testi dei progetti sono anteprime dimostrative: sostituiscili con i tuoi video, copertine e case study prima della pubblicazione.
- Immagini e font vengono caricati da servizi esterni.
