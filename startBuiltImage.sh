#!/bin/bash

./stopBuiltImage.sh

docker build -t ehint-built . 

echo "=== Starting ehint from builded image ehint-built ==="

docker run -d -p 81:80 --name ehint-built ehint-built
