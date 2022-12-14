const Item = require('../model/respcomModel.js');
const con = require('../DAO/Dao');

const createRespComent = (req, res) => {
    con.query(Item.toCreateRespComent(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readRespComent = (req, res) => {
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

const deleteRespComent = (req, res) => {
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


const updateRespComent = (req, res) => {
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
    createRespComent,
    readRespComent,
    deleteRespComent,
    updateRespComent
}