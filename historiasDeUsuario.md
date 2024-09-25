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

COMO usuário<br>
QUERO realizar meu cadastro na aplicação<br>
PARA possuir uma conta pessoal na aplicação<br>

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro realizado com sucesso

**Dado** que o usuário está na página inicial da aplicação<br>
**Quando** o usuário clica em "Faça seu cadastro"<br>
**E** acessa a página de realização de cadastro<br>
**E** preenche todos os dados obrigatórios indicados<br>
**E** confirma seu cadastro<br>
**Então** o usuário é cadastrado na aplicação<br>
**E** é redirecionado para a página de login<br>

#### Cenário 2: Falha na realização do cadastro

**Dado** que o usuário está na página inicial da aplicação<br>
**Quando** clica em Cadastre-se/Faça seu cadastro<br>
**E** acessa a página de realização de cadastro<br>
**MAS** não preenche todos os dados obrigatórios indicados<br>
**Então** uma mensagem de erro deve ser exibida, informado que há dados faltando,<br>
**E** o usuário deve preencher o dado que falta para concluir cadastro<br>


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO realizar login utilizando meu nome de login (ou email) e senha<br>
PARA entrar na aplicação com minha conta pessoal<br>

### **Critérios de Aceitação:**
#### Cenário 1: Realizar login com sucesso

**Dado** que o usuário está na página inicial de login<br>
**E** ele já possua uma conta cadastrada<br>
**Quando** o usuário entra com seu nome de login (ou email) e senha<br>
**E** digita corretamente tanto o nome de login (ou email), quanto a senha<br>
**Então** o usuário acessa a aplicação<br>
**E** abre a página do dashboard<br>

#### Cenário 2: Não realiza login usando usuário e/ou senha incorretos

**Dado** que o usuário está na página inicial de login<br>
**E** ele já possua uma conta cadastrada<br>
**Quando**  o usuário entra com seu nome de login (ou email) e senha<br>
**MAS** digita incorretamente o nome de login (ou email) ou a senha<br>
**Então** uma mensagem é exibida informando que o nome de login (ou email) ou a senha estão incorretos<br>
**E** o sistema permite que o usuário digite novamente seu login<br>


### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO alterar minha senha inserida anteriormente<br>
PARA utilizar uma nova senha na aplicação<br>

### **Critérios de Aceitação:**
#### Cenário 1: Alterar a senha com sucesso

**Dado** que o usuário está na página de login<br>
**E** ele já possui conta cadastrada<br>
**E** ele deseja alterar sua senha<br>
**Quando** ele clicar no botão “esqueceu a senha?”<br>
**E** digitar uma nova senha<br>
**E** confirmar a nova senha<br>
**Então** a senha do usuário será modificada<br>
**E** um pop-up de confirmação aparecerá na tela<br>
**E** o usuário será redirecionado para página de login<br>

#### Cenário 2: Falha na confirmação da nova senha

**Dado** que o usuário está na página de login <br>
**E** ele já possui conta cadastrada<br>
**E** ele deseja alterar sua senha<br>
**Quando** ele clicar no botão “esqueceu a senha?”<br>
**E** digitar uma nova senha<br>
**E** no campo de confirmação da nova senha digitar uma senha diferente do campo nova senha<br>
**Então** uma mensagem será exibida dizendo que os campos não podem ser diferentes<br>
**E** o sistema permite que o usuário tente alterar sua senha novamente<br>

### **Prioridade:**
Baixa

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento de interface de login e de cadastro (HU-00X);<br>
Dependência 2: Integração com o sistema de armazenamento de dados de cadastro e de login no banco de dados (HU-00X);<br>
Dependência 3: Desenvolvimento de interface de alterar a senha (HU-00X);<br>

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

COMO usuário<br>
QUERO acessar página de realização de Novo Cadastro<br>
PARA realizar novo cadastro de animal<br>

### **Critérios de Aceitação:**
#### Cenário 1: Acesso à página de cadastro feito com sucesso

**Dado** que o usuários está na página do dashboard<br>
**E** ele deseja cadastrar um novo animal<br>
**Quando** ele clica no ícone de novo cadastro<br>
**Então** o usuário é redirecionado para página de novo cadastro<br>
**E** o usuário pode cadastrar novos animais<br>

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

