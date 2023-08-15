import { Move } from '../moves/utils';
import { SectionHeader } from './SectionHeader';

interface AnalysisProps {
  selectedMove: Move | null;
}

export const Analysis = ({ selectedMove }: AnalysisProps) => {
  if (!selectedMove) {
    return (
      <section className='flex w-[600px] flex-col'>
        <SectionHeader>Analysis</SectionHeader>
      </section>
    );
  }
  return (
    <section className='flex min-h-full w-[600px] flex-col border-x px-4'>
      <SectionHeader>Analysis</SectionHeader>
      <div className='flex w-full items-center justify-between border-b pb-4'>
        <h1>{`${selectedMove.moveNumber}. ${selectedMove.notation}`}</h1>
        <span>{selectedMove.evaluation || '-'}</span>
      </div>
      <p className='p-4'>{selectedMove?.description}</p>
    </section>
  );
};
