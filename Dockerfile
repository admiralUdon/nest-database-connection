FROM node:18.18.2-slim

# Install Oracle Client
RUN mkdir -p /opt/oracle
WORKDIR /opt/oracle
RUN apt update && apt install curl zip \
        libaio1 libnsl-dev -y
RUN curl -o /opt/oracle/instantclient-basic-linux.x64-19.20.0.0.0dbru.zip \
        https://download.oracle.com/otn_software/linux/instantclient/1920000/instantclient-basic-linux.x64-19.20.0.0.0dbru.zip
RUN cd /opt/oracle \
  && unzip instantclient-basic-linux.x64-19.20.0.0.0dbru.zip
RUN sh -c "echo /opt/oracle/instantclient_19_20 > /etc/ld.so.conf.d/oracle-instantclient.conf" \
  && ldconfig
RUN export LD_LIBRARY_PATH=/opt/oracle/instantclient_19_20:$LD_LIBRARY_PATH

# Install Nest App
WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]