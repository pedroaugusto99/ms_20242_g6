### ms_20242_g6
Repositório definido para a manutenção do controle de versão dos artefatos do projeto de do Grupo 6, da disciplina de Modelagem de Software, ministrada pelo professor Gilmar Arantes, no semestre 2024-2.

### Nome do Projeto:
Rurallink

### Descrição:
O Rurallink trata-se de uma aplicação voltada para gerenciamento de recursos rurais focado em pecuária, que permite a criação de uma  conta pessoal de um usuário, que poderá cadastrar na aplicação dados sobre seu rebanho, criando formulários específicos para cada um, identificados por códigos e possuindo dados essenciais e não essenciais, sendo que esses últimos podem ser atualizados ao longo do tempo e mantidos no histórico da ficha do animal, com o objetivo de registrar informações importantes e que podem ser monitoradas ao longo do tempo.

### Problema
Muitos produtores rurais de pequeno e de médio porte realizam o registro de informações sobre seu rebanho de maneira manual, o que dificulta a gestão de dados referentes a esses animais. Foi identificado que aplicativos desta natureza são mais comumente destinados a produtores de grande porte e cuja usabilidade torna-se mais complexa e sendo feita por gerentes especializados, fato que distancia o público para o qual esta aplicação tem foco para o desenvolvimento.

### Objetivos da Solução
Proporcionar uma solução de fácil usabilidade ao usuário, sendo "user-friendly", que contenha o que o pequeno e médio produtor precisam para gerenciar dados sobre seu rebanho: criação de conta pessoal; cadastro do rebanho, incluindo geração de QR Code referente ao animal em específico; geração de formulário individual para cada cadastrado, com possibilidade de edição e de inclusão de novos dados para o monitoramento de - por exemplo - peso, vacinas, remédios, alimentação etc., além de geração de arquivo pdf referente a esse formulário; visualização de dashboard com gráficos personalizados, incluindo uma parte com um sistema meterológico integrado à aplicação.

### Grupo
Este projeto será desenvolvido pelos componentes do grupo 6:

