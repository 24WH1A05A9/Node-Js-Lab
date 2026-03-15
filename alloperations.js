<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        input { margin: 10px; padding: 5px; }
        button { margin: 5px; padding: 10px 20px; }
    </style>
</head>
<body>
    <h1>Simple Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <br>
    <button onclick="calculate('add')">Add</button>
    <button onclick="calculate('subtract')">Subtract</button>
    <button onclick="calculate('multiply')">Multiply</button>
    <button onclick="calculate('divide')">Divide</button>
    <br>
    <p id="result"></p>

    <script>
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let result;
            if (isNaN(num1) || isNaN(num2)) {
                result = 'Please enter valid numbers';
            } else {
                switch (operation) {
                    case 'add':
                        result = num1 + num2;
                        break;
                    case 'subtract':
                        result = num1 - num2;
                        break;
                    case 'multiply':
                        result = num1 * num2;
                        break;
                    case 'divide':
                        if (num2 === 0) {
                            result = 'Cannot divide by zero';
                        } else {
                            result = num1 / num2;
                        }
                        break;
                }
            }
            document.getElementById('result').innerText = 'Result: ' + result;
        }
    </script>
</body>
</html>
