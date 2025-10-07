let nome = prompt('informe seu nome');
let qtd = parseInt(prompt('quantas vezes quer exibí-lo'));
while (qtd>0) {
    document.write(nome+'<br>');
    qtd--;
}
// usando for
let name = prompt('informe seu nome');
let qtde = parseInt(prompt('quantas vezes quer exibí-lo'));
for (let i=qtde; i>0; i--){
    document.write(name+'<br>');
}

