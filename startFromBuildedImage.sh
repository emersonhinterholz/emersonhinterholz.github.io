#!/bin/bash

./stop.sh

echo "=== Starting ehint from builded image ehint/ehint-nginx:latest ==="

docker run -d -p 80:80 --name ehint ehint/ehint-nginx:latest
