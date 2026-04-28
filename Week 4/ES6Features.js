function greetDeclaration(name) {
    return "Hello, " + name + " (Function Declaration)";
}

const greetExpression = function(name) {
    return "Hello, " + name + " (Function Expression)";
};

const greetArrow = (name) => `Hello, ${name} (Arrow Function)`;

console.log(greetDeclaration("Yuvaan"));
console.log(greetExpression("Abinav"));
console.log(greetArrow("Shivasai"));

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log("Original:", numbers);
console.log("Squared (Arrow):", squared);
