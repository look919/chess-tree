import { Move } from '../utils';

export const frenchMoves: Move = {
  moveNumber: 1,
  notation: 'e6 (French)',
  changeHistory: [
    ['d2', 'd4'],
    ['e7', 'e6'],
  ],
  children: [
    {
      moveNumber: 2,
      notation: 'e4',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e6'],
        ['e2', 'e4'],
      ],
      children: [
        {
          moveNumber: 2,
          notation: 'Bb4',
          changeHistory: [
            ['d2', 'd4'],
            ['e7', 'e6'],
            ['e2', 'e4'],
            ['f8', 'b4'],
          ],
          isMistake: true,
          description: 'This is a mistake because it allows white to play c3, which is a good tempo move for white.',
          evaluation: '+1.5',
          children: [
            {
              moveNumber: 3,
              notation: 'c3',
              changeHistory: [
                ['d2', 'd4'],
                ['e7', 'e6'],
                ['e2', 'e4'],
                ['f8', 'b4'],
                ['c2', 'c3'],
              ],
              description: 'Black has to move the bishop back to e7 at the very best he just lost important tempo.',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
