function Calculator(){
    this.methods = {
        '-': (a,b) => a - b,
        '+': (a,b) => a + b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
    };

    this.operate = function(num1,op,num2){
        return this.methods[op](num1,num2);
    };

}
var textNum = "";
var text = ""
var num1 = 0;
var num2 = 0;
var operator = "";


const display = document.querySelector('.result');
const equalSign = document.querySelector('#equal');
const clear = document.querySelector('#clear-btn');
var calculator = new Calculator();

const numBtn = document.querySelectorAll('.num');

numBtn.forEach((number) => number.addEventListener('click', (event) =>{
    var num = number.value;
    textNum += `${num}`;
    text += `${num}`;
    display.textContent = text;
}));

const opBtn = document.querySelectorAll('.operator');

opBtn.forEach((op) => op.addEventListener('click', (event) =>{
    var opValue = op.value;
    operator = opValue;
    num1 = +textNum;
    textNum = ''
    text += ` ${opValue} `;
    display.textContent = text;
}));


equalSign.addEventListener('click', (event) => {
    num2 = +textNum;
    var result = calculator.operate(num1, operator , num2);
    display.textContent= `${num1} ${operator} ${num2} = ${result}`;
});

clear.addEventListener('click', () => {
    display.textContent = "";
    textNum = '';
    text = '';
});

