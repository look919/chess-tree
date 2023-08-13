import React from 'react';

interface SectionHeaderProps {
  children: React.ReactNode;
}

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <h1 className='mb-4 text-2xl'>{children}</h1>;
};
