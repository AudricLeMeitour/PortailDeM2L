const { Client } = require('pg');
const Adherent = require('../metier/Adherent');


class adherentDAO{


    constructor(){
        this._client = new Client({
            connectionString : 'postgres://groupe3:groupe3@192.168.222.86:5432/M2L'
        });

        this._client.connect(function (err) {
            if (err) return done(err);
        });
    }

    getListAdherents(cb){
        const query = {
            name: 'get-all-adherents',
            text: 'SELECT idadherent,username,password FROM adherent ;'
        };

        this._client.query(query, function (err,result) {
            let lesAdherents = [];
            if (err) {
                console.log(err.stack);
            } else {
                result.rows.forEach(function (row) {
                    let unAdherent;
                    unAdherent = new Adherent(row['idadherent'], row['username'], row['password']);
                    lesAdherents.push(unAdherent);
                    console.log(lesAdherents);
                });
                cb(lesAdherents);
            }
        });
    };

    setNewAdherent(nom, prenom, adresse, e_mail, telephone, username, password){
        const query = {
            name: 'add-new-adherent',
            text: "INSERT INTO adherent VALUES (12,'"+nom+"','"+prenom+"','"+adresse+"','"+e_mail+"','"+telephone+"','"+username+"','"+password+"');"
        };

        this._client.query(query, function (err) {
            if (err) {
                console.log(err.stack);
            }
        });
    };
}

module.exports = adherentDAO;