function toAlternatingCase(string) {
    if (string == string.toUpperCase()) {
        return string.toLowerCase();
    };
    if (string == string.toLowerCase()) {
        return string.toUpperCase();
    };
};

result = toAlternatingCase('hey');
console.log(result);