let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let values = '';
for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Clicked number is: ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            values += buttonText;
            screen.value = values;
        }
        else if (buttonText == 'C') {
            values = "";
            screen.value = values;
        }
        else if (buttonText == '=') {
            screen.value = eval(values);
        }
        else {
            values += buttonText;
            screen.value = values;
        }

    })
}

