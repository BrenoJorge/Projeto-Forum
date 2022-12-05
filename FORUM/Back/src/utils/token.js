var jwt = require('jsonwebtoken');
require('dotenv').config()

const gerarToken = async ( dado ) =>{
    dado = {
        ...dado[0]
    };
    dado["token"] = await jwt.sign(dado, process.env.KEY, { expiresIn: 30})
    dado = {
        "username" : dado.username,
        "img" : dado.img,
        "token" : dado.token
    }
    return dado


}

module.exports = { gerarToken }