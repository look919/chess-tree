import { blackFrenchMoves } from './blackFrench';
import { whiteMoves } from './white';

export type ChangeNotation = [string, string];

export type Move = {
  notation: string;
  changeHistory: ChangeNotation[];
  variationName?: string;
  description?: string;
  evaluation?: number;
  arrows?: ChangeNotation[];
  children: Move[] | null;
};

export const variations = ['white', 'black-french', 'black-d4'] as const;
export type Variation = (typeof variations)[number];

export const movesByVariation: Record<Variation, Move> = {
  white: whiteMoves,
  'black-french': blackFrenchMoves,
  'black-d4': blackFrenchMoves,
} as const;
