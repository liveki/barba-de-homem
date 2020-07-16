# Barba de Homem

## Projeto desenvolvido durante a AGES 2020/1 em PUCRS para a barbearia Barba de Homem. 
<p>O projeto busca dar acesso a um serviço de estética masculina por profissionais especializados, para o público em geral. Para isto, foi desenvolvido um aplicativo que facilite o agendamento de serviços, controle de funcionários, e cadastro de clientes.</p>

### Tecnologias utilizadas

* Na versão *web* utilizamos [ReactJs](https://reactjs.org/), [Redux](https://redux.js.org/), *CSS* e *HTML*.
* O painel administrativo foi desenvolvido utilizando [ReactAdmin](https://marmelab.com/react-admin/).
* Para autenticação e integração entre as plataformas (*app* e painel *admin*) utilizamos [Firebase](https://firebase.google.com/).

### Funcionalidades

#### App:
- [x] Cadastro, autenticação e recuperação de senha;
- [x] Solicitação, avaliação e cancelamento de serviço;
- [ ] Integração com pagamentos;
- [x] *Push notification* com *firebase*;

#### Painel Admin:
- [x] Visualização de clientes;
- [x] CRUD barbeiro;
- [x] Visualização e confirmação de agendamentos;

### Instalando as dependências
Para instalar as dependências, basta executar um dos seguintes comandos dentro das pastas *backend*, *app* e *admin*:
```bash
npm install
# ou com yarn
yarn
```

## Configurando o projeto
Para que o projeto funcione corretamente, é necessário que você tenha um projeto criado no *firebase*. Após isso, basta entrar na pasta *web* e executar o seguinte comando:
```bash
firebaser login
# e depois
firebase init
```
Você pode saber mais sobre como configurar um projeto com *firebase* [aqui](https://firebase.google.com/docs/web/setup).
Repita o mesmo processo na pasta *admin* e *backend*.

## Rodando o projeto
Para rodar o projeto, basta executar um dos comandos a seguir nos três módulos(*admin*, *web* e *backend*):
```bash
npm run start
# ou com yarn
yarn start
```

### Tela inicial do app:
![Imgur](https://i.imgur.com/GZjKd9m.png)
