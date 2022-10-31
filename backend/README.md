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
  - [SQlite](https://www.sqlite.org/index.html)
  - [Prisma js](https://www.prisma.io/docs/)
  - [ESlint](https://eslint.org/docs/)
  
## Inicializando

  - API
    - `npm install`
    - `npm start`
    - `localhost:3000`
  - Eslint
    - `npx eslint --init`
    - `npm run lint`
    
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
    Home : String ideia
    Home : int status
    NovaIdeia : int id
    NovaIdeia : String titulo
    NovaIdeia : String descricao
    NovaIdeia : String nome
    NovaIdeia : String email
    Entrar : String login
    Entrar : String senha
    Analise: int situacao

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
   
#### Usuário
   
 ```mermaid
      classDiagram
          User --> Suggestion
          Suggestion--> Status
          User : int id
          User : String name
          User : String email
          User : String password
          Suggestion : int number
          Suggestion : String accDescription
          Status : Aprovado
          Status : Reprovado 
  ```
#### Ideia

```mermaid
     classDiagram
    Idea --> Suggestion 
    Idea : int id
    Idea : String tittle
    Idea : String description
    Idea : String status
    Idea : String name
    Idea : String email
    Suggestion : int number
    Suggestion : String Description
```


        
