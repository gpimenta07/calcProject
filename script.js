/* funcao de receber os valores digitalizados */
function addCharacter(character) {
  const inputValue = document.querySelector(".inputValue").value;
  document.querySelector(".inputValue").value = inputValue + character;
  
}

/* funcao de limpar o input calculadora */
function clean() {
  document.querySelector(".inputValue").value = "";
}

/* funcao de remover o ultimo numero digitado*/
function removeLast() {
  const inputValue = document.querySelector(".inputValue").value;
  const inputValue2 = (document.querySelector(".inputValue").value =
    inputValue.slice(0, -1));
}

/* funcao de calcular os valores digitados */
function calc() {
  const inputValue = document.querySelector(".inputValue").value;
  document.querySelector(".inputValue").value = eval(inputValue);
}