COMO usuário<br>
QUERO acessar página de formulários de animais cadastrados<br>
PARA visualizar a página com a lista completa de formulários de animais cadastrados<br>

### **Critérios de Aceitação:**
#### Cenário 1: Pesquisa por animal feita com sucesso

**Dado** que o usuário está no dashboard<br>
**E** deseja acessar a página de formulários de animais cadastrados<br>
**Quando** ele clica na função de acessar animais cadastrados<br>
**Então** ele é redirecionado para página de acessar animais cadastrados<br>
**E** pode visualizar a lista completa de formulário de animais cadastrados<br>

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

COMO usuário<br>
QUERO que o sistema utilize informações do banco de dados<br>
PARA criar gráficos personalizados no Dashboard<br>


### **Critérios de Aceitação:**
#### Cenário 1: Dashboard retorna gráficos filtrados

**Dado** que busco as informações do filtro no banco de dados<br>
**Quando** as encontro<br>
**E** seleciono as informações de interesse<br>
**Então** e envio esses dados para a tela do usuário na forma de gráficos<br>

#### Cenário 2: Dashboard não retorna gráficos filtrados

**Dado** que busco as informações do filtro no banco de dados<br>
**E** as não encontro<br>
**Então** uma mensagem é enviada para o usuário(Nenhum resultado para esse filtro)<br>


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

COMO usuário<br>
QUERO visualizar dashboard interativo<br>
PARA visualizar dados personalizados sobre o rebanho cadastrado na aplicação<br>

### **Critérios de Aceitação:**
#### Cenário 1: Dashboard retorna gráficos filtrados

**Dado** que estou na página do dashboard<br>
**Quando** clico em filtros<br>
**E** seleciono o filtro que me interessa (peso, idade, sexo)<br>
**E** aperto em confirmar<br>
**Então** é retornado um gráfico sobre a situação do meu rebanho de acordo com o filtro<br>


#### Cenário 2: Dashboard direciona para os indivíduos pertencentes a determinada classe

**Dado** que estou analisando o peso dos animais<br>
**Quando** clico na amostra do gráfico que mostra os animais magros<br>
**Então** sou direcionado para uma página onde o perfil destes animais estão listados<br>
**E** posso acessar qualquer perfil<br>


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

COMO usuário<br>
QUERO visualizar dados meteorológicos interativos<br>
PARA saber informações sobre o clima<br>

### **Critérios de Aceitação:**
#### Cenário 1: API meteorológica retorna informações sobre o tempo

**Dado** que estou na página do dashboard<br>
**Quando** clico na aba de “meteorologia”<br>
**E** seleciono a data a ser analisada<br>
**Então** são retornadas informações sobre o clima desse dia<br>


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

COMO usuário<br>
QUERO cadastrar um novo animal<br>
PARA ter acessos aos seus dados e fazer o controle quando necessário<br>

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro de animal feito com sucesso

**Dado** que o usuários está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal<br>
**Quando** insere todos os dados do animal<br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**Então** o animais é cadastrado no sistema<br>
**E** o usuário pode acessar seus dados quando necessário<br>

#### Cenário 2: Falha no cadastro de animal 

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal<br>
**Quando** não insere todos os campos obrigatórios do cadastro<br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**Então** o cadastro não é efetuado com sucesso<br>
**E** o sistema exibe uma mensagem dizendo que todos os campos obrigatórios devem ser preenchidos<br>
**E** o sistema permite que o usuário tente cadastrar o animal novamente<br>

#### Cenário 3: Não confirmação do cadastro de animal 

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal<br>
**Quando** insere todos os campos obrigatórios do cadastro<br>
**E** clica no botão de confirmar cadastro<br>
**MAS** não confirma o cadastro no pop-up<br>
**Então** o usuário volta para a página de cadastro<br>
**E** os campos inseridos anteriormente permanecem preenchidos<br>
**E** o usuário pode editá-los ou voltar ao dashboard<br>

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO que o sistema me permita cadastrar novos animais com informações detalhadas<br>
PARA que eu possa gerenciar seu rebanho de forma eficiente.<br>

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro de animal feito com sucesso

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal <br>
**Quando** insere todos os dados do animal <br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**Então** o sistema armazena esses dados no banco de dados<br>
**E** gera uma página para esse novo formulário<br>

