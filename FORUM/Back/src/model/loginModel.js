const toRead = (dados) => {
    return `select * from usuario where email = '${dados.email}' and senha = '${dados.senha}'; `;
}

module.exports = {
    toRead
}