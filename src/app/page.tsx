'use client';

import React from 'react';
import { Move } from '../moves/utils';
import { Analysis } from './Analysis';
import { Chessboard, SelectedPiece } from './Chessboard';
import { MoveNotation } from './MoveNotation';
import { ChessPiece, initialChessPieces } from './initialChessPieces';

const HomePage = () => {
  const [chessPieces, setChessPieces] = React.useState(initialChessPieces);
  const [selectedPiece, setSelectedPiece] = React.useState<SelectedPiece | null>(null);
  const [selectedMove, setSelectedMove] = React.useState<Move | null>(null);

  const handleNotationClick = (move: Move) => {
    setSelectedMove(move);
    const currentChessPieces: ChessPiece[] = JSON.parse(JSON.stringify(initialChessPieces));

    move.nodeMoves?.forEach(change => {
      const isThereAPieceOnDesiredCell = currentChessPieces.findIndex(piece => piece.cellId === change[1]);
      if (isThereAPieceOnDesiredCell !== -1) {
        currentChessPieces[isThereAPieceOnDesiredCell].cellId = null;
      }

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

    setSelectedMove(null);
    setChessPieces(updatedChessPieces);
    setSelectedPiece(null);
  };

  return (
    <main className='flex min-h-screen gap-10 p-10'>
      <MoveNotation onNotationClick={handleNotationClick} />
      <Analysis selectedMove={selectedMove} />
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
