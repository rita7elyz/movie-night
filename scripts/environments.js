const fs = require('fs');
const resolev = require('path')

const environment = {
production: true,
title: 'new production'
API_KEY: process.env['API_KEY'],
};

const file = resolve(__dirname, '..', 'src', 'enviroments', 'environment.prod.ts');

const text = `export const environment = ${JSON.stringify(environment)};`

fs.writeFileSync(file, text)
