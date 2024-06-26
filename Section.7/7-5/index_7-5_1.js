function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5)); // 1750