# is-object-literal [![](https://img.shields.io/npm/v/is-object-literal.svg?colorA=cb3837&colorB=474a50)](https://www.npmjs.com/package/is-object-literal)

Validates a given value is a literal Object.

## Table of Contents

- [Installation](#installation)
- [API](#api)

## Installation

Install the package:
```sh
npm i is-object-literal
```

## API

### ES6

```js
import isObjectLiteral from 'is-object-literal';

const object = {};
const nullValue = null;
const somethingElse = 1;

console.log(isObjectLiteral(object)); // true
console.log(isObjectLiteral(nullValue)); // false
console.log(isObjectLiteral(somethingElse)); // false
```

### ES5

```js
const isObjectLiteral = require('is-object-literal');

const object = {};
const nullValue = null;
const somethingElse = 1;

console.log(isObjectLiteral(object)); // true
console.log(isObjectLiteral(nullValue)); // false
console.log(isObjectLiteral(somethingElse)); // false
```
