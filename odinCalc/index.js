// main function stages and resolves the equations

function main() {
    let x = ''
    let y = ''
    let op = null

    function concatVar(num) {
        if (op == null) {
            x += num
        }
        else {
            y += num
        }

        console.log(x)
    };

    const btns = document.getElementsByClassName('keypad-btn')
    for (var i = 0; i <= 11; i++) {
        btns[i].addEventListener('click', concatVar(btns[i].innerText))
    }


}
main()