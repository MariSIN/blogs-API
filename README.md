# Boas-vindas ao repositório do projeto API de Blogs!

No projeto, foi desenvolvida uma API e um banco de dados para a produção de conteúdo de um blog. Foram criados endpoints conectados ao banco de dados, seguindo os princípios do REST e utilizando o pacote Sequelize para realizar operações de CRUD em posts. Foi implementada a relação entre usuário e post, exigindo o login para publicar um post. Além disso, foram utilizadas categorias para os posts, trabalhando na relação entre posts e categorias, bem como entre categorias e posts.

<br />

<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  Para orientar a construção das tabelas através do ORM, utilize o *DER* a seguir:

  ![DER](./public/der.png)

  ---

  #### Formato das entidades

  O seu projeto deverá usar o `ORM Sequelize` para criar e atualizar o seu banco de dados. 

  Os primeiros requisitos do projeto devem orientar a produção de suas migrations para gerar:

  - Uma tabela chamada **users**, contendo dados com a seguinte estrutura:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - Uma tabela chamada **categories**, contendo dados com a seguinte estrutura:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - Uma tabela chamada **blog_posts**, contendo dados com a seguinte estrutura:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14  // Chave estrangeira, referenciando o id de `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Chave primária e estrangeira, referenciando o id de `BlogPosts`     | 20  // Chave primária e estrangeira, referenciando o id de `Categories`     |


    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

    > :warning:️ Em caso de dúvidas, consulte os conteúdos:
    > - [Transformando ideias em um modelo de banco de dados](https://app.betrybe.com/course/back-end/funcoes-sql-joins-e-normalizacao/transformando-ideias-em-um-modelo-de-banco-de-dados/a7326a61-117a-4d2f-a640-9e312b6f973b) *(Em `Database Design - Como modelar um banco de dados` > `4) Criando e modelando tabelas de acordo com um diagrama ER`)*
    > - [ORM - Interface da aplicação com o banco de dados](https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682) *(Em `Migrações`)*
    > - [ORM - Associations](https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d) *(Em `Relacionamentos N:N`)*  

    ---

    #### Dicas de scripts prontos

    - Deleta o banco de dados:
    ```json
    "drop": "npx sequelize-cli db:drop"
    ```

    - Cria o banco e gera as tabelas:
    ```json
    "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
    ```

    - Insere dados/Popula a tabela:
    ```json
    "seed": "npx sequelize-cli db:seed:all"
    ```

    **:eyes: OBS**: Os testes irão rodar através do seu migrate usando os scripts acima, também listados no `package.json`.

    **⚠️ Preste bastante atenção, pois a alteração desses scripts pode impedir o avaliador de funcionar corretamente**

    **:warning:️ Haverá um arquivo na pasta `/seeders`, que irá conter as queries para inserção no banco de dados. `Não a remova, pois o avaliador depende dela`.**

<br />
</details>

<br />

# Requisitos Obrigatórios

## 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

---

## 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

---

## 3 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

---

## 4 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
---

## :warning: Validando token nas requisições

- Após termos feito o requisito de criação de `users` e o requisito de `login`, alguns requisitos abaixo vão precisar desta autenticação prévia, para que seja possível consumir o endpoint;
- Todo requisito que precisar validar o `token` terá o símbolo ☝;
- **✨ Dica:** Se é algo que vamos utilizar em mais de uma rota, será que podemos separa-lo em algum lugar que comece com `M` de `middleware`? 😜

<details>
  <summary id="validandoToken"><strong>Os seguintes pontos serão avaliados</strong></summary>

  * **[Será validado que não é possível fazer uma operação sem o token na requisição]**
    - Se o token for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
    ```json
    {
      "message": "Token not found"
    }
    ```

  * **[Será validado que não é possível fazer uma operação com o token inválido]**
    - Se o token for inválido o resultado retornado deverá ser conforme exibido abaixo, com um status http `401`:
    ```json
    {
      "message": "Expired or invalid token"
    }
    ```

</details>

---

## 5 - Sua aplicação deve ter o endpoint GET `/user`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

---

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

---

## 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama).
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

---

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:1)* com o modelo `User`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- Sua `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- Sua `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades](#diagrama);
- Sua `model` deve respeitar a associação correta *(N:N)* entre o modelo `BlogPost` e o modelo `Category`;
- As propriedades podem estar em `camelCase` se `underscored` for `true`. Ou seja, quando os dados forem inseridos ou selecionados via `model` devem estar em `camelCase`, mas quando as _queries_ forem pra o banco os campos das colunas devem estar em `snake_case`.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 12 - Sua aplicação deve ter o endpoint POST `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```


---

## 13 - Sua aplicação deve ter o endpoint GET `/post`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

---

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;

---

## 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de alterar um post do banco de dados, se ele existir;
- Sua aplicação só deve permitir a alteração de um blog post caso a pessoa seja dona dele;
- Sua aplicação não deve permitir a alteração das categorias do post, somente os atributos `title` e `content` podem ser alterados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

---

# Requisitos Bônus

## 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de deletar um blog post baseado no `id` do banco de dados se ele existir;
- Sua aplicação só deve permitir a deleção de um blog post caso a pessoa seja dona dele;

---

## 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/user/me`;
- O endpoint deve ser capaz de deletar você do banco de dados, baseado no `id` que esta dentro do seu `token`;
- Sua aplicação deve ser capaz de utilizar o token de autenticação nos headers, para saber o user logado correspondente á ser apagado;


---

## 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`

- ☝ Não esqueça de validar o `token` neste requisito, como descrito na seção de [Validando token nas requisições](#validandoToken);
- O endpoint deve ser acessível através do URL `/post/search`;
- O endpoint deve ser capaz de trazer os blogs post baseados no `q` do banco de dados, se ele existir;
- Sua aplicação deve ser capaz de retornar um array de blogs post que contenham em seu título ou conteúdo o termo passado na URL;
- Sua aplicação deve ser capaz de retornar um array vázio caso nenhum blog post satisfaça a busca;
