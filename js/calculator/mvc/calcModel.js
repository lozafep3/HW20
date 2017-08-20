let calcModel = (function () {
    let selectedInput = '[name = input-x]';
    let operator = '+';
    let result = 0;

    $('.calculator')
        .on('click', '[name = 0]', typeValue)
        .on('click', '[name = 1]', typeValue)
        .on('click', '[name = 2]', typeValue)
        .on('click', '[name = 3]', typeValue)
        .on('click', '[name = 4]', typeValue)
        .on('click', '[name = 5]', typeValue)
        .on('click', '[name = 6]', typeValue)
        .on('click', '[name = 7]', typeValue)
        .on('click', '[name = 8]', typeValue)
        .on('click', '[name = 9]', typeValue)
        .on('click', '[name = addition]', selectOperator)
        .on('click', '[name = subtraction]', selectOperator)
        .on('click', '[name = multiplication]', selectOperator)
        .on('click', '[name = division]', selectOperator)
        .on('click', '[name = clean]', clean)
        .on('focus', '[name = input-x]', selectInput)
        .on('focus', '[name = input-y]', selectInput);

    function selectInput() {
        if (this.name === 'input-y') {
            selectedInput = '[name = input-y]';
        } else {
            selectedInput = '[name = input-x]';
        }
    }

    function switchInput() {
        if (selectedInput === '[name = input-y]') {
            selectedInput = '[name = input-x]'
        } else {
            selectedInput = '[name = input-y]';
        }
    }

    function typeValue() {
        let inputValue = $(selectedInput).val();
        let buttonValue = $(this).val();

        if (inputValue === '0') {
            inputValue = '';
        }

        $(selectedInput).val(inputValue + buttonValue);
    }

    function selectOperator() {
        operator = $(this).val();

        $('[name = operator]').val(operator);

        switchInput();
    }

    function clean() {
        $('[name = input-x]').val('0');
        $('[name = input-y]').val('0');
        $('[name = output]').val('0');
        $('[name = operator]').val('+');
        selectedInput = '[name = input-x]';
    }

    function calculate() {
        let x = parseFloat($('[name = input-x]').val());
        let y = parseFloat($('[name = input-y]').val());

        switch(operator) {
            case '+': result = x + y;
                break;
            case '-': result = x - y;
                break;
            case '×': result = x * y;
                break;
            case '÷': result = x / y;
                break;
        }

        if (isNaN(result) === true) {
            result = 'Type a valid number!';
        }

        return result;
    }

    return {
        calculate: calculate
    }
})();