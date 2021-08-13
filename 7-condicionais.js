console.log("Trabalhando com listas");

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = true;
const passagemComprada = true

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log(" Boa viagem!!");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador é menor de idade, nao pode comprar!");
}

console.log("Embarque");
if (idadeComprador >= 18 && passagemComprada) {
    console.log(" Boa viagem!!");
} else {
    console.log("Infelizmente o senhor não pode embarcar!");
}
console.log(listaDeDestinos);



