# Portfólio

## Portal de Ideias

### Autor

  - Daniela Marioti

### Professor

  - [Diogo Winck](https://github.com/dvwinck)

### Objetivo

O aplicativo tem como objetivo realizar o controle de envio de ideias enviadas pelo cliente, tornando possível além do envio de ideias, o controle da situação da mesma, tanto por parte do cliente quanto por parte da empresa prestadora de serviço. 

O aplicativo de envio de ideias apresenta duas interfaces:
    - Interface do cliente: Além de acessar a lista de ideias encaminhadas de acordo com seu *status*, podendo ser aprovada, reprovada ou pendente, a aplicação  apresenta o botão de envio de novas solicitações de melhoria, onde o mesmo deve informar o título da ideia, sua descrição e suas informações básicas de nome e e-mail.
    - Inteface do analista: Pelo lado do analista, após realizado o longin no aplicativo, o mesmo possui o controle de aprovação ou reprovação de novas ideias, além da visualização de todas as solicitações recebidas, bem como seu *status*. 
    
### Design do projeto - Figma

- [Portal de Ideias](https://www.figma.com/file/M5gOjNuWJQ7vaumCCdAofh/Portal-de-Ideias-Simples?node-id=0%3A1)

### Controle de tarefas - Trello

- [Portfolio](https://trello.com/invite/b/3NnNrPQF/ATTIbb606dbf4d3ee433adab7b41a092a29594FAF6D3/portfolio)

## Tecnologias utilizadas

### Dependências backend

  - [Node.js (versão 16)](https://nodejs.org/en/)
  - [Express](https://expressjs.com)
  - [SQlite](https://www.sqlite.org/index.html)
  - [Prisma js](https://www.prisma.io/docs/)
  - [ESlint](https://eslint.org/docs/)
  
##### Inicializando

  - API
    - `npm install`
    - `npm start`
    - `localhost:3000`

### Dependências frontend

  - [React Native](https://reactnative.dev/docs/getting-started)
  - [Expo](https://expo.io/)
  - [Axios](https://github.com/axios/axios)
  - [Node.js (versão 14)](https://nodejs.org/en/)
  - [React Navigation](https://reactnavigation.org/)
  - [ESlint](https://eslint.org/docs/)
  - [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
  
#### Inicializando

  - Aplicação:
    - `npm install`
    - `npm start`
  - Android Studio
    - `expo start --android`

### Eslint

- `npx eslint --init`
- `npm run lint`

### Exemplos de uso

- Realizar o envio de ideia
- Analisar melhorias solicitadas e aprovadas
- Visualizar novas solicitações, aprovar ou reprovar

## Diagramas

### Diagrama de estado


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
  
 ### Diagrama de Classe
 
 ```mermaid
 classDiagram
    Home --|> NovaIdeia
    Home --|> Entrar
    Entrar --|> Inicio
    Inicio --|>  Analise
    Home : -String ideia
    Home : -int status
    NovaIdeia : -String titulo
    NovaIdeia : -String descricao
    NovaIdeia : -String nome
    NovaIdeia : -String email
    Entrar : -String login
    Entrar : -String senha
    Analise: -int situacao

    class Entrar{
        + login()
    }

    class Home{
        +visualizarLista()
        +acessarIdeia()
        +nova()
        +aprovada()
        +reprovada()
    }

    class Inicio{
        -String NovaIdeia
        - int situacao
        +visualizarLista()
        +acessarIdeia()

    }

    class NovaIdeia{
        +acessarIdeia()
        +enviar()
        +cancelar()
    }

    class Analise{
        +acessarIdeia()
        +aprovar()
        +reprovar()
    }
    
```

            


