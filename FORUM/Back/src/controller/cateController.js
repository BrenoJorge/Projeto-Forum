const Item = require('../model/categoriaModal');
const con = require('../DAO/Dao');

const readCategoria = (req, res) => {
    con.query(Item.toReadCategoria(), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const readSubCategoria = (req, res) => {
    con.query(Item.toReadSubCategoria(), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readSubCategoria,
    readCategoria
}