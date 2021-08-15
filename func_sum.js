let arr = [1, 2, 3];
//put numbers for array here ^

function sumOfArrs(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
value = sumOfArrs(arr);
console.log(value)