#### Cenário 2: Falha no cadastro de animal 

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal<br>
**Quando** não insere todos os campos obrigatórios do cadastro<br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**Então** o cadastro não é efetuado com sucesso<br>
**E** o sistema exibe uma mensagem dizendo que todos os campos obrigatórios devem ser preenchidos<br>
**E** o sistema permite que o usuário tente cadastrar o animal novamente<br>

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO que o sistema gere um QR Code referente ao cadastro de um novo animal<br>
PARA que o usuário possa utilizá-lo para impressão<br>
E futuro acesso do formulário desse animal via leitura de QR Code<br>

### **Critérios de Aceitação:**
#### Cenário 1: Geração de QR Code feita com sucesso

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal <br>
**Quando** insere todos os dados do animal<br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**E** visualiza a página do formulário do novo cadastro realizado<br>
**Então** o sistema gera um QR Code referente a esse cadastro<br>

#### Cenário 2: Falha inicial na geração do QR Code

**Dado** que o usuário está na página de novo cadastro<br>
**E** ele deseja cadastrar um novo animal <br>
**Quando** insere todos os dados do animal<br>
**E** clica no botão de confirmar cadastro<br>
**E** confirma o cadastro no pop-up<br>
**E** visualiza a página do formulário do novo cadastro realizado<br>
**MAS** não visualiza o QR Code gerado pelo sistema referente a esse cadastro<br>
**Então** o sistema exibe uma mensagem dizendo que não foi possível gerar o QR Code<br>
**E** permite que o usuário peça para que o sistema tente novamente gerar o QR Code<br>

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO que o sistema integre uma biblioteca de leitura QR Code<br>
PARA que o usuário possa escanear o código no brinco e realizar uma chamada à API para recuperar informações do animal correspondente.<br>

### **Critérios de Aceitação:**
#### Cenário 1: Leitura de QR Code feita com sucesso

**Dado** que o usuário está na página de leitura de QR Code<br>
**E** quer fazer a leitura do QR Code do brinco de um animal<br>
**Quando** o usuário usa sua câmera do celular para fazer a leitura<br>
**E** a leitura funciona corretamente<br>
**Então** o sistema escaneia esse QR Code<br>
**E** localiza no banco de dados o animal respectivo<br>
**E** redireciona o usuário ao formulário desse animal<br>

#### Cenário 2: Falha inicial na leitura do QR Code

**Dado** que o usuário está na página de leitura de QR Code<br>
**E** quer fazer a leitura do QR Code do brinco de um animal<br>
**Quando** o usuário usa sua câmera do celular para fazer a leitura<br>
**MAS** a leitura não funciona corretamente<br>
**Então** o sistema exibe uma mensagem dizendo que não foi possível ler  o QR Code<br>
**E** permite que o usuário execute a leitura pela câmera novamente<br>

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO escanear o QR Code do brinco do animal por meio da câmera do telefone celular<br>
PARA que eu seja redirecionado ao formulário específico desse animal.<br>

### **Critérios de Aceitação:**
#### Cenário 1: Leitura de QR Code feita com sucesso

**Dado** que o usuário está na página de leitura de QR Code<br>
**E** quer fazer a leitura do QR Code do brinco de um animal<br>
**Quando** o usuário usa sua câmera do celular para fazer a leitura<br>
**E** a leitura funciona corretamente<br>
**Então** o sistema deve escanear o QR Code<br>
**E** extrair as informações contidas nele<br>
**E** localiza no banco de dados o animal respectivo a aquele código<br>
**E** verifica o registro do animal que foi encontrado, fornecendo as informações correspondentes na tela seu celular<br>

#### Cenário 2: Falha inicial na leitura do QR Code

**Dado** que o usuário está na página de leitura de QR Code<br>
**E** quer fazer a leitura do QR Code do brinco de um animal<br>
**Quando** o usuário usa sua câmera do celular para fazer a leitura<br>
**MAS** a leitura não funciona corretamente<br>
**Então** o sistema exibe uma mensagem dizendo que não foi possível ler  o QR Code<br>
**E** permite que o usuário execute a leitura pela câmera novamente<br>

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO que o sistema tenha a função validar e processar QR Codes escaneados<br>
PARA garantir que os dados recebidos sejam precisos e consistentes.<br>

