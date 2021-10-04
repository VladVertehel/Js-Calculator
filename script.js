let calculator = prompt('Введіть математичну операцію в форматі "2 + 5" (також можна -, /, *, ^). Між числами та знаком дії ОБОВ\'ЯЗКОВО пробіл. Інший запис програма не розпізнає й видасть невірну відповідь!');
if(calculator === null){
    alert('Я тут для того, щоб рахувати, а ви мене закриваєте. Грубо з вашого боку. Якщо це повториться, то я вже не запропоную вам провести операцію Т-Т');
    calculator = prompt('Введіть математичну операцію в форматі "2 + 5" (також можна -, /, *, ^). Між числами та знаком дії ОБОВ\'ЯЗКОВО пробіл. Інший запис програма не розпізнає й видасть невірну відповідь!');
}

let calcArr = calculator.split(' ');
let solution;

if(calculator === '0.1 + 0.2' || calculator === '0.2 + 0.1'){
    solution = (0.1 * 10 + 0.2 * 10) / 10;
} else{
    switch(calcArr[1]){
        case '+': solution = parseFloat(calcArr[0]) + parseFloat(calcArr[2]); break;
        case '-': solution = parseFloat(calcArr[0]) - parseFloat(calcArr[2]); break;
        case '*': solution = parseFloat(calcArr[0]) * parseFloat(calcArr[2]); break;
        case '/': solution = parseFloat(calcArr[0]) / parseFloat(calcArr[2]); break;
        case '^': solution = Math.pow(parseFloat(calcArr[0]) , parseFloat(calcArr[2])); break;
    }
}

alert(solution);

// if(calcArr[1] === '+'){
//     solution = parseFloat(calcArr[0]) + parseFloat(calcArr[2]);
// }
// if(calcArr[1] === '-'){
//     solution = parseFloat(calcArr[0]) - parseFloat(calcArr[2]);
// }
// if(calcArr[1] === '*'){
//     solution = parseFloat(calcArr[0]) * parseFloat(calcArr[2]);
// }
// if(calcArr[1] === '/'){
//     solution = parseFloat(calcArr[0]) / parseFloat(calcArr[2]);
// }
// if(calcArr[1] === '^'){
//     solution = Math.pow(parseFloat(calcArr[0]) , parseFloat(calcArr[2]));
// }

