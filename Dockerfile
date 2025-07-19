FROM nginx
COPY ./src /usr/share/nginx/html
COPY ./conf /etc/nginx/conf.d
EXPOSE 80