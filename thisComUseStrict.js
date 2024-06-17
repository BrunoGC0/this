'use strict'
// // console.log(this)
// console.log(window)

// this.name = 'Ricardo'


// function saudar(){
//     console.log('This no contexto da função ', this)
//     console.log('Olá, '+this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Bruno',
//     saudar: function(){
//         console.log('This no contexto do metodo', this)

//         console.log('This.name no contexto do metodo', this.nome)
//     }
// }


// usuario.saudar()

let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

comida.cozinhar = function(temperaturaParaCozimento){
    this.temperatura = temperaturaParaCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida) 