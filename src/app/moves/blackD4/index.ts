import { Move } from '../utils';
import { queensGambit } from './queensGambit';

export const blackD4Moves: Move = {
  moveNumber: 1,
  notation: 'd4',
  changeHistory: [['d2', 'd4']],
  children: [
    {
      moveNumber: 1,
      notation: 'e6',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e6'],
      ],

      children: [queensGambit],
    },
  ],
};
