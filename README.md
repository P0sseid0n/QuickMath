# QuickMath

Jogo de cálculo mental contra o relógio. A cada rodada aparece uma expressão matemática e o jogador escolhe a resposta certa entre 4 alternativas.

**Jogue em:** https://quick-math-one.vercel.app

## 🎮 Como funciona

1. Na página inicial, clique em **Play**.
2. Uma expressão como `(12 + 7) × 3 = ?` aparece na tela, com 4 alternativas logo abaixo.
3. Acertou, ganha 10 pontos. Errou, a alternativa marcada fica vermelha. Nos dois casos, a próxima expressão aparece depois de 1 segundo.
4. Uma barra de tempo de 10 segundos mostra quanto tempo resta e fica vermelha nos últimos 3 segundos.

> Por enquanto, as partidas começam sempre na dificuldade 1 e o fim do tempo ainda não encerra a partida. Veja as [issues](https://github.com/P0sseid0n/QuickMath/issues) para o que está planejado.

## 🎯 Dificuldade

A dificuldade vai de 1 a 10 e controla as operações, o tamanho dos números e o tamanho da expressão.

| Nível | Dificuldades | Operações | Números |
| --- | --- | --- | --- |
| Fácil | 1–3 | `+` `−` | Só positivos, e a subtração nunca dá resultado negativo |
| Médio | 4–6 | `+` `−` `×` | Positivos e negativos |
| Difícil | 7–9 | `+` `−` `×` `÷` | Positivos e negativos |
| Expert | 10 | `+` `−` `×` `÷` | Positivos e negativos |

- **Tamanho dos números**: o maior valor possível dobra a cada nível (10, 20, 40...), até o limite de 200.
- **Tamanho da expressão**: o número de operações é igual à dificuldade, até o máximo de 5.
- **Parênteses**: cada operação tem 30% de chance de ser agrupada entre parênteses.
- **Alternativas erradas**: são geradas perto da resposta certa, numa faixa que cresce com o tamanho do resultado e diminui conforme a dificuldade aumenta. Assim, nos níveis mais altos, as opções ficam mais parecidas entre si.

## 🚀 Tecnologias

- **[Nuxt 4](https://nuxt.com)** com Vue 3 e TypeScript
- **[Pinia](https://pinia.vuejs.org)** para o estado da partida
- **[Tailwind CSS](https://tailwindcss.com)** para os estilos
- **[Math.js](https://mathjs.org)** para avaliar as expressões
- **[Nuxt Icon](https://github.com/nuxt/icon)** com os ícones [Phosphor](https://phosphoricons.com) e **[Nuxt Fonts](https://fonts.nuxt.com)** com a fonte Outfit
- **[Vitest](https://vitest.dev)** e Testing Library para os testes
- **[Bun](https://bun.sh)** como gerenciador de pacotes

## ⚙️ Rodando localmente

Requer o [Bun](https://bun.sh) instalado.

```bash
git clone https://github.com/P0sseid0n/QuickMath.git
cd QuickMath
bun install
bun run dev
```

O app sobe em http://localhost:3000.

### Scripts

| Comando | O que faz |
| --- | --- |
| `bun run dev` | Servidor de desenvolvimento |
| `bun run build` | Build de produção |
| `bun run preview` | Serve a build de produção localmente |
| `bun run generate` | Gera o site estático |
| `bun run test` | Roda os testes com Vitest |
| `bun run test --coverage` | Roda os testes com relatório de cobertura |

> Use `bun run test`, e não `bun test`: o `bun test` chama o test runner do próprio Bun, não o Vitest.

## 🏗️ Estrutura do projeto

```
app/
├── assets/main.css             # Variáveis de cor e estilos base
├── components/
│   ├── AppHeader.vue           # Header compartilhado entre as páginas
│   └── Game/
│       ├── Timer.vue           # Barra de tempo da rodada
│       └── Options/            # Grid 2x2 com as alternativas de resposta
├── constants/
│   ├── DifficultyLevels.ts     # Faixas de dificuldade (fácil, médio, difícil, expert)
│   └── GameMode.ts             # Modos de jogo
├── pages/
│   ├── index.vue               # Página inicial
│   └── game.vue                # Tela da partida
├── stores/
│   └── Game.ts                 # Estado da partida (expressão, pontuação, modo)
└── utils/
    └── math.ts                 # Geração e avaliação das expressões
```

### Store da partida

A store `useGameStore` (`app/stores/Game.ts`) expõe:

- `startMatch({ difficulty, mode })`: zera a pontuação e gera a primeira expressão
- `nextRound(isCorrect = true)`: soma pontos se acertou e gera a próxima expressão
- `addScore(points = 10)`: soma pontos à pontuação atual
- `expression`, `difficulty`, `score` e `mode`: estado da partida, somente leitura

### Tema

As cores ficam em variáveis CSS no `app/assets/main.css` (`--color-background`, `--color-button`, `--color-accent`, `--color-danger` e `--color-text`). No Tailwind, elas viram as classes `background`, `button`, `accent`, `danger` e `primary`.

## 🧪 Testes

Os testes ficam ao lado do código que testam:

- `app/utils/math.test.ts`: geração de expressões e faixa das alternativas
- `app/stores/Game.test.ts`: store da partida e pontuação
- `app/components/Game/Options/Button.nuxt.test.ts`: formatação das alternativas (testes `*.nuxt.test.ts` rodam no ambiente do Nuxt)

## 🤝 Contribuindo

As próximas features e ideias estão nas [issues](https://github.com/P0sseid0n/QuickMath/issues). Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Faça commit das mudanças e rode `bun run test`
4. Abra um Pull Request citando a issue relacionada

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [`LICENSE`](LICENSE).
