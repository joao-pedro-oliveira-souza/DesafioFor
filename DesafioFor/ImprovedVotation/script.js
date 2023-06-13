const candidatos = {1: "José", 2: "João", 3: "Maria", 4: "Ana"};

let votosCandidatos = {1: 0, 2: 0, 3: 0, 4: 0};
let votosNulos = 0;
let votosEmBranco = 0;
let totalVotos = 0;


while (true) {
  const voto = parseInt(prompt("Digite o código do seu voto (0 para sair):"));
  if (voto === 0) {
    break;
  } else if (voto >= 1 && voto <= 4) {
    votosCandidatos[voto]++;
    totalVotos++;
  } else if (voto === 5) {
    votosNulos++;
    totalVotos++;
  } else if (voto === 6) {
    votosEmBranco++;
    totalVotos++;
  } else {
    alert("Código inválido!");
  }
}


const porcentagemNulos = (votosNulos / totalVotos) * 100;
const porcentagemBranco = (votosEmBranco / totalVotos) * 100;

console.log("Total de votos para cada candidato:");
for (const [candidato, votos] of Object.entries(votosCandidatos)) {
  console.log(`${candidatos[candidato]}: ${votos} votos`);
}
console.log(`Total de votos nulos: ${votosNulos}`);
console.log(`Total de votos em branco: ${votosEmBranco}`);
console.log(`Porcentagem de votos nulos sobre o total de votos: ${porcentagemNulos.toFixed(2)}%`);
console.log(`Porcentagem de votos em branco sobre o total de votos: ${porcentagemBranco.toFixed(2)}%`);
