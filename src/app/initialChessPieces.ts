export type ChessPiece = {
  id: string;
  name: 'PAWN' | 'ROOK' | 'KNIGHT' | 'BISHOP' | 'QUEEN' | 'KING';
  color: 'white' | 'black';
  cellId: string | null;
};

export const initialChessPieces: ChessPiece[] = [
  { id: '1', name: 'PAWN', color: 'white', cellId: 'a2' },
  { id: '2', name: 'PAWN', color: 'white', cellId: 'b2' },
  { id: '3', name: 'PAWN', color: 'white', cellId: 'c2' },
  { id: '4', name: 'PAWN', color: 'white', cellId: 'd2' },
  { id: '5', name: 'PAWN', color: 'white', cellId: 'e2' },
  { id: '6', name: 'PAWN', color: 'white', cellId: 'f2' },
  { id: '7', name: 'PAWN', color: 'white', cellId: 'g2' },
  { id: '8', name: 'PAWN', color: 'white', cellId: 'h2' },
  { id: '9', name: 'ROOK', color: 'white', cellId: 'a1' },
  { id: '10', name: 'KNIGHT', color: 'white', cellId: 'b1' },
  { id: '11', name: 'BISHOP', color: 'white', cellId: 'c1' },
  { id: '12', name: 'QUEEN', color: 'white', cellId: 'd1' },
  { id: '13', name: 'KING', color: 'white', cellId: 'e1' },
  { id: '14', name: 'BISHOP', color: 'white', cellId: 'f1' },
  { id: '15', name: 'KNIGHT', color: 'white', cellId: 'g1' },
  { id: '16', name: 'ROOK', color: 'white', cellId: 'h1' },
  { id: '17', name: 'PAWN', color: 'black', cellId: 'a7' },
  { id: '18', name: 'PAWN', color: 'black', cellId: 'b7' },
  { id: '19', name: 'PAWN', color: 'black', cellId: 'c7' },
  { id: '20', name: 'PAWN', color: 'black', cellId: 'd7' },
  { id: '21', name: 'PAWN', color: 'black', cellId: 'e7' },
  { id: '22', name: 'PAWN', color: 'black', cellId: 'f7' },
  { id: '23', name: 'PAWN', color: 'black', cellId: 'g7' },
  { id: '24', name: 'PAWN', color: 'black', cellId: 'h7' },
  { id: '25', name: 'ROOK', color: 'black', cellId: 'a8' },
  { id: '26', name: 'KNIGHT', color: 'black', cellId: 'b8' },
  { id: '27', name: 'BISHOP', color: 'black', cellId: 'c8' },
  { id: '28', name: 'QUEEN', color: 'black', cellId: 'd8' },
  { id: '29', name: 'KING', color: 'black', cellId: 'e8' },
  { id: '30', name: 'BISHOP', color: 'black', cellId: 'f8' },
  { id: '31', name: 'KNIGHT', color: 'black', cellId: 'g8' },
  { id: '32', name: 'ROOK', color: 'black', cellId: 'h8' },
];
