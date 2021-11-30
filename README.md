# Lotide

A mini cloe of the [Lodash](https://lodash.com) libray.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @erica-j/lotide`

**Require it:**

`const _ = require('@erica-j/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: return first element of the array
* `tail(array)`: return array removed first element
* `middle(array)`: return array contains middle element(s)