## **História de Usuário HU-1.1**
### **Autor e Data de Criação**
Stephano, 23/09/2024

### **Fluxo:**
Cadastro de usuário e login [1]

### **ID:**
HU-1.1

### **Título:**
Realizar cadastro de usuário na aplicação

### **Descrição**

COMO usuário
QUERO realizar meu cadastro na aplicação
PARA possuir uma conta pessoal na aplicação

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro realizado com sucesso

**Dado** que o usuário está na página inicial da aplicação
**Quando** o usuário clica em Cadastre-se/Faça seu cadastro
**E** acessa a página de realização de cadastro
**E** preenche todos os dados obrigatórios indicados
**E** confirma seu cadastro
**Então** o usuário é cadastrado na aplicação
**E** é redirecionado para a página de login

#### Cenário 2: Falha na realização do cadastro

**Dado** que o usuário está na página inicial da aplicação
**Quando** clica em Cadastre-se/Faça seu cadastro
**E** acessa a página de realização de cadastro
**MAS** não preenche todos os dados obrigatórios indicados
**Então** uma mensagem de erro deve ser exibida, informado que há dados faltando,
**E** o usuário deve preencher o dado que falta para concluir cadastro


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de cadastro e de login no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nada a declarar a priori;


## **História de Usuário HU-1.2**
### **Autor e Data de Criação**
Stephano, 23/09/2024;

### **Fluxo:**
Cadastro de usuário e login [1]

### **ID:**
HU-1.2

### **Título:**
Realizar login na aplicação

### **Descrição**

COMO usuário
QUERO realizar login utilizando meu nome de login (ou email) e senha
PARA entrar na aplicação com minha conta pessoal

### **Critérios de Aceitação:**
#### Cenário 1: Realizar login com sucesso

**Dado** que o usuário está na página inicial de login
**E** ele já possua uma conta cadastrada
**Quando** o usuário entra com seu nome de login (ou email) e senha
**E** digita corretamente tanto o nome de login (ou email), quanto a senha
**Então** o usuário acessa a aplicação
**E** abre a página do dashboard

#### Cenário 2: Não realiza login usando usuário e/ou senha incorretos

**Dado** que o usuário está na página inicial de login
**E** ele já possua uma conta cadastrada
**Quando**  o usuário entra com seu nome de login (ou email) e senha
**MAS** digita incorretamente o nome de login (ou email) ou a senha
**Então** uma mensagem é exibida informando que o nome de login (ou email) ou a senha estão incorretos
**E** o sistema permite que o usuário digite novamente seu login


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de cadastro e de login no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: a mensagem informando que o login está incorreto deve ser um pop-up no topo ou no centro da tela, com cor chamativa;

## **História de Usuário HU-1.3**
### **Autor e Data de Criação**
Omar, 23/09/2024;

### **Fluxo:**
Cadastro de usuário e login[1]

### **ID:**
HU-1.3

### **Título:**
Alterar a senha do usuário

### **Descrição**

COMO usuário
QUERO alterar minha senha inserida anteriormente
PARA utilizar uma nova senha na aplicação

### **Critérios de Aceitação:**
#### Cenário 1: Alterar a senha com sucesso

**Dado** que o usuário está na página de login
**E** ele já possui conta cadastrada
**E** ele deseja alterar sua senha
**Quando** ele clicar no botão “esqueceu a senha?”
**E** digitar uma nova senha
**E** confirmar a nova senha
**Então** a senha do usuário será modificada 
**E** um pop-up de confirmação aparecerá na tela
**E** o usuário será redirecionado para página de login

#### Cenário 2: Falha na confirmação da nova senha

**Dado** que o usuário está na página de login <br>
**E** ele já possui conta cadastrada
**E** ele deseja alterar sua senha
**Quando** ele clicar no botão “esqueceu a senha?”
**E** digitar uma nova senha
**E** no campo de confirmação da nova senha digitar uma senha diferente do campo nova senha
**Então** uma mensagem será exibida dizendo que os campos não podem ser diferentes
**E** o sistema permite que o usuário tente alterar sua senha novamente

