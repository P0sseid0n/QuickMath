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
pnpm install

# Execute em modo de desenvolvimento
pnpm dev
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Executar testes
pnpm test

# Executar testes com coverage
pnpm test --coverage
```

## 🎯 Funcionalidades

### Níveis de Dificuldade

-  **Fácil** (< 3): Soma e subtração
-  **Médio** (< 5): Soma, subtração e multiplicação
-  **Difícil** (< 8): Todas as operações básicas
-  **Expert** (≥ 8): Operações complexas com parênteses

### Características

-  ✅ Geração dinâmica de expressões matemáticas
-  ✅ Sistema de alternativas inteligente com distractores
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
│   └── difficultyLevels.ts   # Constantes de dificuldade
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

## 🧪 Testes

O projeto inclui testes abrangentes para:

-  ✅ Funções utilitárias de matemática
-  ✅ Componentes Vue
-  ✅ Store do Pinia
-  ✅ Cobertura de código

Execute os testes:

```bash
pnpm test
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎨 Interface

O jogo apresenta uma interface limpa e moderna com:

-  Design escuro e minimalista
-  Grid 2x2 para as opções de resposta
-  Fonte monoespaçada para melhor legibilidade
-  Transições suaves nos botões
-  Responsividade em diferentes dispositivos

---

Desenvolvido com ❤️ usando Nuxt 3
