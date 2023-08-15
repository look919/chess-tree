import { Move } from '../utils';
import { fourQueenE2Check } from './4Qe2+';

export const blackFrenchMoves: Move = {
  notation: 'e4',
  move: ['e2', 'e4'],
  children: [
    {
      notation: 'e6',
      move: ['e7', 'e6'],
      children: [
        {
          notation: 'Nf3',
          move: ['g1', 'f3'],
          children: [
            {
              notation: 'd5',
              move: ['d7', 'd5'],
              children: [
                {
                  notation: 'exd5',
                  move: ['e4', 'd5'],
                  children: [
                    {
                      notation: 'exd5',
                      move: ['e6', 'd5'],
                      children: [fourQueenE2Check],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
