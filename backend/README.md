# Portal de Ideias

### Autor

  - Daniela Marioti

### Professor

  - [Diogo Winck](https://github.com/dvwinck)

### Objetivo

  - Aplicativo de envio de ideias para um determinado software, apresentando duas interfaces:
    - Interface do cliente: Além de acessar a lista de ideias encaminhadas, de acordo com seu *status* e situação, a aplicação  apresenta o botão de envio de novas solicitações de melhoria, por parte do cliente.
    - Inteface do analista: Visualização da lista de solicitações e função de aprovação ou reprovação de novas ideias. 

# Tecnologias utilizadas

## Depêndencias

  - [Node.js (versão 16)](https://nodejs.org/en/)
  - [Express](https://expressjs.com)
  - [ESlint](https://eslint.org/docs/)
  
## Inicializando

  - API
    - `npm install`
    - `npm start`
    - `localhost:3000`
  - Eslint
    - `npx eslint --init`
    - `npm run lint`
    

## Diagrama de estado

 ```mermaid
    stateDiagram-v2
      state interface <<choice>>
      [*] --> Portal
      Portal --> interface
      interface --> NovaIdeia: Cliente
      interface --> Entrar: Analista
      NovaIdeia --> Enviar
      NovaIdeia --> Cancelar
      Entrar --> Ideia
      Ideia --> Aprovar
      Ideia --> Reprovar    
  ```
