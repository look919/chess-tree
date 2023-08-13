import { Move } from '../utils';

export const trompowskyMoves: Move = {
  moveNumber: 1,
  notation: 'Nf6 (Trompowsky Attack)',
  changeHistory: [
    ['d2', 'd4'],
    ['g8', 'f6'],
  ],
  children: [
    {
      moveNumber: 2,
      notation: 'Bg5',
      changeHistory: [
        ['d2', 'd4'],
        ['g8', 'f6'],
        ['c1', 'g5'],
      ],
      children: [
        {
          moveNumber: 2,
          notation: 'e6',
          changeHistory: [
            ['d2', 'd4'],
            ['g8', 'f6'],
            ['c1', 'g5'],
            ['e7', 'e6'],
          ],
          children: [
            {
              moveNumber: 3,
              notation: 'e4',
              changeHistory: [
                ['d2', 'd4'],
                ['g8', 'f6'],
                ['c1', 'g5'],
                ['e7', 'e6'],
                ['e2', 'e4'],
              ],
              children: [
                {
                  moveNumber: 3,
                  notation: 'h6',
                  changeHistory: [
                    ['d2', 'd4'],
                    ['g8', 'f6'],
                    ['c1', 'g5'],
                    ['e7', 'e6'],
                    ['e2', 'e4'],
                    ['h7', 'h6'],
                  ],
                  children: [
                    {
                      moveNumber: 4,
                      notation: 'Bxf6',
                      changeHistory: [
                        ['d2', 'd4'],
                        ['g8', 'f6'],
                        ['c1', 'g5'],
                        ['e7', 'e6'],
                        ['e2', 'e4'],
                        ['h7', 'h6'],
                        ['g5', 'f6'],
                      ],
                      children: [
                        {
                          moveNumber: 4,
                          notation: 'Qxf6',
                          changeHistory: [
                            ['d2', 'd4'],
                            ['g8', 'f6'],
                            ['c1', 'g5'],
                            ['e7', 'e6'],
                            ['e2', 'e4'],
                            ['h7', 'h6'],
                            ['g5', 'f6'],
                            ['d8', 'f6'],
                          ],
                          children: [
                            {
                              moveNumber: 5,
                              notation: 'Nf3',
                              changeHistory: [
                                ['d2', 'd4'],
                                ['g8', 'f6'],
                                ['c1', 'g5'],
                                ['e7', 'e6'],
                                ['e2', 'e4'],
                                ['h7', 'h6'],
                                ['g5', 'f6'],
                                ['d8', 'f6'],
                                ['g1', 'f3'],
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
        },
      ],
    },
  ],
};
