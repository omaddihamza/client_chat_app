# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /client

# Copier les fichiers package.json et package-lock.json
COPY package*.json /client/

# Installer les dépendances
RUN npm install

# Copier le code source dans l'image
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:1.23

# Copier les fichiers de build vers le répertoire de Nginx
COPY --from=build /client/build /usr/share/nginx/html

# Exposer le port 80 pour servir l'application
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
