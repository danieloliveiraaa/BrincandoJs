//console.log("Daniel") - Exibir mensangem
/*
let idade = 5;
console.log(idade);

let pixels = 1200 //variavel que pode ser alterada.
console.log(pixels);

const valorIngressoAdulto = 20; //variavel constante.
console.log("Valor do ingresso para adultos: " +valorIngressoAdulto);


let nome = 'Daniel';
let idade = 25;
let estaAprovado = true;

//OBJETO
let pessoa = {
    nome: 'Daniel',
    idade: 25,
    estaAprovado = true
};


console.log(pessoa);
*/



//Arrays
/*
let familia = [40,42,20,30];

console.log(familia.length);

console.log(familia[0]);


let nomeColega = ['Kaique','Gustavo'];

console.log(nomeColega[1]);
*/

/*
let corSite = "azul";

function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("verde"," claro");
console.log(corSite);
*/

'use strict'

//let variavel pode-se alterar
//const variavel constante nao se altera


//ADICIONANDO REFERENCIA DO BOTÃO
const switcher = document.querySelector('.btn');

//OUVINTE PARA EVENTO CLICK
//METODO TOGGLE PARA ALTERNAR O ELEMENTO PARA A CLASSE dark-theme
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme")
    {
        this.TextContent = "Dark";
    }
    else 
    {
        this.TextContent = "Light"
    }

    console.log('Current class name: ' +className);

});







