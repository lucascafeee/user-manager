# Template React + Vite

Este é um modelo que fornece uma configuração mínima para trabalhar com React no Vite, incluindo suporte a HMR (Hot Module Replacement) e algumas regras do ESLint.

## Plugins Disponíveis

Atualmente, existem dois plugins oficiais disponíveis:

- **@vitejs/plugin-react:** Utiliza o Babel para Fast Refresh.
- **@vitejs/plugin-react-swc:** Utiliza o SWC para Fast Refresh.

## Projeto

Este projeto é um aplicativo React que permite gerenciar uma lista de clientes. Ele oferece as seguintes funcionalidades:

- **Filtragem:** Os clientes podem ser filtrados com base no nome, sobrenome, CPF, status de assinatura e data de cadastro.
- **Ordenação:** Os clientes podem ser ordenados por ID, nome, sobrenome, CPF, status de assinatura ou data de cadastro.
- **Adição:** É possível adicionar novos clientes com nome, sobrenome, CPF, status de assinatura e data de cadastro.
- **Edição:** A edição de clientes ainda não foi implementada, mas está planejada para uma futura versão.
- **Exclusão:** Os clientes podem ser excluídos da lista.

O projeto utiliza o Vite como bundler e o ESLint para garantir boas práticas de codificação. Ele também inclui estilos CSS para uma aparência mais moderna e botões "Editar" e "Excluir" na tabela de clientes para facilitar a interação do usuário.

## Como Rodar o Projeto

Para rodar o projeto, siga estes passos:

1. Abra o terminal na pasta do projeto.
2. Execute `npm install` para instalar as dependências necessárias.
3. Depois que as dependências forem instaladas com sucesso, execute `npm run dev` para iniciar o servidor de desenvolvimento.

Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto em seu navegador. Certifique-se de ter o Node.js e o npm instalados em seu sistema antes de prosseguir com esses comandos.
