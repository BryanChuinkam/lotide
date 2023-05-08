# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bryancn/lotide`

**Require it:**

`const _ = require('@bryancn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element from the array.
* `tail(array)`: returns every element except the head (first element) of the array.
* `middle(array)`: returns an array with only the middle element(s) of the provided array.
* `assertArraysEqual(array1, array2)`: console.logs if two arrays are equal or not.
* `assertEqual(actual, expected)`: Compares two primitve values and console.logs if actual is '===' expected.
* `eqArrays(array1, array2)`:compares two arrays and returns true if they are equal else. returns false.
* `takeUntil(array, callback)`: takes an array and a callback function. Parses through array until the callback function returns a 'truthy' value. Function returns a slice of the array with elements taken from the beginning up to (but not including) value that returned truthy in callback.
* `without(sourceArray, itemsToRemove)`:takes in a source array and an itemsToRemove array. Returns a new array with only those elements from source that are not present in the itemsToRemove array.
* `findKey(obj, callback)`: Takes in an object and a callback function. Returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined
* `findKeyByValue(obj, value)`: Takes in an object and a value. Returns the first key which contains the given value ELSE If no key with that given value is found, then  returns undefined.
* `letterPositions(string)`: Returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Takes an array and a callback function. Returns new array with callback function applied to each element from original array.
* `eqObjects(obj1, obj2)`: Takes in two objects and returns true if they are equal and false otherwise.
* `assertObjectsEqual(actual, expected)`: Compare two objects and console.logs if actual is '===' expected.
* `countLetters(string)`: Takes in a string and then returns a count of each of the letters in that string.
* `countOnly(allItems, itemsToCount)`: Takes in a collection of items (allItems) and return counts for a specific subset (itemsToCount) of those items. 
