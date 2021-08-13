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
let passagemComprada = false;
const destino = "Rio de Janeiro";

console.log("Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}        

console.log("Destino existe: ", destinoExiste);
