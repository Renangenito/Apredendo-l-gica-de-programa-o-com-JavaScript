class CasasVenda{
     cidade;
     preco;
     entrada;
     parcela
}

class Comprador{
     nome;
     salario;
     dinheiroGuardado;    
}

const casa1 = new CasasVenda();

casa1.cidade = "Mogi das Cruzes";
casa1.preco = 220000;
casa1.entrada = 100000;
casa1.parcela = 1600;

const casa2 = new CasasVenda();

casa2.cidade = "Poá";
casa2.preco = 180000;
casa2.entrada = 90000;
casa2.parcela = 1200;

const casa3 = new CasasVenda();

casa3.cidade = "Ferraz de Vasconcelos";
casa3.preco = 120000;
casa3.entrada = 60000;
casa3.parcela = 900;



const nome = new Comprador();

nome.nome = "Renan";
nome.salario = 2000;
nome.dinheiroGuardado = 20000;

console.log(casa1,casa2,casa3,nome)


