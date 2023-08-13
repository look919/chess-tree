import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { ChessPiece } from './initialChessPieces';

interface ChessboardProps {
  chessPieces: ChessPiece[];
}

const getCellColor = (rowIndex: number, cellIndex: number) => {
  if ((cellIndex % 2 === 0 && rowIndex % 2 === 0) || (cellIndex % 2 !== 0 && rowIndex % 2 !== 0)) {
    return 'bg-gray-700 hover:bg-gray-500';
  }

  return 'bg-gray-100 hover:bg-gray-300';
};

const chessboardRows = [1, 2, 3, 4, 5, 6, 7, 8];

const chessboardCols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const Chessboard = ({ chessPieces }: ChessboardProps) => {
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
        width='100'
        height='100'
      />
    );
  };

  return (
    <section className='flex w-full flex-col gap-4 text-2xl'>
      <h1>Chessboard</h1>
      <div className='flex w-fit flex-col-reverse border-4 border-slate-600'>
        {chessboardRows.map((row, rowIndex) => (
          <div className='relative flex items-center' key={row}>
            <span className='absolute bottom-0 left-0 z-10 text-red-600 text-opacity-60'>{row}</span>
            {chessboardCols.map((cell, cellIndex) => (
              <Button
                key={cellIndex}
                variant='default'
                className={twMerge('relative h-24 w-24', getCellColor(rowIndex, cellIndex))}
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
