#!/bin/bash

echo "=== Stopping ehint container ==="

docker stop ehint-runtime

docker rm ehint-runtime