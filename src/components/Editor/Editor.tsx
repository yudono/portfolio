import React, { useState, useEffect } from 'react';
import Block, { BlockType } from './Block';
import { Plus } from 'lucide-react';

interface BlockData {
  id: string;
  type: BlockType;
  content: string;
}

interface EditorProps {
  initialBlocks?: BlockData[];
  onChange?: (blocks: BlockData[]) => void;
  storageKey?: string;
}

const Editor: React.FC<EditorProps> = ({ initialBlocks = [], onChange, storageKey }) => {
  const [blocks, setBlocks] = useState<BlockData[]>(() => {
    if (storageKey) {
      const savedBlocks = localStorage.getItem(storageKey);
      if (savedBlocks) {
        return JSON.parse(savedBlocks);
      }
    }
    return initialBlocks.length > 0 ? initialBlocks : [
      { id: '1', type: 'text', content: 'Click here to start editing...' }
    ];
  });

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(blocks));
    }
  }, [blocks, storageKey]);

  const generateId = () => `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const updateBlock = (id: string, content: string, type: BlockType) => {
    const updatedBlocks = blocks.map(block => 
      block.id === id ? { ...block, content, type } : block
    );
    setBlocks(updatedBlocks);
    if (onChange) onChange(updatedBlocks);
  };

  const deleteBlock = (id: string) => {
    const filteredBlocks = blocks.filter(block => block.id !== id);
    // Don't allow deleting the last block
    if (filteredBlocks.length === 0) {
      filteredBlocks.push({ id: generateId(), type: 'text', content: '' });
    }
    setBlocks(filteredBlocks);
    if (onChange) onChange(filteredBlocks);
  };

  const addBlock = (afterId?: string) => {
    const newBlock = { id: generateId(), type: 'text', content: '' };
    
    if (afterId) {
      const index = blocks.findIndex(block => block.id === afterId);
      const newBlocks = [
        ...blocks.slice(0, index + 1),
        newBlock,
        ...blocks.slice(index + 1)
      ];
      setBlocks(newBlocks);
      if (onChange) onChange(newBlocks);
    } else {
      const newBlocks = [...blocks, newBlock];
      setBlocks(newBlocks);
      if (onChange) onChange(newBlocks);
    }
  };

  const moveBlockUp = (id: string) => {
    const index = blocks.findIndex(block => block.id === id);
    if (index > 0) {
      const newBlocks = [...blocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setBlocks(newBlocks);
      if (onChange) onChange(newBlocks);
    }
  };

  const moveBlockDown = (id: string) => {
    const index = blocks.findIndex(block => block.id === id);
    if (index < blocks.length - 1) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setBlocks(newBlocks);
      if (onChange) onChange(newBlocks);
    }
  };

  const resetToInitial = () => {
    setBlocks(initialBlocks);
    if (storageKey) {
      localStorage.removeItem(storageKey);
    }
  };

  return (
    <div className="notion-editor w-full max-w-5xl mx-auto">
      <div className="blocks space-y-1">
        {blocks.map((block, index) => (
          <Block
            key={block.id}
            id={block.id}
            type={block.type}
            content={block.content}
            onUpdate={updateBlock}
            onDelete={deleteBlock}
            onMoveUp={moveBlockUp}
            onMoveDown={moveBlockDown}
            onAddBlockAfter={addBlock}
            isFirst={index === 0}
            isLast={index === blocks.length - 1}
          />
        ))}
      </div>
      
      <div className="flex items-center space-x-4 mt-4">
        <button
          onClick={() => addBlock()}
          className="flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <Plus size={16} className="mr-1" />
          <span>Add Block</span>
        </button>
        
        {storageKey && (
          <button
            onClick={resetToInitial}
            className="text-sm text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
          >
            Reset to Default
          </button>
        )}
      </div>
    </div>
  );
};

export default Editor;