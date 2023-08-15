import { Move } from '../utils';

export const Bf5SecondMove: Move = {
  notation: 'Bf5',
  isMistake: true,
  description:
    'This is a mistake because it allows white to take without option for black to recapture with queen which is shown in the next lines',
  move: ['c8', 'f5'],
  // TODO: unfinished line
  children: [],
};
