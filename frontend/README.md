
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

## Dependências

  - [Expo](https://expo.io/)
  - [Axios](https://github.com/axios/axios)
  - [Node.js (versão 14)](https://nodejs.org/en/)
  - [React Navigation](https://reactnavigation.org/)
  - [ESlint](https://eslint.org/docs/)
  
## Inicializando

  - Aplicação:
    - `npm install`
    - `npm start`
  - Android Studio
    - `expo start --android`
  - Eslint
    - `npx eslint --init`
    - `npm run lint`

## Exemplos de uso

- Realizar o envio de ideia de melhoria para o software em questão
- Analisar melhorias solicitadas e aprovadas para o sofware em questão
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
  
  ### Diagrama de classe
  
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
