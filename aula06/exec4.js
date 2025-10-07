let numero, soma = 0;
let testa;
for (let i=0; i<5; i++){
    testa = prompt('digite um valor');
    if (testa!='') { numero = parseInt(testa) }
    else { numero = 0; }
    //soma = soma + numero;
    soma += numero;
}
console.log('Total da soma é: ',soma)
console.log('-=-=-=-=-= Usando while -=-=-=-=-=-=-=-=-');
let num, sum = 0, cont = 0;
while (cont<5){
    num = parseInt(prompt('digite um valor'));
    sum += num;
    cont++;
}
console.log('Total da soma é: ',sum);


