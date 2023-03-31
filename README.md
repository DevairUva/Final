# Projeto em grupo do Módulo 6 - PROGRAMADORES CARIOCAS
### Integrantes do SQUAD
- <a href="https://github.com/Ana21ah">Ana Clara</a> - Pessoa Gestora do Conhecimento
- <a href="https://github.com/carolrc">Carolina Rocha</a> - Pessoa Co-Facilitadora
- <a href="https://github.com/DevairUva">Devair Martins</a> - Pessoa Gestora de Gente e Engajamento
- <a href="https://github.com/isabelaalvesc">Isabela Alves</a> - Colaborador I 
- <a href="https://github.com/WashLigel">Washington Ligel</a> - Colaborador II
##
### Proposta
- Desenvolver propostas de APIs que serão o produto mínimo viável de um aplicativo. Escolher o tema do aplicativo para identificar as entidades, e definir quais são as entidades o projeto precisa contemplar.

##
### Requisitos
- ✅ Utilizar o padrão MVC;
- ✅ Utilizar os verbos HTTP seguindo o padrão REST;
- ✅ Implementar todas as operações de CRUD;
- ✅ Utilizar o padrão de projeto (design pattern) DAO para abstração de transações no banco, com Promises;
- ✅ Utilizar o README.md do repositório para documentação, contendo informações como:
- ✅ Utilização de async/await para operações no banco (DAO);
- ✅ Ter o código fonte hospedado em um repositório no Github.
##
### Introdução ao projeto
- Nosso projeto é uma versão do site oficial do projeto Programadores Cariocas que foi idealizado pela Prefeitura do Rio de Janeiro. Nele disponibilizamos acesso à informações como notícias, locais dos polos de ensino, página de inscrição para novas turmas do projeto, inserção de cadastro de novos usuários, envio de e-mail com dúvidas e sugestões, entre outras funcionalidades.
> Disponível no repositório: [/DevairUva/Final](https://devairuva.github.io/Final/)
- Nosso backend está disponivel em banco de dados MySQL.
> Disponível no repositório: [/DevairUva/finalBack](https://github.com/DevairUva/finalBack)

- A API conta com as seguintes rotas/endpoints:
> [/Home](https://github.com/DevairUva/Final/#/)<br>
> [/Admim](https://github.com/DevairUva/Final/tree/main/src/components/admim.jsx)<br>
> [/Inscricao](https://github.com/DevairUva/Final/tree/main/src/components/inscricao.jsx)<br>
> [/Login](https://github.com/DevairUva/Final/tree/main/src/components/login.jsx)
> [/Nos](https://github.com/DevairUva/Final/tree/main/src/components/nos.jsx)
> [/NovoUsuario](https://github.com/DevairUva/Final/tree/main/src/components/novousuario.jsx)
> [/Pesquisa](https://github.com/DevairUva/Final/tree/main/src/components/pesquisa.jsx)
> [/Teste](https://github.com/DevairUva/Final/tree/main/src/components/teste.jsx)
- Cada rota conta com entidades pré definidas e cada uma delas conta com dois ou mais atributos.
<img src="/README/rotas.jpeg">

##
### Executando o projeto
- O projeto pode ser executado online acessado através do link <https://devairuva.github.io/Final/>
- O projeto também pode ser executado em servidor local, baixando uma cópia dos arquivos nos repositórios, acessando os links <https://github.com/DevairUva/Final> e <https://github.com/DevairUva/finalBack>.
- Após o download e a inicialização, será necessário utilizar os comandos a seguir no terminal.
>npm install<br>
>npm start
- O servidor local será iniciado no navegador.
##
# Programadores Cariocas
### Home:
<img src="/README/Home.png">
<img src="/README/Home2.png">
<img src="/README/Home3.png">
<i>A Home conta com a barra de navegação com ancoragem para as demais rotas. Possui espaço para logo. Além disso conta com um menu de cadastro, onde é possível visualizar os alunos, professores, um painel para visualização de um vídeo lincado diretamente do Youtube, podendo ser assistido da própria Home.</i><br><br>

### Login: 
<img src="/README/login.png"><br>
<i>A tela de login permite que o usuário informe seus dados de acesso ou até mesmo inicie um novo cadastro, caso seja necessário. O novo cadastro prode ser feito clicando na opção "Não tem cadastro? Crie sua conta".</i><br><br>

### Cadastro de usuário: 
<img src="/README/novousuario.png"><br>
<i>Ao clicar no botão para cadastrar da tela de login, uma página com um formulário é aberta. O usuário deve preencher os dados como indicado. Em caso de sucesso, poderá clicar em criar conta e concluir a operação. Caso contrário, o sistema irá indicar os campos que precisam ser digitados e/ou corrigidos.
</i><br><br>

### Inscreva-se: 
<img src="/README/inscricao.png"><br>
<i>Esta tela tem como objetivo cadastrar um novo aluno no projeto Programadores Cariocas. Esta operação não insere um novo usuário no sistema, apenas uma nova inscrição de aluno. Ao clicar no botão Inscreva-se no menu de navegação da Home, uma página com um formulário é aberta. O usuário deve preencher os dados como indicado. Em caso de sucesso, poderá clicar em concluir cadastro e concluir a operação. Caso contrário, o sistema irá indicar os campos que precisam ser digitados e/ou corrigidos. Após concluir o seu cadastro, o usuário recebe em seu e-mail a confirmação da sua inscrição.</i><br><br>

### Pesquisa de polos/unidades: 
<img src="/README/polos.jpeg"><br>
<img src="/README/polos2.jpeg"><br>
<i>Ao clicar no botão Polos no menu de navegação da Home, uma página com um formulário é aberta. Após selecionar a unidade que deseja pesquisar, o sistema mostra todos os dados da unidade na tela. Fazendo um push diretamente do banco de dados.</i><br><br>
<img src="/README/polos3.jpeg"><br>

### Admin:
<img src="/README/admin.jpeg"><br>
<i>Na página Admin, que é um acesso restrito apenas aos administradores do site, é possível visualizar o cadastro dos usuários, podendo alterar e/ou excluir. Ao lado ficam os botões: um para editar e o outro botão de Excluir.</i><br><br>
<img src="/README/admineditar.jpeg"><br>
<i>Ao clicar no botão editar, uma página é aberta com um formulário já preenchido com as informações atuais. O usuário deve selecionar a informação que deseja editar e ao final deve clicar no botão de confirmação. Se houver erro, o formulário informa ao usuário o que deve ser corrigido. Em caso de sucesso, o usuário é redirecionado para a página de visualização.</i><br><br>

### Deletar Cadastro
<img src="/README/adminexcluir.jpeg"><br>
<i>Ao clicar no botão Deletar Cadastro, uma página é aberta com um alerta informando que a exclusão de um cadastro é ireversível e questionado se o usuário deseja mesmo continuar a exclusão ou se deseja cancelar a operação.</i><br><br>
