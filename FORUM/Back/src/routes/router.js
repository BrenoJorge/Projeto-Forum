const express = require('express');
const router = express.Router();

const User = require("../controller/usuarioController");
const Publi = require("../controller/publiController");
const Coment = require("../controller/comentController")
const RespComent = require("../controller/respcomController")

router.post("/user",User.createUser);
router.put("/user/:id",User.updateUser);
router.get("/user",User.readUser);
router.delete("/user/:id",User.deleteUser);

router.post("/publi",Publi.createPubli);
router.put("/publi/:id",Publi.updatePubli);
router.get("/publi",Publi.readPubli);
router.delete("/publi/:id",Publi.deletePubli);

router.post("/coment",Coment.createComent);
router.put("/coment/:id",Coment.updateComent);
router.get("/coment",Coment.readComent);
router.delete("/coment/:id",Coment.deleteComent);

router.post("/respcoment",RespComent.createRespComent);
router.put("/respcoment/:id",RespComent.updateRespComent);
router.get("/respcoment",RespComent.readRespComent);
router.delete("/respcoment/:id",RespComent.deleteRespComent);

router.get("/publicacoes", Publi.readVwPubli)

module.exports = router;