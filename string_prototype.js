function toAlternatingCase(string) {
    return string.split('').map(i => i == i.toUpperCase()? i.toLowerCase(): i.toUpperCase()).join('');
};

result = toAlternatingCase('hey');
console.log(result);