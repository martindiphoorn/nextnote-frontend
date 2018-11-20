FROM nginx:alpine
LABEL author="Martin Diphoorn"

COPY  docker-files/nginx.conf /etc/nginx/conf.d/default.conf
COPY  dist/nxt-note/ /usr/share/nginx/html

EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
