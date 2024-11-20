function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

function main() {
    while (true) {
        const choice = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit");

        if (choice === '5') {
            console.log("Exiting the calculator.");
            break;
        }

        if (['1', '2', '3', '4'].includes(choice)) {
            const num1 = parseFloat(prompt("Enter first number:"));
            const num2 = parseFloat(prompt("Enter second number:"));

            let result;
            switch (choice) {
                case '1':
                    result = add(num1, num2);
                    break;
                case '2':
                    result = subtract(num1, num2);
                    break;
                case '3':
                    result = multiply(num1, num2);
                    break;
                case '4':
                    result = divide(num1, num2);
                    break;
            }
            console.log(`The result is: ${result}`);
        } else {
            console.log("Invalid input. Please enter a valid choice.");
        }
    }
}

main();