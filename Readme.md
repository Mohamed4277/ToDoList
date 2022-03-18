## Introduction

Projet "To do list" qui permet de gérer une liste de taches et enregistrer ces taches dans une base de donnée Mysql.

## Modules necessaires

    - nodemon (globalement), 
    - express, 
    - mysql, 
    - cypress,
    - et cors

## Créer une base de données sous Mysql

Créer une base de donnée 'todolist' et y mettre la table:

> CREATE TABLE todolist (
>     id int NOT NULL AUTO_INCREMENT,
>     name VARCHAR(250),
>     description VARCHAR(250),
>     status CHAR(50),
>	  date_dead_line DATETIME,
>     PRIMARY KEY (id)
>     );

![alt text](dataBaseMySQL.png)


## Utilisation

npm install
nodemon app.js

L'application "todoList" apparraitra à l'url localhost:3000/

Pour l'application React, il faudra utiliser localhost:3000/react.html

## Lancer le test cypress

lancer nodemon app.js puis ouvrer un autre terminal puis taper: npx cypress open