// import { Move } from './types';

export type ChangeNotation = [string, string];

export type Move = {
  notation: string;
  changeHistory: ChangeNotation[];
  variationName?: string;
  description?: string;
  evaluation?: number;
  arrows?: ChangeNotation[];
  children: Move[] | null;
};

export const whiteMoves: Move = {
  notation: 'd4',
  changeHistory: [['d2', 'd4']],
  children: [
    {
      notation: 'd5',
      changeHistory: [
        ['d2', 'd4'],
        ['d7', 'd5'],
      ],
      children: [
        {
          notation: 'c4',
          changeHistory: [
            ['d2', 'd4'],
            ['d7', 'd5'],
            ['c2', 'c4'],
          ],
          children: null,
        },
      ],
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
