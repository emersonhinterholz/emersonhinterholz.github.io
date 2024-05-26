#!/bin/bash

echo "=== Stopping ehint container ==="

docker stop ehint

echo "=== Removing ehint image ==="

docker image rm ehint/nginx
