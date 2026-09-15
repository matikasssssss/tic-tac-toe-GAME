# Tic Tac Toe GAME

Juego de tres en línea (Tic Tac Toe) desarrollado con **React + Vite**.

## Composición del proyecto

```
tic-tac-toe-GAME/
├── index.html                  # HTML raíz que monta la app
├── package.json                # Dependencias y scripts (dev, build, lint, preview)
├── vite.config.js              # Configuración de Vite
├── eslint.config.js            # Configuración de ESLint
├── public/
│   └── favicon.svg             # Favicon de la aplicación
└── src/
    ├── main.jsx                # Punto de entrada de React
    ├── App.jsx                 # Componente principal (estado, turnos, ganador, reinicio)
    ├── App.css                 # Estilos del componente principal
    ├── index.css               # Estilos globales
    ├── constants.js            # Turnos (❌/⭕) y combinaciones ganadoras
    ├── assets/                 # Recursos estáticos
    ├── components/             # Componentes de React
    │   ├── Board.jsx           # Tablero de 3x3
    │   ├── Square.jsx          # Casilla individual
    │   ├── TurnSquare.jsx      # Indicador de turno actual
    │   └── WinnerModal.jsx     # Modal de victoria/empate
    └── logic/                  # Lógica del juego
        ├── board.js            # checkWinner y checkEndGame
        └── storage/
            └── storage.js      # Persistencia del juego en localStorage
```

## Características

- Partida guardada automáticamente en `localStorage`.
- Detección de ganador y empate.
- Confeti al ganar.
- Botón para reiniciar la partida.

## Scripts

```bash
npm install    # instalar dependencias
npm run dev    # servidor de desarrollo
npm run build  # build de producción
npm run preview # previsualizar el build
npm run lint   # linter con ESLint
```