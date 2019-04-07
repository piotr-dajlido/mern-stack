#!/usr/bin/env bash

CLIENT_MODULES=client/node_modules
if [[ ! -d ${CLIENT_MODULES} ]]; then
  ( cd client && npm install )
fi

SERVER_MODULES=server/node_modules
if [[ ! -d ${SERVER_MODULES} ]]; then
  ( cd server && npm install )
fi


cd client
npm run build

cd ../server
rm -R public/*
cp -R ../client/build/. public/
cd ../server
npm run start

