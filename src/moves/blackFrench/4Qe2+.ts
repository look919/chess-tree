import { Move } from '../utils';

export const fourQueenE2Check: Move = {
  notation: 'Qe2+',
  move: ['d1', 'e2'],
  isMistake: true,
  description:
    'This move give me option to develop bishop while white loses a tempo and blocks his own bishop which will lead to harassment from my rook on e8 after i castle',
  evaluation: '-0.6',
  children: [
    {
      notation: 'Be7',
      move: ['f8', 'e7'],
      children: [],
    },
  ],
};
