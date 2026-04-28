function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

const testNumber = 29;

if (isPrime(testNumber)) {
    console.log(`${testNumber} is a Prime Number.`);
} else {
    console.log(`${testNumber} is not a Prime Number.`);
}
