#!/bin/bash

echo "=== Stopping ehint image ==="

docker stop ehint

echo "=== Removing ehint image ==="

docker rm ehint
