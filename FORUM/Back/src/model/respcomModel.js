const toCreateRespComent = (model) => {
    return `insert into resposta_comentario VALUES(default, ${model.id_usuario}, ${model.id_com}, "${model.comentario}", ${model.curtida});`;
}

const toReadAll = () => {
    return `SELECT * FROM resposta_comentario`;
}

const del = (id) => {
    return `DELETE FROM resposta_comentario WHERE id_resp = ${id}`;
}

const update = (model, id) => {
    return `UPDATE resposta_comentario SET comentario = '${model.comentario}' WHERE id_resp = ${model.id_resp} and id_usuario = ${id}`
}

module.exports = {
    toCreateRespComent,
    toReadAll,
    del,
    update
}