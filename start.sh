#!/bin/bash

./stop.sh

echo "=== Startando ehint a partir do nginx e volumes ==="

docker run -d -p 80:80 -v $(pwd)/html:/usr/share/nginx/html/ehint:ro -v /$(pwd)/conf:/etc/nginx/conf.d:ro --name ehint nginx
