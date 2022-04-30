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



// let disp = document.querySelector("display");
// let button = Array.from(document.querySelectorAll("button"));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 disp.innerText = '';
//                 break;
//             case '=':
//                 try{
//                     disp.innerText = eval(disp.innerText);
//                 } catch {
//                     disp.innerText = "Error"
//                 }
//                 break;
//             case '←':
//                 if (disp.innerText){
//                    disp.innerText = disp.innerText.slice(0, -1);
//                 }
//                 break;
//             default:
//                 disp.innerText += e.target.innerText;
//         }
//     });
// });
