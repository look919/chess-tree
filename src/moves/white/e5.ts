import { Move } from '../utils';

export const e5SideLines: Move = {
  notation: 'e5 ',
  move: ['e7', 'e5'],
  description: 'This line is extremely aggressive and its easy to make a mistake in here. But anyway it should be fine',
  children: [
    {
      notation: 'dxe5',
      move: ['d4', 'e5'],
      children: [
        {
          notation: 'Nc6',
          move: ['b8', 'c6'],

          children: [
            {
              notation: 'Nf3',
              move: ['g1', 'f3'],

              children: [
                {
                  notation: 'f6',
                  isMistake: true,
                  evaluation: '-2.0',
                  description:
                    'Thats computer best move, but its not good setup. I can just ignore the pawn and start developing my pieces and my goal is to attack with Ng5',
                  move: ['f7', 'f6'],
                  children: [
                    {
                      notation: 'e4',
                      move: ['e2', 'e4'],
                      children: [
                        {
                          notation: 'fxe5',
                          move: ['f6', 'e5'],
                          children: [
                            {
                              notation: 'Bc4',
                              description:
                                'In next move my intention is to play Ng5, opponent cannot play h6 due to Qh5',
                              move: ['f1', 'c4'],
                              children: [
                                {
                                  notation: 'Nf6',
                                  description: 'This is basically the only developing move but it doesnt stop my plan',
                                  move: ['g8', 'f6'],
                                  children: [
                                    {
                                      notation: 'Ng5',
                                      move: ['f3', 'g5'],

                                      children: [
                                        {
                                          notation: 'd5',
                                          move: ['d7', 'd5'],
                                          children: [
                                            {
                                              notation: 'exd5',
                                              move: ['e4', 'd5'],
                                              children: [
                                                {
                                                  notation: 'Na5',
                                                  description:
                                                    'This is way better version of 4 knights defense for white. My goal is to play Bd3 then castle and enjoy weak black king.',
                                                  evaluation: '+2.2',
                                                  move: ['c6', 'a5'],
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
