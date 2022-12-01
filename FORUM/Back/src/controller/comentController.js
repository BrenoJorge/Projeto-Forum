const Item = require('../model/comentController');
const con = require('../DAO/Dao');

const createComent = (req, res) => {
    con.query(Item.toCreateComentario(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readComent = (req, res) => {
    con.query(Item.toReadAll(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const deleteComent = (req, res) => {
    con.query(Item.del(req.params.id), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


const updateComent = (req, res) => {
    con.query(Item.update(req.body, req.params.id), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}


module.exports = {
    createComent,
    readComent,
    deleteComent,
    updateComent
}