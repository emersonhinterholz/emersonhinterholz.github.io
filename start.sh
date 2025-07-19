#!/bin/bash

./stop.sh

docker run -d -p 80:80 -v $(pwd)/src:/usr/share/nginx/html:ro -v /$(pwd)/conf:/etc/nginx/conf.d:ro --name ehint-runtime nginx
