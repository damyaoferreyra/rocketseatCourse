// modulo 3

import {soma} from './funcoes';

console.log(soma(1,2))

// modulo 2/
// class List{
//     constructor(){
//         this.data = []
//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data)
//     }
// }

// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = "Damião";
//     }

//     add(data){
//         super.add(data);
//         console.log(this.usuario)
//     }

//     /**
//      * static, let
//      */
//     static exibir(){
//         // let 
//         let name = "JOAO";
        
//         if(true){
//             let name = "BOB"
//             console.log("Dentro do escopo IF ", name);
//         }
//         console.log("Fora do escopo IF ", name);
//     }

// }

// const MinhaLista = new TodoList();
// document.getElementById("novotodo").onclick = () =>{
//     MinhaLista.add("Novo tudo");
//     TodoList.exibir(); // static
// }

// class ArraysOperation{
//     // map: itera nos elementos
//     static map(arr1){
//         console.log("map");
//         // usando function default
//         const newArr1 = arr1.map(function (item){
//             return item * 2
//         })
    
//         console.log(newArr1)
//     }

//     // reduce, opera sobre os item e retorna 1 unico valor
//     static reduce(arr1){
//         console.log("reduce");
//         // usando função anonima
//         const newArr1 = arr1.reduce((total, valorItem)=>{ return total + valorItem})
    
//         console.log(newArr1)
//     }

//       // filter, opera sobre cada item e retorna os que atendem a condicao
//     static filter(arr1){
//         console.log("filter");
//         // usando arrow function
//         const newArr1 = arr1.filter(item => item % 2 == 0)
    
//         console.log(newArr1)
//     }

//     // retorna o valor pesquisado ou underfine
//     // parâmetros com valores default
//     static find(arr1 = [1,2,3,4]){
//         console.log("find");
//         // usando arrow function
//         const newArr1 = arr1.find(item => item == 2)
    
//         console.log(newArr1)
//     }

// }

// /**
//  * Declaração de function
//  */
// const callFunction = () => {

//     ArraysOperation.map([1,2,3,4,5,6,7,8,9,10]);
//     ArraysOperation.reduce([1,2,3,4,5,6,7,8,9,10]);
//     ArraysOperation.filter([1,2,3,4,5,6,7,8,9,10]);
//     ArraysOperation.find([1,2,3,4,5,6,7,8,9,10]);
// }

// callFunction();

// // desestruturação


// function exibirDesestruturacaoExemplo1({nome, endereco:{rua}}){
//     console.log(nome, " reside a", rua)
// }

// const vendedor = {
//     nome: "Julia",
//     idade: 18,
//     endereco:{
//         rua: "Rua do ouvidor",
//         cep: "20080-567"
//     }
// }

// const { nome, endereco: {rua}} = vendedor
// console.log(nome)
// console.log(rua)
// exibirDesestruturacaoExemplo1(vendedor)


// // REST - usado para obter o resto das propriedades quando usado a desestruturacao
// // usado em parâmetros / é o famoso varargs no java
// const linguagens = {
//     ling01:{python: "básico"},
//     ling02:{
//     java: "avançado",
//     nodejs: "básico",
//     javascript:"intermediáro"}
// }
// const {ling01, ...ling02} = linguagens
// console.log(ling01, ling02)

// // REST in params
// function rests(...params){
//     console.log(params)
// }

// // SPREAD - usado para fazer a propagação/união dos elementos
// // é o famoso zip no python
// const arr5 = [1,2,3,4]
// const arr6 = [5,6,7,8,9]
// const arr7 = [...arr5, ...arr6]
// console.log(arr7)

// // bastante usado quando queremos alterar uma propriedade do objeto
// // mas deixando o original
// const usuario1 = {
//     name:"Damiao Ferreira",
//     nivel:"intermediário"
// }

// const usuario2 = {...usuario1, nivel: "avançado"}
// console.log(usuario2)

// // template literals: adição de variáveis em string
// // interpolation de string em groovy

// console.log(`Meu nome é ${nome}, e resido a ${rua}`)

// // object short syntax: usado quando a variavel 
// // adicionada ao objeto tem a mesma key
// const nome1 = "Damiao Ferreira"
// const profissao = "Software developer"

// const usuario3 = {
//     nome: nome1,
//     // profissao: profissao,
//     profissao,
//     empresa:"iPremios"
// }

