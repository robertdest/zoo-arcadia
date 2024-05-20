const express = require('express');
const app = express();

// Définir une route GET
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre API Express.js !');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur Express.js démarré sur le port ${PORT}`);
});

