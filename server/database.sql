CREATE DATABASE garage;

CREATE TABLE
    commentaire(
        commentaire_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    );

CREATE TABLE
    voiture(
        voiture_id SERIAL PRIMARY KEY,
        modele VARCHAR(255),
        annee VARCHAR(255),
        kilometrage VARCHAR(255),
        prix VARCHAR(255),
        img VARCHAR(999)
    );

CREATE TABLE
    connexion(
        user_id SERIAL PRIMARY KEY,
        role VARCHAR(255),
        nom VARCHAR(255),
        prenom VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
    );