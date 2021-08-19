function toAlternatingCase(string) {
    return string
        .split('')
        .map((item) => item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())
        .join('');
};

result = toAlternatingCase('hey');
console.log(result);