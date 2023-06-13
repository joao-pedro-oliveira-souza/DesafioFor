let candidato1 = 1;
let candidato2 = 2;
let candidato3 = 3;

let totalVotosCandidato1 = 0;
let totalVotosCandidato2 = 0;
let totalVotosCandidato3 = 0;

let eleitores = parseInt(prompt("Digite o total de eleitores"));
let i = 0;
console.log(eleitores);
while (i <= eleitores) {
    let voto = parseInt(prompt("Vote\n1 para o candidato1\n2 para o candidato2\n3 para o candidato3"));
    if (voto == candidato1) {
        totalVotosCandidato1 += 1;
    }
    if (voto == candidato2) {
        totalVotosCandidato2 += 1;
    }
    if (voto == candidato3) {
        totalVotosCandidato3 += 1;
    }
    i = i + 1;
};

alert(`A votação encerrou com um total de ${eleitores} votos, segue o resultado\n
       candidato1 recebeu ${totalVotosCandidato1} votos\n
       candidato2 recebeu ${totalVotosCandidato2} votos\n
       candidato3 recebeu ${totalVotosCandidato3} votos`);