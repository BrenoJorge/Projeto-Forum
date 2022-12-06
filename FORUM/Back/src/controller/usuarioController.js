const Item = require('../model/UsuarioModel');
const con = require('../DAO/Dao');

const createUser = (req, res) => {
    con.query(Item.toCreateUsuario(req.body), (err, result) => {
        if (err == null)
            res.status(201).json({"message" : "cadastrado com sucesso"}).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readUser = (req, res) => {
    con.query(Item.toReadAll(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.status(201).json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const deleteUser = (req, res) => {
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


const updateUser = (req, res) => {
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
    createUser,
    readUser,
    deleteUser,
    updateUser
}