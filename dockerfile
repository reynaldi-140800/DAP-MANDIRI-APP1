FROM nginx: alpine
WORKDIR /usr/share/nginx/html
WORKDIR /etc/nginx/conf.dist
COPY ./nginx/default.conf .
COPY /dist/dap-mandiri-app1 /user/share/nginx/html
EXPOSE 80

# PENGGUNAAN DOCKER TAPI KARENA BELOM INSTALL JADI CUMA MASUKIN TEXT AJA 