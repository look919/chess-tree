import { Move } from '../utils';
import { e5SideLines } from './e5';
import { frenchMoves } from './french';
import { queensGambit } from './queensGambit';
import { trompowskyMoves } from './trompowsky';

export const whiteMoves: Move = {
  notation: 'd4',
  move: ['d2', 'd4'],
  children: [
    {
      moveNumber: 1,
      notation: 'd5',
      move: ['d7', 'd5'],
      children: [queensGambit],
    },
    e5SideLines,
    frenchMoves,
    trompowskyMoves,
  ],
};
