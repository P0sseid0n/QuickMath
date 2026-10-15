# QuickMath

Um jogo de matemática rápida desenvolvido com Nuxt 3, onde os jogadores resolvem expressões matemáticas de múltipla escolha com diferentes níveis de dificuldade.

## 🎮 Como Funciona

O jogo apresenta expressões matemáticas que o jogador deve resolver escolhendo entre 4 alternativas. As expressões são geradas dinamicamente baseadas no nível de dificuldade selecionado.

## 🚀 Tecnologias

-  **Nuxt 3** - Framework Vue.js
-  **Vue 3** - Framework JavaScript reativo
-  **Pinia** - Gerenciamento de estado
-  **TypeScript** - Tipagem estática
-  **Tailwind CSS** - Framework CSS utilitário
-  **Vitest** - Framework de testes
-  **MathJS** - Biblioteca para avaliação de expressões matemáticas

## ⚙️ Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd QuickMath

# Instale as dependências
bun install

# Execute em modo de desenvolvimento
bun run dev
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview da build
bun run preview

# Executar testes
bun run test

# Executar testes com coverage
bun run test --coverage
```

## 🎨 Interface

O jogo apresenta uma interface limpa e moderna com:

-  Design escuro e minimalista
-  Grid 2x2 para as opções de resposta
-  Fonte monoespaçada para melhor legibilidade
-  Transições suaves nos botões
-  Responsividade em diferentes dispositivos

## 🎯 Funcionalidades

### Níveis de Dificuldade

-  **Fácil** (< 3): Soma e subtração
-  **Médio** (< 5): Soma, subtração e multiplicação
-  **Difícil** (< 8): Todas as operações básicas
-  **Expert** (≥ 8): Operações complexas com parênteses

### Características

-  ✅ Geração dinâmica de expressões matemáticas
-  ✅ Sistema de alternativas inteligente com distractores
-  ✅ **Sistema de Pontuação** - Pontos são adicionados a cada resposta correta
-  ✅ Interface responsiva
-  ✅ Fonte ajustável baseada no tamanho da expressão
-  ✅ Testes unitários abrangentes
-  ✅ TypeScript para maior segurança de tipos

## 🏗️ Estrutura do Projeto

```
app/
├── components/
│   └── Game/
│       └── Options/          # Componentes das opções de resposta
├── constants/
│   └── DifficultyLevels.ts   # Constantes de dificuldade
│   └── GameMode.ts           # Constantes de modo de jogo
├── pages/
│   └── index.vue             # Página principal do jogo
├── stores/
│   └── Game.ts               # Store do Pinia para estado do jogo
└── utils/
    └── math.ts               # Utilitários matemáticos
```

## 🧮 Sistema de Geração de Expressões

O jogo utiliza um algoritmo inteligente para gerar:

1. **Expressões matemáticas** baseadas na dificuldade
2. **Alternativas plausíveis** usando perturbação controlada
3. **Validação** para evitar divisão por zero
4. **Formatação** adequada para inteiros e decimais

## 🏆 Sistema de Pontuação

O sistema de pontuação funciona da seguinte forma:

-  **10 pontos** são adicionados a cada resposta correta
-  A pontuação é exibida na tela principal do jogo
-  A pontuação é mantida durante toda a sessão de jogo
-  A lógica de pontuação está encapsulada na store para garantir integridade
-  **API pública da store:**
   -  `startMatch({ difficulty, mode })` - Inicia uma nova partida com a dificuldade e modo especificados
   -  `nextRound(isCorrect)` - Avança para a próxima rodada, adicionando pontos se isCorrect for true
   -  `score` - Valor atual da pontuação (readonly)
-  **Funções internas:** `addScore()` e `resetScore()` são mantidas privadas para evitar manipulação indevida da pontuação

## 🧪 Testes

O projeto inclui testes abrangentes para:

-  ✅ Funções utilitárias de matemática
-  ✅ Componentes Vue
-  ✅ Store do Pinia (incluindo sistema de pontuação)
-  ✅ Cobertura de código

Execute os testes:

```bash
bun run test
```

## 🚧 Roadmap - Próximas Features

### ✅ Concluído

-  ✅ **Sistema de Pontuação** - Sistema de pontos baseado em acertos (10 pontos por resposta correta)

### Em Desenvolvimento

#### Bugs

-  [x] Opacidade da cor do botao das opções de resposta
-  [x] Cor do background do botão ao acertar pensando em outros temas

#### Features

-  [ ] **Tela de Resultados** - Exibir resultados após cada jogo
-  [ ] **Temas de Jogo**
   -  [ ] Modo Contra o Tempo - Resolver o máximo de questões em tempo limitado
   -  [ ] Modo Infinito - Jogo contínuo com dificuldade progressiva
-  [ ] **Tela de Inicio** - Tela inicial com opções de jogo e configurações
-  [ ] **Melhorias no Sistema de Pontuação** - Pontuação baseada em tempo de resposta e dificuldade
-  [ ] **Login/Perfil de Usuário** - Sistema de cadastro e personalização do jogador
-  [ ] **Ranking de Usuários** - Placar global com melhores pontuações

### Ideias Futuras

-  [ ] Conquistas e badges
-  [ ] Multiplayer em tempo real
-  [ ] Estatísticas detalhadas de desempenho
-  [ ] Sistema de níveis e progressão
-  [ ] Personalização de temas e cores
-  [ ] Integração com redes sociais para compartilhamento de conquistas
-  [ ] Suporte a múltiplos idiomas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
