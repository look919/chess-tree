type PieceSVG =
  | 'white-pawn.svg'
  | 'white-rook.svg'
  | 'white-knight.svg'
  | 'white-bishop.svg'
  | 'white-queen.svg'
  | 'white-king.svg'
  | 'black-pawn.svg'
  | 'black-rook.svg'
  | 'black-knight.svg'
  | 'black-bishop.svg'
  | 'black-queen.svg'
  | 'black-king.svg';

export type ChessPiece = {
  id: string;
  name: 'PAWN' | 'ROOK' | 'KNIGHT' | 'BISHOP' | 'QUEEN' | 'KING';
  color: 'white' | 'black';
  cellId: string | null;
  svg: PieceSVG;
};

export const initialChessPieces: ChessPiece[] = [
  { id: '1', name: 'PAWN', color: 'white', cellId: 'A2', svg: 'white-pawn.svg' },
  { id: '2', name: 'PAWN', color: 'white', cellId: 'B2', svg: 'white-pawn.svg' },
  { id: '3', name: 'PAWN', color: 'white', cellId: 'C2', svg: 'white-pawn.svg' },
  { id: '4', name: 'PAWN', color: 'white', cellId: 'D2', svg: 'white-pawn.svg' },
  { id: '5', name: 'PAWN', color: 'white', cellId: 'E2', svg: 'white-pawn.svg' },
  { id: '6', name: 'PAWN', color: 'white', cellId: 'F2', svg: 'white-pawn.svg' },
  { id: '7', name: 'PAWN', color: 'white', cellId: 'G2', svg: 'white-pawn.svg' },
  { id: '8', name: 'PAWN', color: 'white', cellId: 'H2', svg: 'white-pawn.svg' },
  { id: '9', name: 'ROOK', color: 'white', cellId: 'A1', svg: 'white-rook.svg' },
  { id: '10', name: 'KNIGHT', color: 'white', cellId: 'B1', svg: 'white-knight.svg' },
  { id: '11', name: 'BISHOP', color: 'white', cellId: 'C1', svg: 'white-bishop.svg' },
  { id: '12', name: 'QUEEN', color: 'white', cellId: 'D1', svg: 'white-queen.svg' },
  { id: '13', name: 'KING', color: 'white', cellId: 'E1', svg: 'white-king.svg' },
  { id: '14', name: 'BISHOP', color: 'white', cellId: 'F1', svg: 'white-bishop.svg' },
  { id: '15', name: 'KNIGHT', color: 'white', cellId: 'G1', svg: 'white-knight.svg' },
  { id: '16', name: 'ROOK', color: 'white', cellId: 'H1', svg: 'white-rook.svg' },
  { id: '17', name: 'PAWN', color: 'black', cellId: 'A7', svg: 'black-pawn.svg' },
  { id: '18', name: 'PAWN', color: 'black', cellId: 'B7', svg: 'black-pawn.svg' },
  { id: '19', name: 'PAWN', color: 'black', cellId: 'C7', svg: 'black-pawn.svg' },
  { id: '20', name: 'PAWN', color: 'black', cellId: 'D7', svg: 'black-pawn.svg' },
  { id: '21', name: 'PAWN', color: 'black', cellId: 'E7', svg: 'black-pawn.svg' },
  { id: '22', name: 'PAWN', color: 'black', cellId: 'F7', svg: 'black-pawn.svg' },
  { id: '23', name: 'PAWN', color: 'black', cellId: 'G7', svg: 'black-pawn.svg' },
  { id: '24', name: 'PAWN', color: 'black', cellId: 'H7', svg: 'black-pawn.svg' },
  { id: '25', name: 'ROOK', color: 'black', cellId: 'A8', svg: 'black-rook.svg' },
  { id: '26', name: 'KNIGHT', color: 'black', cellId: 'B8', svg: 'black-knight.svg' },
  { id: '27', name: 'BISHOP', color: 'black', cellId: 'C8', svg: 'black-bishop.svg' },
  { id: '28', name: 'QUEEN', color: 'black', cellId: 'D8', svg: 'black-queen.svg' },
  { id: '29', name: 'KING', color: 'black', cellId: 'E8', svg: 'black-king.svg' },
  { id: '30', name: 'BISHOP', color: 'black', cellId: 'F8', svg: 'black-bishop.svg' },
  { id: '31', name: 'KNIGHT', color: 'black', cellId: 'G8', svg: 'black-knight.svg' },
  { id: '32', name: 'ROOK', color: 'black', cellId: 'H8', svg: 'black-rook.svg' },
];
