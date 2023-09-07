# Mon vieux Grimoire

Le site "Mon Vieux Grimoire" offre aux lecteurs la possibilité de créer des livres, de les noter et de consulter les livres existants ainsi que leurs notes.

# Prérequis d'installation

1- NodeJs version 18
2- Npm version 9
3- Installer nodemon en globale avec la commande npm install -g nodemon

# Procédure d'installation

Pour pouvoir installer le backend du projet 7, il faut suivre les instructions suivantes :

1- Dans la racine du projet, taper la commande "npm install" dans le terminal.

2- Crée un dossier "images" à la racine du backend.

3- Crée un fichier et le nommer en ".env".

4- Dans le fichier .env, crée deux variables :

a) nommer une variable en "URL_Mongodb" pour lui donner comme valeur l'url de connexion à la base de donnée mongodb.

b) nomer une deuxieme variable en "JWT_SECRET" pour lui donner comme valeur une chaine de caractere alphanumerique representant la signature du token.

5- Lancer le backend avec la commande "nodemon server"

🚀 Fonctionnalités

🔐 Inscription / Connexion : Les utilisateurs peuvent s'inscrire et se connecter.
🏠 Accueil : Présentation de tous les livres ajoutés par les utilisateurs.
📘 Page Livre : Affiche toutes les informations sur un livre, y compris la possibilité de le noter.
✏️ Création de Livre : Les utilisateurs peuvent ajouter de nouveaux livres à la plateforme.
💡 Technologies utilisées

1- Backend : Node.js, Express, MongoDB.

2- Authentification : Sécurisée avec token JWT.

3- Hachage du password: Sécurisée avec bcrypt.

4- 🖼️ Gestion d'images : Utilisation de Multer pour le téléchargement et l'optimisation des images. Et sharp

🔒 Sécurité

• 🔐 Hachage du mot de passe utilisateur.

• Authentification renforcée sur toutes les routes nécessaires.

