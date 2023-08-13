'use client';

import React from 'react';
import { Chessboard, SelectedPiece } from './Chessboard';
import { MoveNotation } from './MoveNotation';
import { ChessPiece, initialChessPieces } from './initialChessPieces';
import { Move } from './moves/utils';

const HomePage = () => {
  const [chessPieces, setChessPieces] = React.useState(initialChessPieces);
  const [selectedPiece, setSelectedPiece] = React.useState<SelectedPiece | null>(null);

  const handleNotationClick = (move: Move) => {
    const currentChessPieces: ChessPiece[] = JSON.parse(JSON.stringify(initialChessPieces));

    move.changeHistory.forEach(change => {
      const pieceIndex = currentChessPieces.findIndex(piece => piece.cellId === change[0]);
      if (pieceIndex === -1) {
        return;
      }

      currentChessPieces[pieceIndex].cellId = change[1];
    });

    setChessPieces(currentChessPieces);
  };

  const handleSelectPiece = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCellId = e.currentTarget.value;
    const isSelectedCellWithPiece = chessPieces.find(piece => piece.cellId === selectedCellId) as ChessPiece;

    if (!isSelectedCellWithPiece) {
      return;
    }

    if (selectedPiece?.cellId === selectedCellId) {
      setSelectedPiece(null);
      return;
    }

    setSelectedPiece({
      cellId: selectedCellId,
      chessPiece: isSelectedCellWithPiece,
    });
  };

  const handleMovePiece = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCellId = e.currentTarget.value;
    if (!selectedPiece) {
      return;
    }

    const updatedChessPieces = chessPieces.map(piece => {
      if (piece.cellId === selectedPiece.cellId) {
        return {
          ...piece,
          cellId: selectedCellId,
        };
      }

      return piece;
    });

    const findPieceInSelectedCell = chessPieces.findIndex(piece => piece.cellId === selectedCellId);
    if (findPieceInSelectedCell !== -1) {
      updatedChessPieces[findPieceInSelectedCell].cellId = null;
    }

    setChessPieces(updatedChessPieces);
    setSelectedPiece(null);
  };

  return (
    <main className='flex min-h-screen gap-10 p-10'>
      <MoveNotation onNotationClick={handleNotationClick} />

      <Chessboard
        chessPieces={chessPieces}
        selectedPiece={selectedPiece}
        onPieceSelection={handleSelectPiece}
        onPieceMove={handleMovePiece}
      />
    </main>
  );
};

export default HomePage;
