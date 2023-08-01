const express = require('express');
const app = express();
const path = require('path');

/* Método para verificar se uma string é um palíndromo */
function isPalindrome(input) {
    // Verifica se o input fornecido é válido
    if (input === undefined || input === null || input === '')
        return false;

    // Tratamento do input
    const inputCleaned = input
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remover os acentos
        .replace(/[.,!?;:"'-]/g, '') // Remover pontuação (virgulas, pontos, exclamações, interrogações, ponto e vírgula, dois pontos, aspas, hífen e apóstrofo)
        .replace(/\s/g, '') // Remover espaços em branco e quebras de linha
        .toLowerCase(); // Transformar em minúsculas

    // Por fim, verificar se o input é um palíndromo
    for (let i = 0; i < Math.floor(inputCleaned.length / 2); i++) // Fazendo uma iteração até a metade da string
        if (inputCleaned[i] !== inputCleaned[inputCleaned.length - 1 - i]) // Verificando se o caractere atual é diferente do caractere correspondente da segunda metade da string
            return false; // Caso seja diferente, o input não é um palíndromo

    return true;
}

// Tornando público o diretório public_html
app.use(express.static('public_html'));

// Rota para verificar palíndromo
app.get('/check', (req, res) => {
    const isInputPalindrome = isPalindrome(req.query.input);
    res.send({
        isInputPalindrome: isInputPalindrome,
        textFormatted: isInputPalindrome ? '<p class="success">É um palíndromo</p>' : '<p class="error">Não é um palíndromo</p>'
    });
});

// Rota padrão para o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public_html/index.html'));
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 (http://localhost:3000)');
});
