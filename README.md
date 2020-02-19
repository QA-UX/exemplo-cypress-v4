# Exemplo Cypress v4

Repositório criado para realizar testes iniciais na nova versão do Cypress (v 4.0). O lançamento da versão 4 foi no dia 06/02/2020 com mudanças significativas e o principal o suporte ainda em versão beta para o Mozilla Firefox e Microsoft Edge. Atualmente já se encontra na versão 4.0.2 com alguns bugs corrigidos do lançamento.

## Mudanças na versão 4.0

Mudanças e Recursos adicionados
- Foi incluído suporte para os navegadores Mozilla Firefox e Microsoft Edge;
- Atualização da versão do Electron, bem como as versões do Chromium, com adição da escolha que quer executar no `cypress run` [documentação](https://docs.cypress.io/api/plugins/browser-launch-api.html#Syntax);
- Atualização do Mocha, Chai, and Sinon.Js;
- função `contains()` ignora espaço em branco tanto no começo do texto, final e duplicado [documentação](https://docs.cypress.io/api/commands/contains.html);
- Atualizado a função utilitária `Cypress.isBrowser()` [documentação](https://docs.cypress.io/api/cypress-api/isbrowser.html);
- Atualizado o objeto `Cypress.browser` com a adição da propriedade `channel` que realiza a detecção do navegador [documentação](https://docs.cypress.io/api/cypress-api/browser.html#Conditionals)

## Mais informações

Foi desenvolvido uma documentação guia de como realizar a migração da versão 3 para a 4, é interessante verificar as mudanças que ocorreram no formato dos testes. Documentação bem detalhada com antes e depois.

- [Migration Guide](https://docs.cypress.io/guides/references/migration-guide.html#Migrating-to-Cypress-4-0)

## Primeiras impressões

De primeiro momento a atualização principal foi o suporte aos navegadores Mozzila Firefox e Microsoft Edge, sendo um grande passo para o Cypress, se tornando mais sólida e competitiva com outras ferramentas de teste *end-to-end*. 

Contudo, por ser uma atualização bem recente, há de aparecer alguns bugs, sendo interessante para projetos grandes que utilizam a ferramenta aguardem um pouco para a migração.

## Funcionamento do Projeto.

1. Realizar o download do projeto;
2. Instalar as dependências mínimas do Cypress `apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2`
3. No terminal na pasta realizada o download executar o comando `npm install`
4. Para iniciar a aplicação executar `npm start`
5. Para iniciar o Cypress executar `node_modules/.bin/cypress open`