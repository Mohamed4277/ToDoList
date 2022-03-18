## Introduction

Projet to do list qui permet de gérer une liste de taches et enregistrer ces taches dans une base de donnée Mysql

## Modules necessaires

installer :
    - nodemon (globalement), 
    - express, 
    - mysql, 
    - et cors

## Créer une base de données sous Mysql

CREATE TABLE todolist (
     id int NOT NULL AUTO_INCREMENT,
     name VARCHAR(250),
     description VARCHAR(250),
     status INT,
     PRIMARY KEY (id)
);

## Utilisation

npm install
nodemon app.js

L'application "todoList" apparraitra à l'url localhost:3000/

Pour l'application React, il faudra utiliser localhost:3000/react.html

## lancer le test cypress

nodemon app.js puis npx cypress open