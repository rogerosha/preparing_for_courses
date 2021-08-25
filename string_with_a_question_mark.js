function questionMark(string) {
    return string[string.length - 1] === '?' ? string : string + '?';
};

result = questionMark('yes?');
console.log(result);