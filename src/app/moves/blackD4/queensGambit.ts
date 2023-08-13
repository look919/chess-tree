import { Move } from '../utils';

export const queensGambit: Move = {
  moveNumber: 2,
  notation: 'c4',
  changeHistory: [
    ['d2', 'd4'],
    ['e7', 'e6'],
    ['c2', 'c4'],
  ],
  children: [
    {
      moveNumber: 2,
      notation: 'd5',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e6'],
        ['c2', 'c4'],
        ['d7', 'd5'],
      ],
      children: [
        {
          moveNumber: 3,
          notation: 'Nc3',
          changeHistory: [
            ['d2', 'd4'],
            ['e7', 'e6'],
            ['c2', 'c4'],
            ['d7', 'd5'],
            ['b1', 'c3'],
          ],
          children: [
            {
              moveNumber: 3,
              notation: 'Nf6',
              changeHistory: [
                ['d2', 'd4'],
                ['e7', 'e6'],
                ['c2', 'c4'],
                ['d7', 'd5'],
                ['b1', 'c3'],
                ['g8', 'f6'],
              ],
              children: [
                {
                  moveNumber: 4,
                  notation: 'f3',
                  changeHistory: [
                    ['d2', 'd4'],
                    ['e7', 'e6'],
                    ['c2', 'c4'],
                    ['d7', 'd5'],
                    ['b1', 'c3'],
                    ['g8', 'f6'],
                    ['f2', 'f3'],
                  ],
                  isMistake: true,
                  evaluation: '-1.1',
                  description:
                    'This is a mistake because it allows black to play c5, which opens the center and white leaves with less safer king.',
                  children: [
                    {
                      moveNumber: 4,
                      notation: 'c5',
                      changeHistory: [
                        ['d2', 'd4'],
                        ['e7', 'e6'],
                        ['c2', 'c4'],
                        ['d7', 'd5'],
                        ['b1', 'c3'],
                        ['g8', 'f6'],
                        ['f2', 'f3'],
                        ['c7', 'c5'],
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
