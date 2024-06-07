# Utiliser une image de base Node.js
FROM node:18

# Créer et passer au répertoire de l'application
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Nuxt pour la production
RUN npm run build

# Exposer le port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "start"]
