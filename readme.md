# Verificador de Palíndromos

## Descrição

Este projeto fornece uma API simples usando o Node.js com Express para verificar se um determinado input é um palíndromo. Um palíndromo é uma palavra, frase, número ou qualquer outra sequência de caracteres que permanece a mesma quando lida de trás para frente.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/tuliocaique/palindrome-checker.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd palindrome-checker
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Inicie o servidor com o seguinte comando:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

### Endpoints

- `GET /check`: Verifica se o input fornecido é um palíndromo.

  **Parâmetros**:
  - `input`: A frase ou palavra que você quer verificar.

  **Exemplo**:
  ```bash
  GET http://localhost:3000/check?input=AmoraRoma
  ```
  
  **Response**:
  ```json
  {
    "isInputPalindrome": true,
    "textFormatted": "<p class=\"success\">É um palíndromo</p>"
  }
  ```

## Interface HTML

Além da API, este projeto inclui uma interface HTML que permite verificar palíndromos diretamente através do navegador. Não é necessário fazer chamadas HTTP manualmente; você pode simplesmente acessar a página, inserir a frase ou palavra que deseja verificar e obter o resultado instantaneamente.

### Como Acessar

1. Inicie o servidor como mencionado acima na seção "Uso".
2. Abra o navegador e acesse `http://localhost:3000`.
3. Você verá um formulário onde pode inserir a frase ou palavra que deseja verificar.
4. Pressione o botão "Verificar" para obter o resultado, que será exibido abaixo do formulário.

## Contato

Se você tiver alguma dúvida ou feedback, sinta-se à vontade para abrir uma issue ou entrar em contato comigo através do email.

---