// console.log(usuario3)

//  // https://skylab.rocketseat.com.br/api/files/1566499229316.pdf
// // exercícios
// // 1º
// console.log("************1º***********")
// class User{

//     constructor(email, senha){
//         this.email = email
//         this.senha = senha
//         this.admin = false
//     }

//     isAdmin(){
//         return this.admin
//     }
// }

// class Admin extends User {
//     constructor(){
//         super()
//         this.admin = true
//     }
// }

// const User1 = new User('noEmail.com','noPassword')
// const Adm1 = new Admin('noEmail.com','noPassword')
// console.log(User1.isAdmin(), Adm1.isAdmin())

// // 2º
// console.log("************2º***********")
// // 2.1
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, 
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },];

// const idades = usuarios.map((user)=>{
//     return user.idade
// })

// console.log(idades)

// // 2.2
// const usuariosFilter = usuarios.filter(user => user.idade > 18 && user.empresa === "Rocketseat")
// console.log(usuariosFilter)

// // 2.3
// const usuariosFind = usuarios.find(user => user.empresa === "Google")
// console.log(usuariosFind)

// // 2.4
// const usuarioModificados = usuarios.map((user) => {
//     user.idade = user.idade * 2
//     return user
// }).filter(user => user.idade <= 50)
// console.log(usuarioModificados)

// // 3º
// // 3.1
// console.log("************3º***********")
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => item + 10)
// console.log(arr)

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };

// console.log("************3.2**********")
// // function mostraIdade({idade}) {  return idade;}
// // mostraIdade(usuario)
// const minhaFunction32 = ({idade}) => idade
// console.log(minhaFunction32(usuario))

// console.log("************3.3**********")
// // 3.3// Dica: Utilize uma constante pra function
// const nome33 = "Diego";
// const idade33 = 23;

// // function mostraUsuario(nome = 'Diego', idade = 18) {  return { nome, idade };}
// const minhaFunction33 = (nome = 'Diego', idade = 18) =>  ({nome, idade})
// console.log(minhaFunction33(nome33, idade33))
// console.log(minhaFunction33(nome33));

// console.log("************3.4**********")
// // 3.4
// const promise = function() {  
//     return new Promise(function(resolve, reject) { 
//         return resolve();  })
//     }

// const promiseChanger = () => new Promise(function(resolve, reject) { 
//         return resolve();  })

// console.log("************4º**********")
// console.log("************4.1**********")

// // function mostraInfo(usuario) {  
//     // return `${usuario.nome} tem ${usuario.idade} anos.`;}
// function mostraInfo({nome, idade}) {  
//     return `${nome} tem ${idade} anos.`;}

// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

// // console.log("************5.1**********")
// // const arr51 = [1, 2, 3, 4, 5, 6]

// // let x = arr51[0]
// // let y = [...arr51]

// // console.log(x); // 1
// // console.log(y); // [2, 3, 4, 5, 6]

// console.log("************5.1**********")
// const soma = (...number) => number.reduce((total, value) => total + value)
// console.log(soma(1,2,3,4,5,6))

// console.log("************5.2**********")
// const usuarioDiego = {  
//     nome: 'Diego',  idade: 23, 
//     endereco: {    
//         cidade: 'Rio do Sul',
//         uf: 'SC',
//         pais: 'Brasil' 
//     }
// }

// const usuarioGabriel = {...usuarioDiego, nome:'Gabriel'}
// const usuarioGabrielModificado = {
//     ...usuarioGabriel, nome:'Gabriel', endereco:{ ...usuarioGabriel.endereco, cidade: "Lontras"}}

// console.log(usuarioDiego)
// console.log(usuarioGabriel)
// console.log(usuarioGabrielModificado)

// console.log("************6.1**********")
// const usuario61 = 'Diego';
// const idade61 = 23;
// // console.log('O usuário ' + usuario61 + ' possui ' + idade61 + ' anos')
// console.log(`O usuário ${usuario61} possui ${idade61} anos`)

// console.log("************7.1**********")
// const nome71 = 'Diego';
// const idade71 = 23;
// // const usuario71 = {  nome: nome71,  idade: idade71,  cidade: 'Rio do Sul',}
// const usuario71 = {  nome71,  idade71,  cidade: 'Rio do Sul',}
// console.log(usuario71)