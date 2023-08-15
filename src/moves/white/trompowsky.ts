import { Move } from '../utils';

export const trompowskyMoves: Move = {
  notation: 'Nf6 (Trompowsky Attack)',
  move: ['g8', 'f6'],
  children: [
    {
      notation: 'Bg5',
      move: ['c1', 'g5'],
      children: [
        {
          notation: 'e6',
          move: ['e7', 'e6'],
          children: [
            {
              notation: 'e4',
              move: ['e2', 'e4'],
              children: [
                {
                  notation: 'h6',
                  move: ['h7', 'h6'],
                  children: [
                    {
                      notation: 'Bxf6',
                      move: ['g5', 'f6'],
                      children: [
                        {
                          notation: 'Qxf6',
                          move: ['d8', 'f6'],

                          children: [
                            {
                              notation: 'Nf3',
                              move: ['g1', 'f3'],
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
        },
      ],
    },
  ],
};
