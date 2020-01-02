FROM wyveo/nginx-php-fpm:latest

WORKDIR /usr/share/nginx/
RUN rm -rf /usr/share/nginx/html
COPY . /usr/share/nginx
RUN chmod -R 775 /usr/share/nginx/storage/*
COPY default.conf /etc/nginx/conf.d/
RUN ln -s public html