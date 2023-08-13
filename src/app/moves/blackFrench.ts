import { Move } from './utils';

export const blackFrenchMoves: Move = {
  notation: 'e4',
  changeHistory: [['e2', 'e4']],
  children: [
    {
      notation: 'e6',
      changeHistory: [
        ['e2', 'e4'],
        ['e7', 'e6'],
      ],
      children: null,
    },
    {
      notation: 'e5',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e5'],
      ],
      children: null,
    },
  ],
};
