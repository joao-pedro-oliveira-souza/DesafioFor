let sum = 0;

for(let i=1; i <= 500; i++) {
    if(i % 3 == 0 && i % 2 == 1)
    {
        sum += i;
    }
    console.log(`A soma dos múltiplos de 3 que são ímpar é ${sum}`);
}