|Matrícula|Nome|Usuário Git|
|---|---|---|
|202403089|PEDRO AUGUSTO RODRIGUES|[pedroaugusto99](https://github.com/pedroaugusto99)|
|202403075|HUGO PEREIRA BORGES|[HugoPBorges](https://github.com/HugoPBorges)|
|202403088|OMAR AL JAWABRI|[OmarJawabri](https://github.com/OmarJawabri)|
|202403094|STEPHANO SOARES VIGLIO|[StephanoViglio](https://github.com/StephanoViglio)|
|202403097|VINICIUS PEREIRA ESPÍNDOLA|[V1N1C1U5ESPINDOLA](https://github.com/V1N1C1U5ESPINDOLA)|

### Backlog do Produto

1. Cadastro de usuário (RF01).
2. Cadastro de rebanho (RF02).
3. Integração entre back-end e front-end da aplicação. 
4. Pesquisa de fichas de animais por meio de nome e de filtros (RF03).
5. Atualização de dados em fichas de animais (RF04).
6. Página de tutorial e ícones informativos (RF05).
7. Geração, impressão e leitura de QR Code (RF06).
8. Geração de arquivos no formato "pdf" das fichas dos animais (RF07).
9. Geração de gráficos no dashboard interativo (RF08).

### Requisitos Funcionais

1. RF01 - O sistema deve permitir a realização de cadastro de usuário, informando que tipo de usuário será (proprietário de fazenda ou trabalhador rural), com formulário específico para cada tipo.
2. RF02 - O sistema deve permitir o cadastro de rebanho, com preenchimento de formulário com dados essenciais e não essenciais do animal, e deve criar ficha personalizada para cadastro realizado.
3. RF03 - O sistema deve possibilitar pesquisa e retorno de fichas de animais cadastrados por meio de pesquisa nominal ou por meio de filtros de buscas.
4. RF04 - O sistema deve possibilitar que dados não essencias em uma ficha de um animal cadastrado sejam atualizados com novas informações, como novo peso (e mostrar seu histórico), tipo e data de vacina, tipo de remédio tomado, tipo e quantidade de ração, histórico médico.
5. RF05 - O sistema deve conter ícones informativos sobre características da aplicação e uma página com tutorial para uso.
6. RF06 - O sistema deve gerar um QR Code após o cadastro de novo animal, com possibilidade de impressão do código, e subsequente leitura de QR Code em tag presente fisicamente no gado, por exemplo nos brincos de plástico ou etiquetagem.
7. RF07 - O sistema deve gerar arquivos no formato "pdf" das fichas dos animais cadastrados.
8. RF08 - O sistema deve gerar gráficos com informações e estatísticas personalizadas sobre o rebanho, em um Dashboard interativo.

### Requisitos Não Funcionais

1. RNF01 - Usabilidade: O usuário deve encontrar, facilmente, o que deseja realizar no sistema (facilidade de uso).
2. RNF02 - Segurança: <Descrição do Requisito não Funcional>..
3. RNF03 - Desempenho: <Descrição do Requisito não Funcional>..
4. RNF04 - Confiabilidade: <Descrição do Requisito não Funcional>.
5. RNF05 - Manutenibilidade: <Descrição do Requisito não Funcional>.
6. RNF06 - Portabilidade: <Descrição do Requisito não Funcional>.
7. RNF07 - Conectividade: <Descrição do Requisito não Funcional>.

### Regras de Negócio
1. RN01 - <Descrição da Regra de Negócio>.
2. RN02 - <Descrição da Regra de Negócio>.
3. RN03 - <Descrição da Regra de Negócio>.
4. RN04 - <Descrição da Regra de Negócio>.
5. RN05 - <Descrição da Regra de Negócio>.

### Modelo Arquitetural
<Apresentar uma descrição sucinta do modelo arquitetural do Produto.>

### Modelo de Interfaces Gráficas
<Apresentar uma descrição sucinta do modelo de interfaces gráficas do Produto.>

### Tecnologia de Persistência de Dados
<Apresentar uma descrição sucinta do modelo de persistência do Produto.>

### Local do _Deploy_
O nosso planejamento inicial é hospedar nossa aplicação no [local a definir], sendo crucial para nossa escolha a facilidade de configuração e também os recursos ofertados na versão gratuita.

### Cronograma de Desenvolvimento

|Iteração|Descrição|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Concepção|10/09/2024|17/09/2024|Grupo 6|Concluída|
|2|Preparação|18/09/2024|01/10/2024|Grupo 6|Concluída|
|3|Itens do backlog <1,2,3>|02/10/2024|15/10/2024|Grupo 6|Em andamento|
|4|Itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|5|Itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|6|Apresentação do Projeto|19/11/2024|26/11/2024|Grupo 6|Programada|

### Iterações x Atividades
|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|0|Definição do grupo de trabalho|30/08/2024|03/09/2024|Grupo 6|Concluída|
|0|Definição do Tema do Trabalho|30/08/2024|03/09/2024|Grupo 6|Concluída|
|1|Definição do Backlog do produto|03/09/2024|10/09/2024|Grupo 6|Concluída|
|1|Descrição dos itens do backlog do produto|10/09/2024|17/09/2024|Grupo 6|Concluída|
|2|Especificação de Histórias de Usuário|18/09/2024|01/10/2024|Grupo 6|Concluída|
|2|Distribuição dos itens do backlog entre as iterações|18/09/2024|01/10/2024|Grupo 6|Concluída|
|3|Definição do modelo arquitetural|02/10/2024|15/10/2024|Grupo 6|Programada|
|3|Diagrama de classes dos itens do backlog <1,2>|02/10/2024|15/10/2024|Grupo 6|Programada|
|3|Diagrama de interação/sequencia dos itens do backlog <1,2>|02/10/2024|15/10/2024|Grupo 6|Programada|
|3|Projeto de Interfaces gráficas dos itens do backlog <1,2>|02/10/2024|15/10/2024|Grupo 6|Em andamento|
|3|Projeto de persistência dos itens do backlog <1,2>|02/10/2024|15/10/2024|Grupo 6|Programada|
|3|Implementação dos itens do backlog <1,2,3>|02/10/2024|15/10/2024|Grupo 6|Em andamento|
|4|Diagrama de classes dos itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|4|Diagrama de interação/sequencia dos itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|4|Projeto de Interfaces gráficas dos itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|4|Projeto de persistência dos itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|4|Implementação dos itens do backlog <4,5,6>|16/10/2024|29/10/2024|Grupo 6|Programada|
|5|Diagrama de classes dos itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|5|Diagrama de interação/sequencia dos itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|5|Projeto de Interfaces gráficas dos itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|5|Projeto de persistência dos itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|5|Implementação dos itens do backlog <7,8,9>|30/10/2024|12/11/2024|Grupo 6|Programada|
|6|Apresentação do Projeto|19/11/2024|26/11/2024|Grupo 6|Programada|
