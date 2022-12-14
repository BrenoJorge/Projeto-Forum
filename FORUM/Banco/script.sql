drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuario(
    id_usuario integer not null primary key auto_increment,
    nome varchar(30) not null,
    username varchar(20) DEFAULT 'Sem Username',
    img mediumblob,
    email varchar(100) not null,
    senha varchar(100) not null,
    role enum("0","1") not null
);

CREATE TABLE categoria(
    id_categoria integer not null PRIMARY KEY auto_increment,
    categoria varchar(100) not null
);

CREATE TABLE sub_categoria(
    id_subc integer not null PRIMARY KEY auto_increment,
    sub_categoria varchar(100) not null
);

CREATE TABLE publicacao(
    id_pub integer not null primary key auto_increment,
    id_usuario integer not null,
    data varchar(10) not null,
    conteudo varchar(400) not null,
    id_categoria integer not null,
    id_subc integer not null,
    curtida integer not null,
    foreign key (id_categoria) references categoria(id_categoria) on delete cascade,
    foreign key (id_usuario) references usuario(id_usuario) on delete cascade,
    foreign key (id_subc) references sub_categoria(id_subc) on delete cascade
);

CREATE TABLE comentario(
    id_com integer not null PRIMARY KEY auto_increment,
    id_usuario_comentario integer not null,
    id_pub integer not null,
    comentario varchar(100) not null,
    curtida integer not null,
    foreign key (id_usuario_comentario) references usuario(id_usuario) on delete cascade,
    foreign key (id_pub) references publicacao(id_pub) on delete cascade
);

CREATE TABLE resposta_comentario(
    id_resp integer not null PRIMARY KEY auto_increment,
    id_usuario_resposta_comentario integer not null,
    id_com integer not null,
    resp_comentario varchar(100) not null,
    curtida integer not null,
    foreign key (id_usuario_resposta_comentario) references usuario(id_usuario) on delete cascade,
    foreign key (id_com) references comentario(id_com) on delete cascade
);

insert INTO usuario VALUES (default, "breninho", "bb012", default, "brenenene12@gmail.com", "1234", "1");
insert INTO usuario VALUES (default, "rodolfo", default, default, "rororororo@gmail.com", "1234", "0");
insert INTO categoria VALUES (default, "Filme");
insert INTO categoria VALUES (default, "Serie");
insert INTO sub_categoria VALUES (default, "Com??dia");
insert INTO sub_categoria VALUES (default, "Terror");
insert into publicacao VALUES(default, 1, "20/10/2020", "uma boosta esse filme o chamado da freira", 1, 2, 100);
insert into comentario VALUES(default, 2, 1, "voce esta totalmente certinho", 23);
insert into resposta_comentario VALUES(default, 1, 1, "valeu bro", 23);

create view IF NOT EXISTS vw_publicacao as 
select u.id_usuario, u.username, ca.categoria , cs.sub_categoria, p.id_pub, p.data, p.conteudo, p.curtida, co.id_usuario_comentario, co.comentario , res.id_usuario_resposta_comentario, res.resp_comentario
from publicacao p
INNER JOIN usuario u on u.id_usuario = p.id_usuario
INNER JOIN categoria ca on ca.id_categoria = p.id_categoria
INNER JOIN sub_categoria cs on cs.id_subc = p.id_subc
LEFT JOIN comentario co on co.id_pub = p.id_pub
LEFT JOIN resposta_comentario res on res.id_com = co.id_com;