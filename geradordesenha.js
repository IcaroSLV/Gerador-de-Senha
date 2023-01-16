const range = document.getElementById('number-char')
const value = document.getElementById('number');
const res = document.getElementById("res")
const modalOption = document.getElementById("modal-noOption")
const copied = document.getElementById("copied")
range.addEventListener('input', function() {
    value.textContent = this.value;
  });


function pegarValores()  {
    let ListInput = document.getElementsByName("Check")
    let ListInputChecked = []

    for(var i = 0; i < ListInput.length; i++) {
        if (ListInput[i].checked) {
            ListInputChecked.push(listchar[i])
        }
    }

   
    const FinalListInput = ListInputChecked.reduce((list, sub) => list.concat(sub), [])

    function PegarNumero() {
        return parseInt(value.textContent)
    }

    let FinalPassword = ''
    let MaxPassword = PegarNumero()

    if (FinalListInput.length > 0) {
        for (var l = 0; l < MaxPassword; l++) {
            FinalPassword += FinalListInput[Math.floor(Math.random() * FinalListInput.length)]
        }
    } else {
        modalOption.style.opacity = '1'
        modalOption.style.zIndex = '999'
    }

    return FinalPassword
}

function disableModalOption() {
    modalOption.style.opacity = '0'
    modalOption.style.zIndex = '-1'
}


const listchar = [

    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

    ['!', '@', '#', '$', '%', '&', '*']
] 
function gerarSenha() {
    res.style.color = 'rgb(59, 165, 93)'
    res.innerText = `${pegarValores()}`
    copied.style.opacity = '0'
    
}

function CopiarSenha() {

    if (res.textContent === 'A SENHA APARECE AQUI') {
        res.innerText = 'ANTES GERE UMA SENHA'
        res.style.color = 'red'
    } else if (res.textContent === '') {
        res.innerText = 'ANTES GERE UMA SENHA'
        res.style.color = 'red'
    } else {
        navigator.clipboard.writeText(res.textContent).then(()=> {
        copied.style.opacity = '1'
        })
        setInterval(copied.style.opacity = '0', 3000);
    }
}