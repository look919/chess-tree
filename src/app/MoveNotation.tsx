'use client';

import React from 'react';
import Tree from 'rc-tree';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SectionHeader } from './SectionHeader';
import { Move, Variation, movesByVariation, variations } from './moves/utils';

type MoveNotationProps = {
  onNotationClick: (move: Move) => void;
};

export const MoveNotation = ({ onNotationClick }: MoveNotationProps) => {
  const renderMoveTree = (move: Move, depth: number = 0): React.ReactNode => {
    const depthCounter = depth + 1;

    return (
      <Tree.TreeNode
        key={`${move.notation}${depthCounter}`}
        title={
          <Button
            onClick={() => onNotationClick(move)}
            className={
              (twMerge('p-0 text-base'), move.changeHistory.length % 2 === 0 ? 'text-slate-500' : 'text-slate-200')
            }
          >
            {move.isMistake ? (
              <span>
                {move.notation}
                <span className='text-red-500'>!</span>
              </span>
            ) : (
              move.notation
            )}
          </Button>
        }
      >
        {Array.isArray(move.children) ? move.children.map(nextMove => renderMoveTree(nextMove, depthCounter)) : null}
      </Tree.TreeNode>
    );
  };

  const renderTabContent = (value: Variation) => {
    return (
      <TabsContent key={value} value={value}>
        <Tree showLine defaultExpandAll showIcon={false}>
          {renderMoveTree(movesByVariation[value])}
        </Tree>
      </TabsContent>
    );
  };

  return (
    <section className='flex w-[800px] flex-col text-2xl'>
      <SectionHeader>Opening tree</SectionHeader>
      <Tabs defaultValue='white' className='w-[400px]'>
        <TabsList>
          {variations.map(variation => (
            <TabsTrigger key={variation} value={variation}>
              {variation}
            </TabsTrigger>
          ))}
        </TabsList>
        {variations.map(variation => renderTabContent(variation))}
      </Tabs>
    </section>
  );
};
