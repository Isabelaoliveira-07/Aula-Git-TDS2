//Isabela De Oliveira

//Exemplo de array

//Criando arrays com nomes de frutas e sucos
let sucos = ["Laranja", "uva", "abacaxi", "Manga", "maracujá"];
console.log(sucos[0]);

//criando um array de números 
let numeros =[1, 2, 3, ,4 ,5];
console.log(numeros[2]);

//acessando um elemento especifico do array
let animais = ["cachorro", "gato", "pássaro", "peixe"];
console.log(animais[1]);

//alterando um elemento do array
let times = ["Flamengo", "Palmeiras", "São Paulo", "Corinthians"];
times[2] = "Vasco";
console.log(times);
//descobrindo o tamanho do array
let games=["Fifa ", "Call of Duty", "Minecraft", "Fortnite"];
console.log(games.length);

//Adicionando um elemento ao final do array
let cores = ["Vermelho", "Azul", "Verde"];
cores.push("Amarelo");
console.log(cores);

//Removendo o último elemento do array
let carros = ["Fusca", "Gol", "Civic", "Corolla"];
carros.pop();
console.log(carros);

//Removendo o primeiro elemento do array
let cidade = ["São paulo" , "rio de janeiro ", "belo horizonte", "curitiba"];
cidades.shift();
console.log(cidades);

//Adicionando um elemento no ínicio do array
let países = ["Brasil" , "Argentina", " chile"];
países.unshift("Uruguai");
console.log(países);