### **Critérios de Aceitação:**
#### Cenário 1: Validação bem-sucedida do QR Code

**Dado** que o usuário escaneou um QR Code<br>
**Quando** o sistema realiza a leitura<br>
**Então** o sistema deve validar a integridade do código<br>
**E** confirmar se o formato e os dados do QR Code são compatíveis com o padrão de código esperado.<br>

#### Cenário 2:
**Dado** que o QR Code escaneado é inválido<br>
**Quando** o sistema detecta a invalidade<br>
**Então** deve exibir uma mensagem de erro ao usuário<br>
**E** permite que o usuário execute a leitura pela câmera novamente<br>

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
9 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface de novo cadastro (HU-00X);<br>
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

COMO usuário<br>
QUERO pesquisar por um animal anteriormente cadastrado por meio de pesquisa nominal<br>
PARA ter acesso aos seus dados<br>

### **Critérios de Aceitação:**
#### Cenário 1: Pesquisa por animais feita com sucesso

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja pesquisar por animais cadastrados<br>
**E** clica na função pesquisar nominalmente por animal<br>
**Quando** ele digita o nome de um animal existente<br>
**E** clica no botão de pesquisar<br>
**Então** o sistema retorna todos os animais cadastrados com o nome pesquisado<br>
**E** o sistema permite que o usuário possa ver a lista dos animais.<br>

#### Cenário 2: Pesquisa por animais não retorna nenhum animal

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja pesquisar por animais cadastrados<br>
**E** clica na função pesquisar nominalmente por animal<br>
**Quando** ele digita o nome de um animal não cadastrado<br>
**E** clica no botão de pesquisar<br>
**Então** o sistema não retorna nenhum animal<br>
**E** o sistema emite uma mensagem dizendo que não há animais cadastrados com o nome pesquisado<br>

### **Prioridade:**
Alta

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface de animais cadastrados(HU-00X);<br>
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

COMO usuário<br>
QUERO pesquisar por um animais anteriormente cadastrado<br>
PARA ter acesso aos seus dados<br>

### **Critérios de Aceitação:**
#### Cenário 1: Filtragem de animais feita com sucesso

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja pesquisar por animais cadastrados por meio do uso de filtros<br>
**E** clica nos filtros de pesquisa de animais<br>
**Quando** o usuário seleciona os filtros desejados<br>
**E** clica no botão de “Filtrar”<br>
**Então** o sistema retorna uma lista com todos os animais cadastrados que se encaixam nos filtros.<br>

#### Cenário 2: Filtragem não retorna nenhum animal

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja pesquisar por animais cadastrados por meio do uso de filtros<br>
**E** clica nos filtros de pesquisa de animal<br>
**Quando** o usuário seleciona os filtros desejados<br>
**E** clica no botão de “Filtrar”<br>
**Então** o sistema não retorna nenhum animal<br> 
**E** o sistema emite uma mensagem dizendo que não há animais cadastrados que fazem parte dos filtros utilizados<br>

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de animais cadastrados(HU-00X);<br>
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

COMO usuário <br>
QUERO editar um formulário de um animal anteriormente cadastrado<br>
PARA atualizar seus dados no formulário<br>

### **Critérios de Aceitação:**
#### Cenário 1: Edição de formulário feita com sucesso

**Dado** que o usuário está em um formulário de um animal anteriormente cadastrado<br>
**E** deseja editar dados no presente formulário<br>
**E** clica no dado específico<br>
**Quando** o usuário edita esse dado<br>
**E** clica no botão de “Confirmar”<br>
**Então**  o sistema emite uma mensagem informando da atualização de edição feita com sucesso<br>
**E** o sistema atualiza o formulário do animal cadastrado com as novas informações inseridas nessa edição.<br>

#### Cenário 2: Edição de formulário incompleta

