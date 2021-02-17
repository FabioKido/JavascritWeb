var nome = "Fábio Kido";
var idade = 27;
var frase = "Japão é o melhor time do mundo!";

alert("Bem vindo " + nome.toLowerCase() + ` vc tem ${idade} anos.`);

console.log("Ano: ", idade + 1994);
console.log(frase.replace("Japão", "Brasil").toUpperCase());

var lista = ["maça", "pera", "uva"];

console.log(lista);

lista.push("laranja");  // Popula array(lista) no seu final

console.log(lista);

lista.pop(); // Tira ultimo da lista(array)

console.log(lista);
console.log(lista[1]);

console.log(lista.length);  //  Tamanho do vetor
console.log(lista.toString());  // transforma em string o conteúdo

console.log(lista.toString()[0]); // Pega posição do elemento na string

console.log(lista.join(" * ")); // Transforma em string e adiciona elemento no lugar da vírgula

// Dicionário/object
var fruta = { nome: "Maça", cor: "Vermelha" };
var frutas = [{ nome: "Maça", cor: "Vermelha" }, { nome: "Uva", cor: "Roxa" }];

console.log(fruta.nome, fruta.cor);

console.log(frutas[1].nome);
console.log(frutas);

// frutas.map(item => console.log(item.nome));

var age = prompt("Qual a sua idade?");

if (age >= 18) {
  console.log(nome, "já é maior de idade");
} else {
  console.log("Vaza! Ainda tem fimose...")
}

var count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

for (let count = 5; count > 0; count--) {
  console.log(count);
}

var d = new Date();

alert(d.getMonth() + 1); // Mais um, porque começa contar do zero, tipo o vetor.

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(1, 3));

function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b><i>Obrigado por clicar</i></b>";

  // alert("Obrigado por clicar");
}

function redirecionar() {
  window.open("https://www.google.com");
  window.location.href = "https://www.google.com";
}

// function changeText() {
//   document.getElementById("mouseover").innerHTML = "Ai que delícia de passada"
// }

// function voltar() {
//   document.getElementById("mouseover").innerHTML = "Passe o Mouse"
// }

function changeText(element) {
  element.innerHTML = "Ai que delícia de passada"
}

function voltar(element) {
  element.innerHTML = "Passe o Mouse"
}

function load() {
  alert("Página Carregada!");
}

function funcaoChange(element) {
  console.log(element.value);
}