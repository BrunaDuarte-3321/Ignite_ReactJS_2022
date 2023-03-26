<h1 align="center">Desafio Frontend – Gama Academy</h1>
<br/>

  ![Perfils](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/readme.png)

<hr />

**Índice**


- Introdução

- Tecnologias utilizadas
- Ferramentas utilizadas
- Funcionalidade do projeto
- Acesso ao projeto
- Desenvolvimento

<hr />

 

**⚙️ Introdução**

<p>
  A solução de frontend apresentada consiste em uma interface para aplicação de provas ao usuário, onde ele deve se identificar, selecionar uma prova dentre as disponíveis e responder a mesma, e ao final verificar sua pontuação. A interface encontra-se responsiva proporcionado a comodidade de utilização em dispositivos com tamanhos de tela diferentes. Utilizei alguns conceitos de UI Designer ao criar as telas, visando proporcionar um ambiente agradável e intuitivo ao usuário. Utilizei também a paleta de cores da Gama Academy fornecida.
</p>

**🖥️ Tecnologias utilizadas**

<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 

<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png" alt="TypeScript" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://velog.velcdn.com/images/task11/post/c61baa51-659b-483b-93d7-4d433d516240/image.png" alt="react" width="40" height="40"/>
<img src="https://logospng.org/wp-content/uploads/figma.png" alt="react" width="40" height="40"/>
<img src="https://vitejs.dev/logo-with-shadow.png" alt="react" width="40" height="40"/>


</p>

<hr />


**🛠️ Ferramentas utilizadas**

-  Figma  - O escolhi por ser uma aplicação bastante acessível, pratica e intuitiva e por já ter familiaridade com a mesma. Ao idealizar a interface, fui criando componentes com os itens para facilitar a montagem de cada tela, reaproveitando alguns como botão etc, e apenas editando outros. otimizando assim a estruturação do Html, pois facilitou o entendimento e criação do código posteriormente. Também usei o Plugin Color Styleguide, pois ele gera uma Page Colors, dentro do figma onde disponibiliza todas as cores usadas na biblioteca do projeto em nos formatos (hex, hsl, rgb). Facilitando assim a estilização. Como fiz ao usar o RGB de algumas cores para estilizar alguns Hovers, enquanto no restante do projeto utilizei no formato hexadecimal.


- VSCode - Por ser uma das IDEs mais comum no ambiente de desenvolvimento, escolhi por sua facilidade de uso, suas extensões e integrações que ajudam na otimização de tempo e qualidade código.

<hr />

** Funcionalidades do projeto**

<p>
O usuário deve realizar sua identificação na tela inicial, essa identificação fica registrada no Header da página, junto ao logo e ao botão de saída da aplicação. Na próxima tela, ele ira selecionar a prova disponível e então deve ir avançando as telas após selecionar uma da alternativas como resposta. Em sua última tela será mostrado ao usuário a quantidade total de acertos, bem como duas opções de ação: Tentar novamente (retorna a primeira questão) ou finalizar (retorna a página de seleção de provas disponíveis).
</p>

<hr />

**🔖 Layout**

Você pode visualizar o layout do projeto através do   <a href="https://www.figma.com/file/CUwAL52CCnCYIzfrOSEPV7/Teste-Frontend---Gama-Academy?node-id=0%3A1">Link<a/>. É necessário ter conta no Figma para acessá-lo.

<hr />

**📂 Acesso ao projeto**

Você pode acessar o projeto baixando ou clonando pelo meu Github e iniciando na IDE de sua preferência, onde no terminal deve digitar o comando:

```
npm i
```

Após a instalação de todas as dependências, executar o comando:

```
npx json-server https://gist.githubusercontent.com/jcbombardelli/c9286579e36f986ea505c6c31619fe39/raw/7d3fe3e95ed8aed2af629564183d9b08c761ad59/db.json
```

Com outro terminal aberto, iniciar o projeto com:

```
npm  run dev
```

<hr />


**🛠Desenvolvimento**

Para devolvimento da aplicação, foram utilizadas as seguintes bibliotecas:


React Hook Form - Para para manipulação dos dados do usuário informado nos input (evento onChange), no componente de Register da page Home;

Zod - Para validação do formulário de registro.;


Como o projeto foi dividido em vários componentes, para troca de informações entre eles, foi criando um context.

Na page Home, usamos o react-hook-form junto com o context para salvar os dados do usuário que ira realizar os testes disponíveis.



Após se cadastrar, o usuário sera direcionado para segunda tela da aplicação, o componente SelectTest, onde foi utilizado context dos testes disponível.



Componente Questions, podemos fazer uma validação para que cada pergunta tenha suas respectivas alternativas. Através dessas validações foi possível pegar a alternativa escolhida pelo usuário e fazer a soma de acertos.




Componente Result, é a última parte da aplicação, onde o usuário poderá ver sua pontuação de acerto, e escolher se quer refazer o teste ou finalizar.



### Demonstração projeto

- Tela principal:

![Log in](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/tela1.png)

  
  - Provas Disponiveis
  
  ![Lognn](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/tela2.png)
  
  
 - Alternativas
  
  ![Perfils](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/tela3.png)
  
 - Alternativa selecionada
  
  ![Perfils](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/tela4.png)
  
  - Resultado
  
  ![Perfils](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/tela5.png)
    
  - Telas responsivas 
  
   ![Perfils](https://github.com/BrunaDuarte-3321/teste_frontendjr_gama/blob/main/src/images/responsivo.png)