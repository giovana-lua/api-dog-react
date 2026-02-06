# React

Introdução:

O React é uma biblioteca JavaScript criada pelo Facebook (Meta) para construir interfaces de usuário (UI). Em vez de focar no site inteiro, ele foca nos elementos que você vê e interage.

Principais pontos do react:

- Componentização (O "Lego" da Programação):

No React, tudo é um componente. Em vez de escrever um código gigante, você quebra a interface em pedaços pequenos e reutilizáveis (como um botão, uma barra de busca ou um card de produto).

Vantagem: Facilita a manutenção e a organização do código.

- JSX (mistura de JavaScript + XML)

O React utiliza uma sintaxe chamada JSX, que permite escrever código que se parece com HTML dentro do JavaScript.

Isso torna a visualização da estrutura da interface muito mais intuitiva para o desenvolvedor.

- Virtual DOM (Velocidade)

O DOM (Document Object Model) é a estrutura da página no navegador. Manipular o DOM real é lento. O React cria uma cópia na memória, o Virtual DOM.

Quando algo muda, o React compara a cópia com o original e atualiza apenas o que mudou, em vez de recarregar a página inteira.

- Props

Props: São como argumentos passados para uma função. Servem para passar dados de um componente "pai" para um "filho".

- Unidirecionalidade

Os dados no React fluem em uma única direção: de cima para baixo. Isso torna o comportamento do aplicativo mais previsível e fácil de debugar. ( ou seja: Pais e filhos, um filho não pode mudar algo sozinho,  ele não tem permissão para alterar algo diretamente.)

### Desenho na lousa

exemplo:

Imagine um componente de **Carrinho de Compras** (Pai) e um **Botão de Deletar** (Filho):

- O **Pai** tem a lista de produtos.
- O **Pai** passa o nome do produto para o **Filho** via *props*.
- O **Filho** apenas exibe o nome. Ele não pode apagar o produto da lista diretamente.
- Quando clicado, o **Filho** chama uma função que o **Pai** deu a ele, e o **Pai** remove o item da lista.

O React é uma ferramenta que permite criar interfaces dinâmicas e rápidas através da criação de pequenos blocos (componentes) que reagem automaticamente a mudanças de dados.

—

Porque usa - lo? 

- **Reutilização de Código:** Você cria um botão ou um card uma única vez e o usa em todo o projeto.
- **Ecossistema Gigantesco:** Se você tiver um problema, alguém já resolveu e postou a solução no Stack Overflow. Além disso, há bibliotecas prontas para quase tudo (gráficos, formulários, animações).
- **Declarativo:** Você diz *o que* quer que apareça na tela, e o React cuida de *como* renderizar.
- **Curva de Aprendizado:** Para quem já domina JavaScript, o React é muito intuitivo.

Quando não usar? 

- **Sites Estáticos Simples:** Landing pages ultra básicas sem interação (um HTML e CSS puro resolvem com mais performance).
- **SEO é a única prioridade (sem frameworks auxiliares):** O React puro pode ter dificuldades de indexação. Nesses casos, usa-se Next.js.

## Requisitos do Ambiente

Antes de começar, você precisa ter instalado:

1. **Node.js:** O motor que vai rodar as ferramentas.
2. **Gerenciador de Pacotes:** Geralmente o **npm** (vem com o Node).

---

## 5. Comando de Criação e Execução

Antigamente usava-se o `create-react-app`, mas hoje a comunidade recomenda o **Vite** por ser muito mais rápido.

### Passo 1: Criar o projeto

Abra seu terminal e digite:

`npm create vite@latest meu-projeto-react` 

![](attachment:7e7faeab-6f18-49dd-b258-7eda8c6dcea8:Captura_de_tela_2026-01-30_150416.png)

### Passo 2: Acessar a pasta e instalar dependências

`cd meu-projeto-react
npm install`

![Captura de tela 2026-01-30 151013.png](attachment:8d849347-5c89-4d99-8bef-7ac8f6388ff2:Captura_de_tela_2026-01-30_151013.png)

### Passo 3: Executar localmente

`npm run dev`

Após rodar esse comando, o terminal vai te dar um link  `http://localhost:5173/`.

 É só abrir no navegador
