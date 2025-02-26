#!/bin/bash

rm -rf .next

unzip -o .next.zip

pm2 restart 0

pm2 save
