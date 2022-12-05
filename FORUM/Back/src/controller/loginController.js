const Item = require('../model/loginModel');
const con = require('../DAO/Dao');
const Token = require('../utils/token')

const Enter = (req, res) => {
    con.query(Item.toRead(req.body), async (err, result) => {
        if (err == null) {
            if (result.length > 0) {
                res.status(201).json(await Token.gerarToken(result)).end();
            } else {
                res.status(201).json({"mensagem" : "Usuario ou senha erradas"}).end();
            }
        } else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

module.exports = {
    Enter
}