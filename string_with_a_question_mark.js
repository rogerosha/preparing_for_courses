function questionMark(string) {
    let array = string.split('');
    return array[string.length-1] === '?' ? string : string + '?';
};

result = questionMark('yes');
console.log(result);