let homebtn = document.getElementById('home')
let pedidobtn = document.getElementById('monte-pedido')
let entrarbtn = document.getElementById('entrar-conta')

if (pedidobtn.style.backgroundColor = "#F282BA") {
    pedidobtn.style.backgroundColor = "#8CD1EE"
}

if (homebtn.style.backgroundColor = "#F282BA") {
    homebtn.style.backgroundColor = "#8CD1EE"
}

let usuarioLogin = window.localStorage.getItem("usuario");
let senhaLogin = window.localStorage.getItem("senha");

function logar() {
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (login == usuarioLogin && senha == senhaLogin) {
        alert("foi")
    }else {
        alert("Usuário ou senha incorretos")
    }

    
}
