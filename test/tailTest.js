const assertEqual = require("../assertEqual");
const tail = require("../tail");


// Test Case 1: Check the returned array elements
const array1 = ["Hello", "Lighthouse", "Labs"];
const result1 = tail(array1);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"
assertEqual(array1.length, 3); // check original array

// Test Case 2: Check the returned array elements
const array2 = [5, 6, 7, 8];
const result2 = tail(array2);
assertEqual(result2.length, 3); // ensure we get back two elements
assertEqual(result2[0], 6); // ensure first element is 6
assertEqual(result2[1], 7); // ensure second element is 7
assertEqual(array2.length, 4); // check original array

// Test Case 3: Empty array
const result3 = tail([]);
assertEqual(result3.length, 0);

// Test Case 3: One element in  array
const result4 = tail([90]);
assertEqual(result4.length, 0);