**Dado** que o usuário está em um formulário de um animal anteriormente cadastrado<br>
**E** deseja editar dados no presente formulário<br>
**E** clica no dado específico<br>
**Quando** o usuário edita esse dado<br>
**E** clica no botão de “Confirmar”<br>
**MAS** ele inseriu um dado não essencial fora do padrão<br>
**Então**  o sistema emite uma mensagem informando de falha na edição<br>
**E** pedindo que o usuário verifique novamente os novos dados inseridos<br>
**E** o sistema não atualiza o formulário do animal cadastrado com as novas informações inseridas nessa edição.<br>

### **Prioridade:**
Média

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface do formulário de animal cadastrado (HU-00X);<br>
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

COMO usuário <br>
QUERO excluir um animal cadastrado anteriormente<br>
PARA manter atualizada a base de dados do meu rebanho<br>

### **Critérios de Aceitação:**
#### Cenário 1: Exclusão de cadastro animal 

**Dado** que o usuário está na página de animais cadastrados <br>
**E** deseja excluir um animal do banco de dados<br>
**Quando** o usuário pesquisa pelo animal em questão<br>
**E** clica em seu formulário de cadastro<br>
**E** clica no botão “excluir cadastro”<br>
**E** um pop-up surge perguntando se o usuário realmente deseja prosseguir<br>
**E** o usuário clica em “confirmar”<br>
**Então** o animal cadastrado é excluído do sistema<br>
**E** seu histórico fica salvo para análises métricas posteriores<br>

#### Cenário 2: Desistência da exclusão de cadastro animal 

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja excluir um animal do banco de dados<br>
**Quando** o usuário pesquisa pelo animal em questão<br>
**E** clica em seu cadastro<br>
**E** clica no botão “excluir cadastro”<br>
**E** um pop-up surge perguntando se o usuário realmente deseja prosseguir<br>
**MAS** o usuário clica em “cancelar”<br>
**Então** o animal cadastrado permanece no sistema<br>
**E** o usuário retorna para o cadastro do animal em questão<br>

### **Prioridade:**
 Média

### **Estimativa de Esforço:**
8 story points 

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de animais cadastrados(HU-00X);<br>
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

COMO usuário <br>
QUERO obter o arquivo em PDF com os dados do animal em questão<br>
PARA utilizar o arquivo para diferentes finalidades<br>

### **Critérios de Aceitação:**
#### Cenário 1: Obtenção do arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados <br>
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão <br>
**Quando** o usuário pesquisa pelo animal em questão<br>
**E** clica em seu cadastro<br>
**E** clica no botão “obter PDF”<br>
**Então** uma página é gerada com o arquivo PDF aberto<br>
**E** o arquivo é baixado no dispositivo do usuário<br>

#### Cenário 2: Erro ao abrir o arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão<br>
**Quando** o usuário pesquisa pelo animal em questão<br>
**E** clica em seu cadastro<br>
**E** clica no botão “obter PDF”<br>
**MAS** um erro acontece pela ausência de conexão com a internet”<br>
**Então** o usuário retorna para a página do animal em questão cadastrado<br>
**E** o arquivo PDF não é criado

#### Cenário 3: Erro ao baixar o arquivo PDF com os dados cadastrados do animal em questão

**Dado** que o usuário está na página de animais cadastrados<br>
**E** deseja obter o  arquivo PDF com os dados cadastrados do animal em questão<br>
**Quando** o usuário pesquisa pelo animal em questão<br>
**E** clica em seu cadastro<br>
**E** clica no botão “baixar PDF”<br>
**MAS** um erro acontece por exeder o espaço de armazenamento do dispositivo do usuário<br>
**Então** o usuário retorna para a página do animal cadastrado em questão<br>
**E** o arquivo PDF é criado <br>
**E** a página é aberta<br>
**MAS** o arquivo não é baixado no dispositivo do usuário<br>

### **Prioridade:**
 Baixa

### **Estimativa de Esforço:**
8 story points

### **Dependências:**
Dependência 1: Desenvolvimento da interface da página de bovinos cadastrados(HU-00X);<br>
Dependência 2: Integração com o sistema de armazenamento de dados de bovinos no banco de dados (HU-00X);

### **Notas / Comentários adicionais:**
Ao criar o arquivo PDF, uma página distinta na web deve ser aberta e, paralelamente, o arquivo deve ser baixado no dispositivo do usuário
