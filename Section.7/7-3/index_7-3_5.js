function sum(a, b) {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); // 3