import { Move } from '../utils';
import { Bf5SecondMove } from './2Bf5';

export const queensGambit: Move = {
  notation: 'c4 (Queens Gambit)',
  move: ['c2', 'c4'],
  children: [
    Bf5SecondMove,
    {
      notation: 'e6',
      move: ['e7', 'e6'],
      children: [
        {
          notation: 'Nf3',
          description: 'Avoiding Nc3, which would lead to Nimzo-Indian Defense',
          move: ['g1', 'f3'],
          children: [
            {
              notation: 'Bb4',
              isMistake: true,
              description:
                'Black generally should not play this move, because it allows white to play Bd2, unless black wants to retreat and try to knock me out of preparation',
              move: ['f8', 'b4'],
              children: [
                {
                  notation: 'Bd2',
                  move: ['c1', 'd2'],
                  children: [
                    {
                      notation: 'Bxd2',
                      isMistake: true,
                      description:
                        'This is a mistake because it allows me to retake with tempo with the knight and gain extra tempo. Later i should play try casual queens gambit',
                      move: ['b4', 'd2'],
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
