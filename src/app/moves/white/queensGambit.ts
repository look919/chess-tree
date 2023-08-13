import { Move } from '../utils';
import { f4SecondMove } from './2f4';

export const queensGambit: Move = {
  moveNumber: 2,
  notation: 'c4 (Queens Gambit)',
  changeHistory: [
    ['d2', 'd4'],
    ['d7', 'd5'],
    ['c2', 'c4'],
  ],
  children: [
    f4SecondMove,
    {
      moveNumber: 2,
      notation: 'e6',
      changeHistory: [
        ['d2', 'd4'],
        ['d7', 'd5'],
        ['c2', 'c4'],
        ['e7', 'e6'],
      ],
      children: [
        {
          moveNumber: 3,
          notation: 'Nf3',
          description: 'Avoiding Nc3, which would lead to Nimzo-Indian Defense',
          changeHistory: [
            ['d2', 'd4'],
            ['d7', 'd5'],
            ['c2', 'c4'],
            ['e7', 'e6'],
            ['g1', 'f3'],
          ],
          children: [
            {
              moveNumber: 3,
              notation: 'Bb4',
              isMistake: true,
              description:
                'Black generally should not play this move, because it allows white to play Bd2, unless black wants to retreat and try to knock me out of preparation',
              changeHistory: [
                ['d2', 'd4'],
                ['d7', 'd5'],
                ['c2', 'c4'],
                ['e7', 'e6'],
                ['g1', 'f3'],
                ['f8', 'b4'],
              ],
              children: [
                {
                  moveNumber: 4,
                  notation: 'Bd2',
                  changeHistory: [
                    ['d2', 'd4'],
                    ['d7', 'd5'],
                    ['c2', 'c4'],
                    ['e7', 'e6'],
                    ['g1', 'f3'],
                    ['f8', 'b4'],
                    ['c1', 'd2'],
                  ],
                  children: [
                    {
                      moveNumber: 4,
                      notation: 'Bxd2',
                      isMistake: true,
                      description:
                        'This is a mistake because it allows me to retake with tempo with the knight and gain extra tempo. Later i should play try casual queens gambit',
                      changeHistory: [
                        ['d2', 'd4'],
                        ['d7', 'd5'],
                        ['c2', 'c4'],
                        ['e7', 'e6'],
                        ['g1', 'f3'],
                        ['f8', 'b4'],
                        ['c1', 'd2'],
                        ['b4', 'd2'],
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
