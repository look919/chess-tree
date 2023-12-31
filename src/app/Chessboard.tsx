'use client';

import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { SectionHeader } from './SectionHeader';
import { ChessPiece } from './initialChessPieces';

export type SelectedPiece = {
  cellId: string;
  chessPiece: ChessPiece;
};

interface ChessboardProps {
  chessPieces: ChessPiece[];
  selectedPiece: SelectedPiece | null;
  onPieceSelection: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onPieceMove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const getCellColor = (rowIndex: number, cellIndex: number) => {
  if ((cellIndex % 2 === 0 && rowIndex % 2 === 0) || (cellIndex % 2 !== 0 && rowIndex % 2 !== 0)) {
    return 'bg-gray-700 hover:bg-gray-500';
  }

  return 'bg-gray-100 hover:bg-gray-300';
};

const chessboardRows = [1, 2, 3, 4, 5, 6, 7, 8];

const chessboardCols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export const Chessboard = ({ chessPieces, selectedPiece, onPieceMove, onPieceSelection }: ChessboardProps) => {
  const renderChessPiece = (cellId: string) => {
    const chessPiece = chessPieces.find(piece => piece.cellId === cellId);

    if (!chessPiece) {
      return null;
    }

    return (
      <Image
        priority
        src={`/images/chess-pieces/${chessPiece.color}-${chessPiece.name.toLocaleLowerCase()}.svg`}
        alt={`${chessPiece.color} ${chessPiece.name}`}
        width={80}
        height={80}
      />
    );
  };

  return (
    <section className='w-[650px] flex-col gap-4 text-2xl'>
      <SectionHeader>Chessboard</SectionHeader>
      <div className='flex w-fit flex-col-reverse border-4 border-slate-600'>
        {chessboardRows.map((row, rowIndex) => (
          <div className='relative flex items-center' key={row}>
            <span className='absolute bottom-0 left-0 z-10 text-red-600 text-opacity-60'>{row}</span>
            {chessboardCols.map((cell, cellIndex) => (
              <Button
                key={cellIndex}
                variant='default'
                className={twMerge(
                  'relative h-20 w-20 p-1 transition-colors duration-300',
                  getCellColor(rowIndex, cellIndex),
                  selectedPiece?.cellId === `${cell}${row}` && 'hover: bg-sky-300 hover:bg-sky-400',
                )}
                value={`${cell}${row}`}
                onClick={selectedPiece ? onPieceMove : onPieceSelection}
              >
                {row === 1 && (
                  <span className='absolute bottom-0 right-1 text-xl text-red-600 text-opacity-60'>{cell}</span>
                )}
                {renderChessPiece(`${cell}${row}`)}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
