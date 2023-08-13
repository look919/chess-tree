import { Move } from '../utils';

export const e5SideLines: Move = {
  moveNumber: 1,
  notation: 'e5 ',
  changeHistory: [
    ['d2', 'd4'],
    ['e7', 'e5'],
  ],
  description: 'This line is extremely aggressive and its easy to make a mistake in here. But anyway it should be fine',
  children: [
    {
      moveNumber: 2,
      notation: 'dxe5',
      changeHistory: [
        ['d2', 'd4'],
        ['e7', 'e5'],
        ['d4', 'e5'],
      ],
      children: [
        {
          moveNumber: 2,
          notation: 'Nc6',
          changeHistory: [
            ['d2', 'd4'],
            ['e7', 'e5'],
            ['d4', 'e5'],
            ['b8', 'c6'],
          ],
          children: [
            {
              moveNumber: 3,
              notation: 'Nf3',
              changeHistory: [
                ['d2', 'd4'],
                ['e7', 'e5'],
                ['d4', 'e5'],
                ['b8', 'c6'],
                ['g1', 'f3'],
              ],
              children: [
                {
                  moveNumber: 3,
                  notation: 'f6',
                  isMistake: true,
                  evaluation: '-2.0',
                  description:
                    'Thats computer best move, but its not good setup. I can just ignore the pawn and start developing my pieces and my goal is to attack with Ng5',
                  changeHistory: [
                    ['d2', 'd4'],
                    ['e7', 'e5'],
                    ['d4', 'e5'],
                    ['b8', 'c6'],
                    ['g1', 'f3'],
                    ['f7', 'f6'],
                  ],
                  children: [
                    {
                      moveNumber: 4,
                      notation: 'e4',
                      changeHistory: [
                        ['d2', 'd4'],
                        ['e7', 'e5'],
                        ['d4', 'e5'],
                        ['b8', 'c6'],
                        ['g1', 'f3'],
                        ['f7', 'f6'],
                        ['e2', 'e4'],
                      ],
                      children: [
                        {
                          moveNumber: 4,
                          notation: 'fxe5',
                          changeHistory: [
                            ['d2', 'd4'],
                            ['e7', 'e5'],
                            ['d4', 'e5'],
                            ['b8', 'c6'],
                            ['g1', 'f3'],
                            ['f7', 'f6'],
                            ['e2', 'e4'],
                            ['f6', 'e5'],
                          ],
                          children: [
                            {
                              moveNumber: 5,
                              notation: 'Bc4',
                              description:
                                'In next move my intention is to play Ng5, opponent cannot play h6 due to Qh5',
                              changeHistory: [
                                ['d2', 'd4'],
                                ['e7', 'e5'],
                                ['d4', 'e5'],
                                ['b8', 'c6'],
                                ['g1', 'f3'],
                                ['f7', 'f6'],
                                ['e2', 'e4'],
                                ['f6', 'e5'],
                                ['f1', 'c4'],
                              ],
                              children: [
                                {
                                  moveNumber: 5,
                                  notation: 'Nf6',
                                  description: 'This is basically the only developing move but it doesnt stop my plan',
                                  changeHistory: [
                                    ['d2', 'd4'],
                                    ['e7', 'e5'],
                                    ['d4', 'e5'],
                                    ['b8', 'c6'],
                                    ['g1', 'f3'],
                                    ['f7', 'f6'],
                                    ['e2', 'e4'],
                                    ['f6', 'e5'],
                                    ['f1', 'c4'],
                                    ['g8', 'f6'],
                                  ],
                                  children: [
                                    {
                                      moveNumber: 6,
                                      notation: 'Ng5',
                                      changeHistory: [
                                        ['d2', 'd4'],
                                        ['e7', 'e5'],
                                        ['d4', 'e5'],
                                        ['b8', 'c6'],
                                        ['g1', 'f3'],
                                        ['f7', 'f6'],
                                        ['e2', 'e4'],
                                        ['f6', 'e5'],
                                        ['f1', 'c4'],
                                        ['g8', 'f6'],
                                        ['f3', 'g5'],
                                      ],
                                      children: [
                                        {
                                          moveNumber: 6,
                                          notation: 'd5',
                                          changeHistory: [
                                            ['d2', 'd4'],
                                            ['e7', 'e5'],
                                            ['d4', 'e5'],
                                            ['b8', 'c6'],
                                            ['g1', 'f3'],
                                            ['f7', 'f6'],
                                            ['e2', 'e4'],
                                            ['f6', 'e5'],
                                            ['f1', 'c4'],
                                            ['g8', 'f6'],
                                            ['f3', 'g5'],
                                            ['d7', 'd5'],
                                          ],

                                          children: [
                                            {
                                              moveNumber: 7,
                                              notation: 'exd5',
                                              changeHistory: [
                                                ['d2', 'd4'],
                                                ['e7', 'e5'],
                                                ['d4', 'e5'],
                                                ['b8', 'c6'],
                                                ['g1', 'f3'],
                                                ['f7', 'f6'],
                                                ['e2', 'e4'],
                                                ['f6', 'e5'],
                                                ['f1', 'c4'],
                                                ['g8', 'f6'],
                                                ['f3', 'g5'],
                                                ['d7', 'd5'],
                                                ['e4', 'd5'],
                                              ],
                                              children: [
                                                {
                                                  moveNumber: 7,
                                                  notation: 'Na5',
                                                  description:
                                                    'This is way better version of 4 knights defense for white. My goal is to play Bd3 then castle and enjoy week black king.',
                                                  evaluation: '+2.2',
                                                  changeHistory: [
                                                    ['d2', 'd4'],
                                                    ['e7', 'e5'],
                                                    ['d4', 'e5'],
                                                    ['b8', 'c6'],
                                                    ['g1', 'f3'],
                                                    ['f7', 'f6'],
                                                    ['e2', 'e4'],
                                                    ['f6', 'e5'],
                                                    ['f1', 'c4'],
                                                    ['g8', 'f6'],
                                                    ['f3', 'g5'],
                                                    ['d7', 'd5'],
                                                    ['e4', 'd5'],
                                                    ['c6', 'a5'],
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
