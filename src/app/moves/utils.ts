import { blackD4Moves } from './blackD4';
import { blackFrenchMoves } from './blackFrench';
import { whiteMoves } from './white';

export type ChangeNotation = [string, string];

export type Move = {
  moveNumber: number;
  notation: string;
  changeHistory: ChangeNotation[];
  variationName?: string;
  description?: string;
  evaluation?: string;
  arrows?: ChangeNotation[];
  children: Move[] | null;
  isMistake?: boolean;
};

export const variations = ['white', 'black-french', 'black-d4'] as const;
export type Variation = (typeof variations)[number];

export const movesByVariation: Record<Variation, Move> = {
  white: whiteMoves,
  'black-french': blackFrenchMoves,
  'black-d4': blackD4Moves,
} as const;
