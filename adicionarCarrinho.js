const addCarinho = document.querySelectorAll(".adicionar");
var produto = document.querySelectorAll(".produtos li")

addCarinho.forEach(button => {
    button.addEventListener('click', window.localStorage.setItem('nomeDoProduto', JSON.stringify(produto)))
  })