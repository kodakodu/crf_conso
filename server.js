const express = require('express');

const app = express();

app.get('/api/personnes', (req,res) => {
    const personnes = [
        {id: 1, firstName: 'Pierre', lastName: 'Lafond'},
        {id: 2, firstName: 'Yann', lastName: 'Underwood'},
        {id: 3, firstName: 'Marie-laure', lastName: 'Arnaud'}
    ];
    res.json(personnes);
});

app.get('/api/conso', (req,res) => {
    const conso = [
        {id: 1, nom: 'Compresses 10x10', description: 'bla bla'},
        {id: 2, nom: 'Poche de glasse', description: 'bla bla'},
        {id: 3, nom: 'Pansement 5x5', description: 'bla bla'}
    ];
    res.json(conso);
});

app.get('/api/postes', (req,res) => {
    const postes = [
        {id: 1, nom: 'Fete de la ville de yerres', date: '23/08/2018', description: 'bla bla'},
        {id: 2, nom: 'Guinguettes Yerres', date: '26/08/2018', description: 'bla bla'},
        {id: 3, nom: 'Championnat football brunoy', date: '19/08/2018', description: 'bla bla'}
    ];
    res.json(postes);
});

app.get('/api/poste_conso', (req,res) => {
    const poste_conso = [
        {id: 1, poste_id: 1, conso_id: 1, quantite: 3},
        {id: 2, poste_id: 1, conso_id: 2, quantite: 1},
        {id: 3, poste_id: 1, conso_id: 3, quantite: 2}
    ];
    res.json(poste_conso);
});


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));