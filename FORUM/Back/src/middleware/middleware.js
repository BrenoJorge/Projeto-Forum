var jwt = require('jsonwebtoken');
require('dotenv').config()

const validaAcesso = (req, res, next) => {

    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err == null){
            if(data.nome != null){
                req.body["id_usuario"] = data.id_usuario
                console.log(req.body)
                next()
            } else {
                res.status(401).json({"msg" : "deu errado camarada"}).end()
            }
        }  else if(err.name == "TokenExpiredError"){
            res.status(401).json({"msg" : "Demorouu demais amigao, codiguin expirou"}).end()
        }   
    })

}

module.exports = {validaAcesso}