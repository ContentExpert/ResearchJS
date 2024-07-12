var arr = [1, 2];
arr.forEach(function (){}); // (0)
Array.isArray(arr); // (0) true
arr.isArray(); // (X) TypeError： arr.isArray is not a function
