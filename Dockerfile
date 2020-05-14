FROM nginx
COPY ./html /usr/share/nginx/html/ehint
COPY ./conf /etc/nginx/conf.d
EXPOSE 80