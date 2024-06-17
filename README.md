
# Projeto Next.js com JSON Server

Este projeto foi criado com [Next.js](https://nextjs.org/) e inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Primeiro, clone o repositório na sua máquina. No terminal, use o seguinte comando para instalar as dependências do projeto:

```bash
npm install
# ou
npm i
```

Após instalar as dependências, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Usando o JSON Server

Foi utilizado o JSON Server para simular o consumo de uma API, permitindo realizar todos os processos de CRUD em um banco de dados. Isso pode ser visto no arquivo `db.json`, que tem o seguinte conteúdo inicial:

```json
{
  "motos": [
    {
      "id": "4e68",
      "code": "#0001",
      "model": "HONDA POP 110I",
      "status": "Em estoque",
      "price": "R$ 15.000,00",
      "color": "BRANCA"
    },
    {
      "id": "5867",
      "code": "#0002",
      "model": "HONDA 500X",
      "status": "Sem estoque",
      "price": "R$ 50.000,00",
      "color": "VERMELHA"
    },
    {
      "id": "f381",
      "code": "#0003",
      "model": "HONDA CB 300F TWISTER",
      "status": "Em trânsito",
      "price": "R$ 30.000,00",
      "color": "AZUL"
    }
  ]
}
```

Para que a interface consiga retornar os valores, é necessário que a API fake esteja rodando junto com o projeto. Isso pode ser feito com o seguinte comando:

```bash
npm run json-server
```

**Observação:** Para que esse comando funcione, é necessário adicionar o seguinte script no `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "json-server": "json-server --watch db.json --port 3001"
}
```

## Interfaces

A ideia inicial foi criar uma interface simplificada, com componentes reutilizáveis ao longo do desenvolvimento. As etapas do desenvolvimento foram:

- Criar a tela do painel das motos cadastradas.
- Criar a tela para cadastrar novas motos.
- Criar a tela para modificar/atualizar os dados de alguma moto.

## Learn More

Para saber mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!