### **Prioridade:**
Baixa

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de cadastro e de login no banco de dados (HU-00X);
Dependência 3: Desenvolvimento de interface de alterar a senha (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: a mensagem informando que as senhas não podem ser diferentes deve ser um pop-up na parte superior da tela com cores chamativas;

—------------------------------------------------------------------------------------------------------------------------------------

#FLUXO 2: Interação do usuário com as páginas dentro da aplicação

## **História de Usuário HU-2.1**
### **Autor e Data de Criação**
Omar, 23/09/2024;;

### **Fluxo:**
Interação do usuário com as páginas dentro da aplicação [2]

### **ID:**
HU-2.1

### **Título:**
Acessar página de realização de Novo Cadastro

### **Descrição**

COMO usuário
QUERO acessar página de realização de Novo Cadastro
PARA realizar novo cadastro de animal

### **Critérios de Aceitação:**
#### Cenário 1: Acesso à página de cadastro feito com sucesso

**Dado** que o usuários está na página do dashboard
**E** ele deseja cadastrar um novo animal
**Quando** ele clica no ícone de novo cadastro
**Então** o usuário é redirecionado para página de novo cadastro
**E** o usuário pode cadastrar novos animal s

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de dashboard e novo cadastro (HU-00X);

### **Notas / Comentários adicionais:**
Não há notas a priori

## **História de Usuário HU-2.2**
### **Autor e Data de Criação**
Omar, 23/09/2024;

### **Fluxo:**
Interação do usuário com as páginas dentro da aplicação [2]

### **ID:**
HU-2.2

### **Título:**
Acessar página de formulários de animais cadastrados

### **Descrição**

COMO usuário
QUERO acessar página de formulários de animais cadastrados
PARA visualizar a página com a lista completa de formulários de animais cadastrados

### **Critérios de Aceitação:**
#### Cenário 1: Pesquisa por animal feita com sucesso

**Dado** que o usuário está no dashboard
**E** deseja acessar a página de formulários de animais cadastrados
**Quando** ele clica na função de acessar animais cadastrados
**Então** ele é redirecionado para página de acessar animais cadastrados
**E** pode visualizar a lista completa de formulário de animais cadastrados

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface de dashboard e rebanho cadastrado (HU-00X);

### **Notas / Comentários adicionais:**
Não há notas a priori.

## **História de Usuário HU-2.3**
### **Autor e Data de Criação**
Hugo, 24/09/2024

### **Fluxo:**
Interação do usuário com as páginas dentro da aplicação [2]

### **ID:**
HU-2.3

### **Título:**
Acessar página de Dashboard interativo

### **Descrição**

COMO usuário
QUERO que o sistema utilize informações do banco de dados
PARA criar gráficos personalizados no Dashboard


### **Critérios de Aceitação:**
#### Cenário 1: Dashboard retorna gráficos filtrados

**Dado** que busco as informações do filtro no banco de dados
**Quando** as encontro
**E** seleciono as informações de interesse
**Então** e envio esses dados para a tela do usuário na forma de gráficos

#### Cenário 2: Dashboard não retorna gráficos filtrados

**Dado** que busco as informações do filtro no banco de dados
**E** não encontro elas
**Então** uma mensagem é enviada para o usuário(Nenhum resultado para esse filtro)


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1; é necessário que o sistema de cadastro e banco de dados estejam funcionando de forma plena 

### **Notas / Comentários adicionais:**
Sem Comentários adicionais


## **História de Usuário HU-2.4**
### **Autor e Data de Criação**
Hugo, 24/09/2024

### **Fluxo:**
Interação do usuário com as páginas dentro da aplicação [2]

### **ID:**
HU-2.3

### **Título:**
Acessar página de Dashboard interativo

### **Descrição**

COMO usuário
QUERO visualizar dashboard interativo
PARA visualizar dados personalizados sobre o rebanho cadastrado na aplicação

### **Critérios de Aceitação:**
#### Cenário 1: Dashboard retorna gráficos filtrados

**Dado** que estou na página do dashboard
**Quando** clico em filtros
**E** seleciono o filtro que me interessa (peso, idade, sexo)
**E** aperto em confirmar
**Então** é retornado um gráfico sobre a situação do meu rebanho de acordo com o filtro


#### Cenário 2: Dashboard direciona para os indivíduos pertencentes a determinada classe

**Dado** que estou analisando o peso dos animais 
**Quando** clico na amostra do gráfico que mostra os animais magros
**Então** sou direcionado para uma página onde o perfil destes animais estão listados
**E** posso acessar qualquer perfil


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1; é necessário que o sistema de cadastro e banco de dados estejam funcionando de forma plena 

### **Notas / Comentários adicionais:**
Sem Comentários adicionais


## **História de Usuário HU-2.5**
### **Autor e Data de Criação**
Hugo, 24/09/2024

### **Fluxo:**
Interação do usuário com as páginas dentro da aplicação [2]

### **ID:**
HU-2.3

### **Título:**
Visualizar dados meteorológicos no Dashboard interativo

### **Descrição**

COMO usuário
QUERO visualizar dados meteorológicos interativos
PARA não ser surpreendido pelo clima

### **Critérios de Aceitação:**
#### Cenário 1: API meteorológica retorna informações sobre o tempo

**Dado** que estou na página do dashboard
**Quando** clico na aba de “meteorologia”
**E** seleciono a data a ser analisada
**Então** são retornadas informações sobre o clima desse dia


### **Prioridade:**
Baixa

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1; é necessário que a API seja integrada ao sistema 


### **Notas / Comentários adicionais:**
Sem Comentários adicionais



—------------------------------------------------------------------------------------------------------------------------------------

#FLUXO 3: Cadastro, pesquisa e edição de formulário de animais

## **História de Usuário HU-3.1**
### **Autor e Data de Criação**
Omar, 23/09/2024;;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.1

### **Título:**
Cadastrar um novo animal na perspectiva do usuário

### **Descrição**

COMO usuário
QUERO cadastrar um novo animal 
PARA ter acessos aos seus dados e fazer o controle quando necessário

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro de animal feito com sucesso

**Dado** que o usuários está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** insere todos os dados do animal 
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**Então** o animais é cadastrado no sistema
**E** o usuário pode acessar seus dados quando necessário

#### Cenário 2: Falha no cadastro de animal 

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** não insere todos os campos obrigatórios do cadastro
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**Então** o cadastro não é efetuado com sucesso
**E** o sistema exibe uma mensagem dizendo que todos os campos obrigatórios devem ser preenchidos
**E** o sistema permite que o usuário tente cadastrar o animal novamente

#### Cenário 3: Não confirmação do cadastro de animal 

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** insere todos os campos obrigatórios do cadastro
**E** clica no botão de confirmar cadastro
**MAS** não confirma o cadastro no pop-up
**Então** o usuário volta para a página de cadastro
**E** os campos inseridos anteriormente permanecem preenchidos
**E** o usuário pode editá-los ou voltar ao dashboard

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de confirmação do cadastro deve ser exibido na tela após o usuário clicar no botão de confirmar cadastro e deve ter cores fortes;


## **História de Usuário HU-3.2**
### **Autor e Data de Criação**
Pedro, 24/09/2024;;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.2

### **Título:**
Cadastrar um novo animal na perspectiva do sistema

### **Descrição**

COMO usuário
QUERO que o sistema me permita cadastrar novos animais com informações detalhadas
PARA que eu possa gerenciar seu rebanho de forma eficiente.

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro de animal feito com sucesso

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** insere todos os dados do animal
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**Então** o sistema armazena esses dados no banco de dados
**E** gera uma página para esse novo formulário

#### Cenário 2: Falha no cadastro de animal 

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** não insere todos os campos obrigatórios do cadastro
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**Então** o cadastro não é efetuado com sucesso
**E** o sistema exibe uma mensagem dizendo que todos os campos obrigatórios devem ser preenchidos
**E** o sistema permite que o usuário tente cadastrar o animal novamente

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de confirmação do cadastro deve ser exibido na tela após o usuário clicar no botão de confirmar cadastro e deve ter cores fortes


## **História de Usuário HU-3.3**
### **Autor e Data de Criação**
Pedro, 24/09/2024;;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.3

### **Título:**
Geração de QR Code

### **Descrição**

COMO usuário
QUERO que o sistema gere um QR Code referente ao cadastro de um novo animal
PARA que o usuário possa utilizá-lo para impressão
E futuro acesso do formulário desse animal via leitura de QR Code

### **Critérios de Aceitação:**
#### Cenário 1: Geração de QR Code feita com sucesso

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** insere todos os dados do animal
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**E** visualiza a página do formulário do novo cadastro realizado
**Então** o sistema gera um QR Code referente a esse cadastro

#### Cenário 2: Falha inicial na geração do QR Code

**Dado** que o usuário está na página de novo cadastro
**E** ele deseja cadastrar um novo animal 
**Quando** insere todos os dados do animal
**E** clica no botão de confirmar cadastro
**E** confirma o cadastro no pop-up
**E** visualiza a página do formulário do novo cadastro realizado
**MAS** não visualiza o QR Code gerado pelo sistema referente a esse cadastro
**Então** o sistema exibe uma mensagem dizendo que não foi possível gerar o QR Code
**E** permite que o usuário peça para que o sistema tente novamente gerar o QR Code

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de aviso de falha na geração do QR Code com o botão de tentar novamente gerá-lo deve ser exibido na tela após o usuário visualizar a página do formulário;

## **História de Usuário HU-3.4**
### **Autor e Data de Criação**
Pedro, 24/09/2024;;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.4

### **Título:**
Leitura de QR Code na perspectiva do sistema

### **Descrição**

COMO usuário
QUERO que o sistema integre uma biblioteca de leitura QR Code
PARA que o usuário possa escanear o código no brinco e realizar uma chamada à API para recuperar informações do animal correspondente.

### **Critérios de Aceitação:**
#### Cenário 1: Leitura de QR Code feita com sucesso

**Dado** que o usuário está na página de leitura de QR Code
**E** quer fazer a leitura do QR Code do brinco de um animal
**Quando** o usuário usa sua câmera do celular para fazer a leitura
**E** a leitura funciona corretamente
**Então** o sistema escaneia esse QR Code
**E** localiza no banco de dados o animal respectivo
**E** redireciona o usuário ao formulário desse animal

#### Cenário 2: Falha inicial na leitura do QR Code

**Dado** que o usuário está na página de leitura de QR Code
**E** quer fazer a leitura do QR Code do brinco de um animal
**Quando** o usuário usa sua câmera do celular para fazer a leitura
**MAS** a leitura não funciona corretamente
**Então** o sistema exibe uma mensagem dizendo que não foi possível ler  o QR Code
**E** permite que o usuário execute a leitura pela câmera novamente

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de aviso de falha de leitura do QR Code com o botão de tentar novamente gerá-lo deve ser exibido na tela após o usuário visualizar a página do formulário;

## **História de Usuário HU-3.5**
### **Autor e Data de Criação**
Pedro, 24/09/2024;;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.5

### **Título:**
Leitura de QR Code na perspectiva do usuário

### **Descrição**

COMO usuário
QUERO escanear o QR Code do brinco do animal por meio da câmera do telefone celular
PARA que eu seja redirecionado ao formulário específico desse animal.

### **Critérios de Aceitação:**
#### Cenário 1: Leitura de QR Code feita com sucesso

**Dado** que o usuário está na página de leitura de QR Code
**E** quer fazer a leitura do QR Code do brinco de um animal
**Quando** o usuário usa sua câmera do celular para fazer a leitura
**E** a leitura funciona corretamente
**Então** o sistema deve escanear o QR Code
**E** extrair as informações contidas nele
**E** localiza no banco de dados o animal respectivo a aquele código
**E** verifica o registro do animal que foi encontrado, fornecendo as informações correspondentes na tela seu celular

#### Cenário 2: Falha inicial na leitura do QR Code

**Dado** que o usuário está na página de leitura de QR Code
**E** quer fazer a leitura do QR Code do brinco de um animal
**Quando** o usuário usa sua câmera do celular para fazer a leitura
**MAS** a leitura não funciona corretamente
**Então** o sistema exibe uma mensagem dizendo que não foi possível ler  o QR Code
**E** permite que o usuário execute a leitura pela câmera novamente

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de aviso de falha de leitura do QR Code com o botão de tentar novamente gerá-lo deve ser exibido na tela após o usuário visualizar a página do formulário;

## **História de Usuário HU-3.X**
### **Autor e Data de Criação**
Pedro, 24/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.X

### **Título:**
Leitura de QR Codes válido do ponto de vista do sistema

### **Descrição**

COMO usuário
QUERO que o sistema tenha a função validar e processar QR Codes escaneados
PARA garantir que os dados recebidos sejam precisos e consistentes.

### **Critérios de Aceitação:**
#### Cenário 1: Validação bem-sucedida do QR Code

**Dado** que o usuário escaneou um QR Code
**Quando** o sistema realiza a leitura
**Então** o sistema deve validar a integridade do código
**E** confirmar se o formato e os dados do QR Code são compatíveis com o padrão de código esperado.

#### Cenário 2:
**Dado** que o QR Code escaneado é inválido
**Quando** o sistema detecta a invalidade
**Então** deve exibir uma mensagem de erro ao usuário
**E** permite que o usuário execute a leitura pela câmera novamente

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
9 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: O pop-up de aviso de código QR inválido deve ter um aspecto vermelho e deve sumir e voltar a página de formulário e uma nova realização de leitura deve ser permitida;


## **História de Usuário HU-3.6**
### **Autor e Data de Criação**
Omar, 23/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.6

### **Título:**
Pesquisar por animais cadastrados por meio de pesquisa nominal

### **Descrição**

COMO usuário
QUERO pesquisar por um animal anteriormente cadastrado por meio de pesquisa nominal
PARA ter acesso aos seus dados

### **Critérios de Aceitação:**
#### Cenário 1: Pesquisa por animais feita com sucesso

**Dado** que o usuário está na página de animais cadastrados
**E** deseja pesquisar por animais cadastrados
**E** clica na função pesquisar nominalmente por animal
**Quando** ele digita o nome de um animal existente
**E** clica no botão de pesquisar
**Então** o sistema retorna todos os animais cadastrados com o nome pesquisado
**E** o sistema permite que o usuário possa ver a lista dos animais.

#### Cenário 2: Pesquisa por animais não retorna nenhum animal

**Dado** que o usuário está na página de animais cadastrados
**E** deseja pesquisar por animais cadastrados
**E** clica na função pesquisar nominalmente por animal
**Quando** ele digita o nome de um animal não cadastrado
**E** clica no botão de pesquisar
**Então** o sistema não retorna nenhum animal 
**E** o sistema emite uma mensagem dizendo que não há animais cadastrados com o nome pesquisado

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de animais cadastrados(HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: A mensagem emitida quando não há animais cadastrados com o nome pesquisado deve ser um pop-up com cores chamativas que aparecerá no meio da tela;



## **História de Usuário HU-3.7**
### **Autor e Data de Criação**
Stephano, 24/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.7

### **Título:**
Pesquisar por animais cadastrado por meio do uso de filtros

### **Descrição**

COMO usuário
QUERO pesquisar por um animais anteriormente cadastrado
PARA ter acesso aos seus dados

### **Critérios de Aceitação:**
#### Cenário 1: Filtragem de animais feita com sucesso

**Dado** que o usuário está na página de animais cadastrados
**E** deseja pesquisar por animais cadastrados por meio do uso de filtros
**E** clica nos filtros de pesquisa de animais
**Quando** o usuário seleciona os filtros desejados
**E** clica no botão de “Filtrar”
**Então** o sistema retorna uma lista com todos os animais cadastrados que se encaixam nos filtros

#### Cenário 2: Filtragem não retorna nenhum animal

**Dado** que o usuário está na página de animais cadastrados
**E** deseja pesquisar por animais cadastrados por meio do uso de filtros
**E** clica nos filtros de pesquisa de animal
**Quando** o usuário seleciona os filtros desejados
**E** clica no botão de “Filtrar”
**Então** o sistema não retorna nenhum animal 
**E** o sistema emite uma mensagem dizendo que não há animais cadastrados que fazem parte dos filtros utilizados

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de animais cadastrados(HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: A mensagem emitida quando não há animais cadastrados com os filtros selecionados deve ser um pop-up com cores chamativas que aparecerá no meio da tela;


## **História de Usuário HU-3.8**
### **Autor e Data de Criação**
Stephano, 24/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.8

### **Título:**
Edição de formulário de animal cadastrado

### **Descrição**

COMO usuário
QUERO editar um formulário de um animal anteriormente cadastrado
PARA atualizar seus dados no formulário

### **Critérios de Aceitação:**
#### Cenário 1: Edição de formulário feita com sucesso

**Dado** que o usuário está em um formulário de um animal anteriormente cadastrado
**E** deseja editar dados no presente formulário
**E** clica no dado específico
**Quando** o usuário edita esse dado
**E** clica no botão de “Confirmar”
**Então**  o sistema emite uma mensagem informando da atualização de edição feita com sucesso
**E** o sistema atualiza o formulário do animal cadastrado com as novas informações inseridas nessa edição

#### Cenário 2: Edição de formulário incompleta

**Dado** que o usuário está em um formulário de um animal anteriormente cadastrado
**E** deseja editar dados no presente formulário
**E** clica no dado específico
**Quando** o usuário edita esse dado
**E** clica no botão de “Confirmar”
**MAS** ele inseriu um dado não essencial fora do padrão
**Então**  o sistema emite uma mensagem informando de falha na edição
**E** pedindo que o usuário verifique novamente os novos dados inseridos
**E** o sistema não atualiza o formulário do animal cadastrado com as novas informações inseridas nessa edição

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface do formulário de animal cadastrado (HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados, que permite edição no formulário (HU-00X);

### **Notas / Comentários adicionais:**
Nota 1: A mensagem emitida quando há falha na edição do formulário deve ser um pop-up com cores chamativas que aparecerá no meio da tela;


## **História de Usuário HU-3.9**
### **Autor e Data de Criação**
Vinícius, 24/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de animais [3]

### **ID:**
HU-3.9

### **Título:**
Exclusão de animal cadastrado

### **Descrição**

COMO usuário
QUERO excluir um animal cadastrado anteriormente
PARA manter atualizada a base de dados do meu rebanho

### **Critérios de Aceitação:**
#### Cenário 1: Exclusão de cadastro animal 

**Dado** que o usuário está na página de animais cadastrados 
**E** deseja excluir um animal do banco de dados
**Quando** o usuário pesquisa pelo animal em questão
**E** clica em seu formulário de cadastro
**E** clica no botão “excluir cadastro”
**E** um pop-up surge perguntando se o usuário realmente deseja prosseguir
**E** o usuário clica em “confirmar”
**Então** o animal cadastrado é excluído do sistema
**E** seu histórico fica salvo para análises métricas posteriores

#### Cenário 2: Desistência da exclusão de cadastro animal 

**Dado** que o usuário está na página de animais cadastrados 
**E** deseja excluir um animal do banco de dados
**Quando** o usuário pesquisa pelo animal em questão
**E** clica em seu cadastro
**E** clica no botão “excluir cadastro”
**E** um pop-up surge perguntando se o usuário realmente deseja prosseguir
**MAS** o usuário clica em “cancelar”
**Então** o animal cadastrado permanece no sistema
**E** o usuário retorna para o cadastro do animal em questão

### **Prioridade:**
 Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de animais cadastrados(HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de animais no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
A mensagem emitida quando o usuário deseja excluir o cadastro de um animais deve frisar que, uma vez excluído, o cadastro do animal não pode ser recuperado. Além disso, deve ser um pop-up com cores chamativas que aparecerá no meio da tela;


## **História de Usuário HU-3.10**
### **Autor e Data de Criação**
Vinícius, 24/09/2024;

### **Fluxo:**
Cadastro, pesquisa e edição de formulário de bovinos [3]

### **ID:**
HU-3.10

### **Título:**
Emissão de PDF com informações do animal em questão

### **Descrição**

COMO usuário
QUERO obter o arquivo em PDF com os dados do animal em questão
PARA utilizar o arquivo para diferentes finalidades

### **Critérios de Aceitação:**
#### Cenário 1: Obtenção do arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados 
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão
**Quando** o usuário pesquisa pelo animal em questão
**E** clica em seu cadastro
**E** clica no botão “obter PDF”
**Então** uma página é gerada com o arquivo PDF aberto
**E** o arquivo é baixado no dispositivo do usuário

#### Cenário 2: Erro ao abrir o arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados 
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão
**Quando** o usuário pesquisa pelo animal em questão
**E** clica em seu cadastro
**E** clica no botão “obter PDF”
**MAS** um erro acontece pela ausência de conexão com a internet”
**Então** o usuário retorna para a página do animal em questão cadastrado
**E** o arquivo PDF não é criado

#### Cenário 3: Erro ao baixar o arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados 
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão
**Quando** o usuário pesquisa pelo animal em questão
**E** clica em seu cadastro
**E** clica no botão “baixar PDF”
**MAS** um erro acontece por exeder o espaço de armazenamento do dispositivo do usuário
**Então** o usuário retorna para a página do animal cadastrado em questão
**E** o arquivo PDF é criado 
**E** a página é aberta
**MAS** o arquivo não é baixado no dispositivo do usuário

### **Prioridade:**
 Baixa

### **Estimativa de Esforço:**
8 story points (faço a mínima ideia de o que seja isso aqui)

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de bovinos cadastrados(HU-00X);
Dependência 2: Integração com o sistema de armazenamento de dados de bovinos no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Ao criar o arquivo PDF, uma página distinta na web deve ser aberta e, paralelamente, o arquivo deve ser baixado no dispositivo do usuário
