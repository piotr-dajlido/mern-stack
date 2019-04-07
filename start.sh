#!/usr/bin/env bash

cd client
npm run build

cd ../server
rm -R public/*
cp -R ../client/build/. public/
cd ../server
npm run start

