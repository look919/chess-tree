import { Chessboard } from './Chessboard';
import { initialChessPieces } from './initialChessPieces';

const HomePage = () => {
  return (
    <main className='flex min-h-screen gap-10 p-10'>
      <section className='flex w-full max-w-5xl justify-center text-2xl'>Boilerplate</section>
      <Chessboard chessPieces={initialChessPieces} />
    </main>
  );
};

export default HomePage;
