#!/bin/bash

./stop.sh

echo "=== Starting ehint from builded image ehint/nginx ==="

docker run -d -p 80:80 --name ehint ehint/nginx
