import { Move } from '../utils';

export const blackFrenchMoves: Move = {
  moveNumber: 1,
  notation: 'e4',
  changeHistory: [['e2', 'e4']],
  children: [
    {
      moveNumber: 1,
      notation: 'e6',
      changeHistory: [
        ['e2', 'e4'],
        ['e7', 'e6'],
      ],
      children: [
        {
          moveNumber: 2,
          notation: 'Nf3',
          changeHistory: [
            ['e2', 'e4'],
            ['e7', 'e6'],
            ['g1', 'f3'],
          ],
          children: [
            {
              moveNumber: 2,
              notation: 'd5',
              changeHistory: [
                ['e2', 'e4'],
                ['e7', 'e6'],
                ['g1', 'f3'],
                ['d7', 'd5'],
              ],
              children: [
                {
                  moveNumber: 3,
                  notation: 'exd5',
                  changeHistory: [
                    ['e2', 'e4'],
                    ['e7', 'e6'],
                    ['g1', 'f3'],
                    ['e4', 'd5'],
                  ],
                  children: [
                    {
                      moveNumber: 3,
                      notation: 'exd5',
                      changeHistory: [
                        ['e2', 'e4'],
                        ['e7', 'e6'],
                        ['g1', 'f3'],
                        ['e4', 'd5'],
                        ['e6', 'd5'],
                      ],
                      children: [],
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
