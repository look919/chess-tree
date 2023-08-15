import { Move } from '../utils';

export const frenchMoves: Move = {
  notation: 'e6 (French)',
  move: ['e7', 'e6'],
  children: [
    {
      notation: 'e4',
      move: ['e2', 'e4'],
      children: [
        {
          notation: 'Bb4',
          move: ['f8', 'b4'],
          isMistake: true,
          description: 'This is a mistake because it allows white to play c3, which is a good tempo move for white.',
          evaluation: '+1.5',
          children: [
            {
              notation: 'c3',
              move: ['c2', 'c3'],
              description: 'Black has to move the bishop back to e7 at the very best he just lost important tempo.',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
