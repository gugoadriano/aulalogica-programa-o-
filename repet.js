let numero = parseFloat(prompt("digite um Número(0 para sair):"));
let soma = 0;

while(numero !== 0){
    soma += numero;
    numero = parseFloat(prompt("digite um Número(0 para sair):"));
}
alert("Digitou 0, ciclo encerrado")