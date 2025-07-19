#!/bin/bash

echo "=== Stopping ehint-built container ==="

docker stop ehint-built

docker rm ehint-built