FROM nginx:alpine

# Copiar la app compilada al directorio HTML de nginx
COPY ./dist /usr/share/nginx/html

# Copiar configuración personalizada de NGINX
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copiar certificados SSL
COPY ./certs /etc/nginx/certs

