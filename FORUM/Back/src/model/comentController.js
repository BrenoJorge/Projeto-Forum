const toCreateComentario = (model) => {
    return `insert into comentario VALUES(default, ${model.id_usuario}, ${model.id_pub}, "${model.comentario}", ${model.curtida});`;
}

const toReadAll = () => {
    return `SELECT * FROM comentario`;
}

const del = (id) => {
    return `DELETE FROM comentario WHERE id_com = ${id}`;
}

const update = (model, id) => {
    return `UPDATE comentario SET comentario = '${model.comentario}' WHERE id_com = ${model.id_com} and id_usuario = ${id}`
}

module.exports = {
    toCreateComentario,
    toReadAll,
    del,
    update
}