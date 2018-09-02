const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

var connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "password",
    database: "crf_conso"
})

const PERSONNES_QUERY = "SELECT * FROM utilisateurs";
const POSTES_QUERY = "SELECT * FROM postes ORDER BY date ASC";
const CONSO_QUERY = "SELECT * FROM liste_conso";

connexion.connect(function(err){
    if(err) {
        console.error(err);
        return;    
    }
    console.log("Connected!");
    connexion.query(PERSONNES_QUERY, function (err, res){
        if(err) throw err;
        console.log(res);
    });

    connexion.query(POSTES_QUERY, function (err, res){
        if(err) throw err;
        console.log(res);
    });
});

app.get('/api/personnes', (req,res) => {
            connexion.query(PERSONNES_QUERY, function (err, rows){
                if(err) throw err;
                console.log(rows);
                res.send(rows);
            });
});

app.get('/api/conso', (req,res) => {
    connexion.query(CONSO_QUERY, function (err, rows){
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
});

app.get('/api/postes', (req,res) => {
    connexion.query(POSTES_QUERY, function (err, rows){
        if(err) throw err;
        console.log(rows);
        res.send(rows);
    });
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