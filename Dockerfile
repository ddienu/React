# Primer paso..En este caso se puede usar la misma imagen que se usó para el backend
FROM node:20-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
# Se genera la carpeta dist con los archivos compilados
RUN npm run build

# Segundo paso: Configuración del nginx
FROM nginx:alpine
# Copio la carpeta compilada en el archivo de configuración de nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Le exponemos el puerto
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]