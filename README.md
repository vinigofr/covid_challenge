# Projeto D3_Challenge - COVID-19 no mundo.
------------
## Tecnologias utilizadas no desenvolvimento:
```
Docker
React,
CSS,
JavaScript ES6,
```
------------
## Neste projeto é possível:
1. Saber o número de casos de COVID-19 a partir do primeiro dia até o momento atual utilizando uma entrada D, onde D = Inteiro que vai de 1 até número de dias total da pandemia.

2. Testar a aplicação através de testes com comandos via terminal.

3. Iniciar uma aplicação React via Containerização Docker.

------------
## Requisitos importantes para rodar o projeto na sua própria máquina:
1. Preferencialmente uma distribuição Linux, pois pode haver incompatibilidade com sistemas como o Windows 10 ou versões superiores.

2. Ter o [Node Package Manager](https://docs.npmjs.com/cli/v7/commands/npm-install "Node Package Manager") instalado.

3. Ter o [NodeJS LTS](https://nodejs.org/en/download/ "NodeJS LTS") instalado.

4. Ter o [Docker CE](https://docs.docker.com/engine/install/) instalado.

#### Observação: Todas os requisitos acima possuem várias formas de instalação. Atente-se às documentações e verifique se está tudo funcionando corretamente antes de prosseguir.
------------
## Iniciando o projeto localmente:
1. Abra o terminal (CTRL + ALT + T em algumas distribuições).

2. Procure uma pasta na qual você queira fazer download do projeto.

3. Digite `git clone git@github.com:vinigofr/d3_challenge.git` e aguarde o download.

4. Ao baixar, digite no terminal `cd d3_challenge`, você poderá observar os arquivos do projeto. (src, package.json...).

5. Precisamos criar o Container onde ficará nosso servidor React. Ele será criado a partir do arquivo `Dockerfile` que se encontra dentro da pasta do projeto.

6. Já dentro da pasta `d3_challenge` digite: `sudo docker-compose up -d --build`. Este comando instalará todas as dependências necessárias para iniciar o projeto em um container docker.

7. Se tudo ocorrer corretamente, você verá essa seguinte mensagem no terminal:
![Sucesso na containerização](https://github.com/vinigofr/d3_challenge/blob/documentacao/success.png)

8. Após a execução do comando do passo 5 terminar, um servidor local abrirá no endereço: http://localhost:3001 (O Docker está consumindo a porta 3000 localmente e nos disponibiliza a 3001).

9. Quando tentar acessar a página, pode aparecer um recado do navegador dizendo que o conteúdo não está disponível. Isso provavelmente acontece porquê o `npm start` do script ainda está processando a aplicação.

------------

# Testando a aplicação:
1. Abra um novo terminal que direcione para a pasta do projeto.

2. Dentro da pasta, execute o comando: `sudo docker exec -it d3_challenge sh`.
Pode ser que em outras distribuições Linux o `sh` seja substituído por `/bin/bash`.

3. Após executar o comando, você terá acesso ao "terminal" interno daquele container no docker. Então alguns comandos Unix/Bash são compatíveis ali.

4. O primeiro comando será o `npm test`. Ele deve retornar todas as asserções funcionando corretamente:
![Todos os testes funcionando corretamente](https://github.com/vinigofr/d3_challenge/blob/documentacao/test_success.png)

5. O segundo comando será o `npm run test-coverage`. Ele deve retornar a porcentagem de cobertura dos testes, que é de 100%:
![100% de cobertura](https://github.com/vinigofr/d3_challenge/blob/documentacao/coverage.png)

------------

Observação interessante: Graças ao Docker, o node_modules que comumente fica na raiz do projeto, agora está dentro do container docker.

Muito obrigado pela oportunidade, foi um prazer imenso realizar este projeto.
