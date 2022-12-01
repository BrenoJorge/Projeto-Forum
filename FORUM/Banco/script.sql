drop database if exists forum;
create database forum charset=UTF8 collate utf8_general_ci;
use forum;

create table usuario(
    id_usuario integer not null primary key auto_increment,
    nome varchar(30) not null,
    username varchar(20) DEFAULT 'Sem Username',
    img mediumblob,
    email varchar(100) not null,
    senha varchar(100) not null
);

CREATE TABLE categoria(
    id_categoria integer not null PRIMARY KEY auto_increment,
    nome varchar(100) not null
);

CREATE TABLE sub_categoria(
    id_subc integer not null PRIMARY KEY auto_increment,
    nome varchar(100) not null
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
    id_usuario integer not null,
    id_pub integer not null,
    comentario varchar(100) not null,
    curtida integer not null,
    foreign key (id_usuario) references usuario(id_usuario) on delete cascade,
    foreign key (id_pub) references publicacao(id_pub) on delete cascade
);

CREATE TABLE resposta_comentario(
    id_resp integer not null PRIMARY KEY auto_increment,
    id_usuario integer not null,
    id_com integer not null,
    comentario varchar(100) not null,
    curtida integer not null,
    foreign key (id_usuario) references usuario(id_usuario) on delete cascade,
    foreign key (id_com) references comentario(id_com) on delete cascade
);

insert INTO usuario VALUES (default, "breninho", "bb012", default, "brenenene12@gmail.com", "1234");
insert INTO usuario VALUES (default, "rodolfo", default, default, "rororororo@gmail.com", "1234");
insert INTO categoria VALUES (default, "Filme");
insert INTO categoria VALUES (default, "Serie");
insert INTO sub_categoria VALUES (default, "Comédia");
insert INTO sub_categoria VALUES (default, "Terror");
insert into publicacao VALUES(default, 1, "20/10/2020", "uma boosta esse filme o chamado da freira", 1, 2, 100);
insert into comentario VALUES(default, 2, 1, "voce esta totalmente certinho", 23);
insert into resposta_comentario VALUES(default, 1, 1, "valeu bro", 23);
