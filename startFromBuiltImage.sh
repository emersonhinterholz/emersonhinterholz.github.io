#!/bin/bash

./stop.sh

echo "=== Starting ehint from builded image ehint-built ==="

docker run -d -p 80:80 --name ehint-built ehint-built
