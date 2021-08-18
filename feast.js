function feast(beast, dish) {
    const firstLetterOfBeast = beast[0];
    const lastLetterOfBeast = beast[beast.length-1];
    const firstLetterOfDish = dish[0];
    const lastLetterOfDish = dish[dish.length-1];
    if (firstLetterOfBeast == firstLetterOfDish && lastLetterOfBeast == lastLetterOfDish) {
        return true;
    } else {
        return false;
    }
}

check = feast('your beast', 'your dish');
console.log(check);