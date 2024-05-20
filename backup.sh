#!/bin/bash

# Naviguer vers le répertoire du projet
cd ~/Desktop/zoo-arcadia

# Ajouter tous les fichiers modifiés
git add .

# Commiter les modifications avec un message de date et heure
git commit -m "Sauvegarde automatique: $(date)"

# Pousser les modifications vers la branche master
git push origin master

