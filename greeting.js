function greeting(name) {
    return name === 'Johnny' ? 'Hello, dear' : 'Hello, ' + name;
};

greet = greeting('Your name');
console.log(greet);
