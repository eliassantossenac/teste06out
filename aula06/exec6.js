let contador = 1;
let numero = parseInt(prompt('Informe o número'));
while (contador<=10){
    document.write(numero +' x '+contador+' = '+ numero*contador+'<br>');
    contador++;
}
// outra situação (pedindo o final do multiplicador)
let ctd = 1;
let num = parseInt(prompt('Informe o número'));
let final = parseInt(prompt('Informe até quanto quer multiplicar'));
while (ctd <= final){
    document.write(num +' x '+ctd+' = '+ num*ctd+'<br>');
    ctd++;
}