function smallestInt(arr) {
    const value = arr.reduce((accumulator, currentValue) => {
             return (accumulator < currentValue ? accumulator : currentValue);
        }
    );
     return value;
};

result = smallestInt([1, 2, 3]);
console.log(result);