        const display = document.querySelector('.display');
        let currentInput = '0';
        let operator = '';
        let previousInput = '';

        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                if (value === 'C') {
                    currentInput = '0';
                    operator = '';
                    previousInput = '';
                    display.textContent = currentInput;
                } else if (value === '⌫') {
                    if (currentInput !== '0' && currentInput.length > 1) {
                        currentInput = currentInput.slice(0, -1);
                        display.textContent = currentInput;
                    } else {
                        currentInput = '0';
                        display.textContent = currentInput;
                    }
                } else if (value === '=') {
                    if (operator && previousInput !== '') {
                        try {
                            const expression = `${previousInput}${operator}${currentInput}`;
                            const result = eval(expression.replace('×', '*'));
                            currentInput = result.toString();
                            display.textContent = currentInput;
                            operator = '';
                            previousInput = '';
                        } catch {
                            display.textContent = 'Error';
                            currentInput = '0';
                            operator = '';
                            previousInput = '';
                        }
                    }
                } else if (['+', '-', '×', '/', '(', ')'].includes(value)) {
                    if (currentInput !== '0') {
                        previousInput = currentInput;
                        operator = value;
                        currentInput = '0';
                        display.textContent = operator;
                    }
                } else if (value === '.') {
                    if (!currentInput.includes('.')) {
                        currentInput += value;
                        display.textContent = currentInput;
                    }
                } else {
                    if (currentInput === '0') {
                        currentInput = value;
                    } else {
                        currentInput += value;
                    }
                    display.textContent = currentInput;
                }
            });
        });
