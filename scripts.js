let screen = document.getElementById('screen');
buttons = document.querySelectorAll('.btn');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try
            {
            var ans= eval(screenValue);
            screen.value=ans;
            }
            catch(e){
                screen.value="invalid";
            }

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

