
let homebtn = document.getElementById('home')
let pedidobtn = document.getElementById('monte-pedido')
let entrarbtn = document.getElementById('entrar-conta')

if (pedidobtn.style.backgroundColor = "#F282BA") {
    pedidobtn.style.backgroundColor = "#8CD1EE"
}

if (homebtn.style.backgroundColor = "#F282BA") {
    homebtn.style.backgroundColor = "#8CD1EE"
}

function salvarConta() {
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var confirmarS = document.getElementById('senha-c').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;

    window.localStorage.setItem("usuario", login);
    window.localStorage.setItem("senha", senha);
    window.localStorage.setItem("confirmarSenha", confirmarS);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("telefone", telefone);
    window.localStorage.setItem("endereco", endereco);
}