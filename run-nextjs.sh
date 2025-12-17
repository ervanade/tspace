#!/bin/bash

rm -rf .next

unzip -o .next.zip

pm2 delete all

pm2 start npm --name "tspace-deploy" -- run start

pm2 save
