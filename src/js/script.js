// //Declarações e variáveis
// //var, let e const

// var nome="Fiap";
// console.log(nome)

// var nome="Teste";
// console.log(nome)

// if(true){
//     let apelido="Fiapinho";
//     console.log(apelido)
// }

// const taxaJuros=0.05;
// console.log(taxaJuros)
// //let taxaJuros=1.5

// //typeof-verifica o tipo da variavel
// var exemplo="ola-dev-var";
// console.log(exemplo)

// let exemplo1="ola-dev-let";
// console.log(exemplo1)

// const exemplo2="ola-dev-const";
// console.log(exemplo2)

// let exemplo3=10;
// console.log(exemplo3)

// let exemplo4=true;
// console.log(exemplo4)

// let exemplo5={nome1:"teste"}
// console.log(exemplo5)

// let exemplo6=["Java", "c#", "PHP"];
// console.log(exemplo6)

// //valor indefinido
// let exemplo7;
// console.log(exemplo7)

// //valor vazio
// let exemplo8 =null
// console.log(exemplo8)

// //OPERADORES ARITMÉTICOS

// const valor1=10;
// const valor2=20;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// //OPERADORES LÓGICOS
// // = atribuição
// // == comparação
// // === valor e tipo (estritamente igual)
// // && = E (todas as condições tem que ser verdadeiras)
// // || = OU (uma das condições tem que ser verdadeira)
// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2 < 10); //E
// console.log(valor1 > 100 || valor2 < 10); //OU
// console.log(valor1 == valor2); 
// console.log(valor2 === valor1);

// /**************************************************/
// //EXERCÍCIOS 

// //1)
// const p=20;
// const v=10;

// const precoFinal= p-v;
// console.log("O preço final com desconto é", precoFinal,)

// //2)
// let a=20;
// let b=10;

// let comparar= (a ==20 && b >= 10);
// console.log("O Resultado é:", comparar);

// //3) do thiago
// var user_login=true;
// var user_password=true;
// if(user_login == true){
//     console.log("Transação Realizada")
// }
//  //3) do professor cidade
//  const usuarioLogado=20;
//  const tempoToken=10;

//  const transacao =(usuarioLogado ===20 && tempoToken >=10);
//  console.log("Transação Autorizada", transacao)


 //Estrutura Condicional

 //if

 if(true){
    console.log("verdadeiro")
 }

 let nome="fiap";

 if(nome=="fiap"){
    console.log("Nome correto")
 }

 // if/else

 if(nome =="DFiap"){
    console.log("Usuário Correto")
 }else{
    console.log("Usuário Errado")
 }

 // if cadeado / alinhado

 let idade = 20;

 if(idade <= 13){
    console.log("É uma criança ")
 }else if(idade > 13 && idade <18){
    console.log("É um adolescente")
 }else if(idade >18 && idade <50){
    console.log("É um adulto")
 }else{
    console.log("É um idoso")
 }

 // Switch case

 let pratos="salada";

 switch(pratos){
    case "macarrão":
        console.log("a melhor massa")
        break;
    case "salada":
        console.log("salada saudável")
        break;
    case "lasanha":
        console.log("melhor prato")
        break;
    default:
        console.log("nenhuma das opções")
 }

 // ternario
 /*
 ? = if
 : = else
 */
 let valor = 100;
 let resultado = valor ==100 ? "Valor certo": "Valor Errado";
 console.log(resultado)

 let usuario="dev"
 let logado= usuario == "dev" ? "Usuário Logado": "Usuario invalido";
 console.log(logado)