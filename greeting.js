function greeting(name) {
    if (name === 'Johnny') {
        return 'Hello, my dear';
    } else {
        return 'Hello ' + name;
    };
};

greet = greeting('Johnny');
console.log(greet);
