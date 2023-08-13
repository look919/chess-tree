import { Move } from '../utils';

// TODO: unfinished line
export const f4SecondMove: Move = {
  moveNumber: 2,
  notation: 'Bf5',
  isMistake: true,
  description:
    'This is a mistake because it allows white to take without option for black to recapture with queen which is shown in the next lines',
  changeHistory: [
    ['d2', 'd4'],
    ['d7', 'd5'],
    ['c2', 'c4'],
    ['c8', 'f5'],
  ],
  children: [
    {
      moveNumber: 3,
      notation: 'dxe5',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e5'],
        ['d4', 'e5'],
      ],
      children: [],
    },
  ],
};
