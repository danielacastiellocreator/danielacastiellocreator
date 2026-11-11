# Daniela · UGC Creator

Portfolio personale realizzato con React e Vite, configurato per la pubblicazione gratuita su GitHub Pages.

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

- Modifica testi, immagini e progetti in `src/App.jsx`.
- Aggiorna colori, font e layout in `src/index.css` e `src/App.css`.
- Sostituisci `hello@example.com` e il link Instagram con i tuoi contatti.
- Il nome e i testi di esempio sono in italiano; immagini e font vengono caricati da servizi esterni.
