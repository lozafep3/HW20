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
    .on('focus', '[name = input-x]', selectInput)
    .on('focus', '[name = input-y]', selectInput)
    .on('click', '[name = calculate]', calculate);

function selectInput() {
    if (this.name === 'input-y') {
        selectedInput = '[name = input-y]';
    } else {
        selectedInput = '[name = input-x]';
    }
}

function typeValue() {
    let inputValue = $(selectedInput).val();
    let buttonValue = $(this).val();

    $(selectedInput).val(inputValue + buttonValue);
}

function selectOperator() {
    operator = $(this).val();

    $('[name = operator]').val(operator);
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

    drawResult(result);
}

function drawResult(result) {
    $('[name = output]').val(result);
}