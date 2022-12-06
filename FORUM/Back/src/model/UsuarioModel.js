const toCreateUsuario = (model) => {
    return `insert INTO usuario VALUES (default, "${model.nome}", "${model.username}", ${model.img}, "${model.email}", "${model.senha}", "0")`;
}

const toReadAll = () => {
    return `SELECT * FROM usuario`;
}

const del = (id) => {
    return `DELETE FROM usuario WHERE id_usuario = ${id}`;
}

const update = (model, id) => {
    return `UPDATE usuario SET nome = '${model.nome}', username = '${model.username}', img = ${model.img}, email = "${model.email}", senha = "${model.senha}", role = "${model.role}"  WHERE id_usuario = ${id}`
}

module.exports = {
    toCreateUsuario,
    toReadAll,
    del,
    update
}