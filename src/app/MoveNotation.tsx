'use client';

import React from 'react';
import Tree from 'rc-tree';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChangeNotation, Move, Variation, movesByVariation, variations } from '../moves/utils';
import { SectionHeader } from './SectionHeader';

type MoveNotationProps = {
  onNotationClick: (move: Move) => void;
};

export const MoveNotation = ({ onNotationClick }: MoveNotationProps) => {
  const renderMoveTree = (node: Move, depth: number = 0): React.ReactNode => {
    const depthCounter = depth + 1;
    const nodeMove: Omit<Move, 'nodeMoves'> & { nodeMoves: ChangeNotation[] } = {
      ...node,
      nodeMoves: Array.isArray(node.nodeMoves) ? [...node.nodeMoves, node.move] : [node.move],
      moveNumber: Math.ceil(depthCounter / 2),
    };

    return (
      <Tree.TreeNode
        key={`${nodeMove.notation}-${depthCounter}`}
        title={
          <Button
            onClick={() => onNotationClick(nodeMove)}
            className={twMerge(
              'm-0 border-none bg-transparent p-0 text-base outline-none',
              nodeMove.nodeMoves?.length % 2 === 0 ? 'text-slate-500' : 'text-slate-200',
            )}
          >
            {nodeMove.isMistake ? (
              <span>
                {nodeMove.notation}
                <span className='text-red-500'>!</span>
              </span>
            ) : (
              nodeMove.notation
            )}
          </Button>
        }
      >
        {Array.isArray(nodeMove.children)
          ? nodeMove.children.map(nextMove =>
              renderMoveTree({ ...nextMove, nodeMoves: nodeMove.nodeMoves }, depthCounter),
            )
          : null}
      </Tree.TreeNode>
    );
  };

  const renderTabContent = (value: Variation) => {
    return (
      <TabsContent key={value} value={value}>
        <Tree showLine defaultExpandAll autoExpandParent showIcon={false}>
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
