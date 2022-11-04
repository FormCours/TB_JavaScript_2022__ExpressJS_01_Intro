// Chargement des fichiers d'env
require('dotenv-flow').config();

// Importation d'express
const express = require('express');

// Récuperation des variables d'env
const { NODE_ENV, PORT } = process.env;
console.log(process.env);

// ↓ Alternative pour la récuperation des variables d'env
// const NODE_ENV = process.env.NODE_ENV;
// const PORT = process.env.PORT;
 
// Création du server
const app = express();

// Ajout de routes 'GET'
app.get('/', (req, res) => {
    res.send('<h1>Hello TechnoBel</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Page de contact</h1>');
});

// Ajout d'une route 404
app.all('*', (req, res) => {
    res.status(404).send('<h1>Vous êtes perdu (⊙_⊙)？ </h1>');
})

// Demarrage du server
app.listen(PORT, () => {
    console.log(`Server up on port ${PORT} [${NODE_ENV}]`);
});