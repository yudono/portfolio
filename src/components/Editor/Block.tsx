import React, { useState } from "react";
import {
  Type,
  Image as ImageIcon,
  List,
  ListOrdered,
  Code,
  Quote,
  Trash2,
  ChevronUp,
  ChevronDown,
  Plus,
} from "lucide-react";

export type BlockType =
  | "text"
  | "heading"
  | "image"
  | "list"
  | "code"
  | "quote";

interface BlockProps {
  id: string;
  type: BlockType;
  content: string;
  onUpdate: (id: string, content: string, type: BlockType) => void;
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  onAddBlockAfter: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

const Block: React.FC<BlockProps> = ({
  id,
  type,
  content,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  onAddBlockAfter,
  isFirst,
  isLast,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);
  const [currentType, setCurrentType] = useState<BlockType>(type);

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCurrentContent(e.target.value);
  };

  const handleBlur = () => {
    onUpdate(id, currentContent, currentType);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onUpdate(id, currentContent, currentType);
      onAddBlockAfter(id);
      setIsEditing(false);
    }
  };

  const changeBlockType = (newType: BlockType) => {
    setCurrentType(newType);
    onUpdate(id, currentContent, newType);
  };

  const renderBlockByType = () => {
    if (isEditing) {
      return (
        <textarea
          value={currentContent}
          onChange={handleContentChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="w-full bg-transparent resize-none focus:outline-none min-h-[100px] p-2"
        />
      );
    }

    switch (currentType) {
      case "heading":
        return <h2 className="text-2xl font-bold">{currentContent}</h2>;
      case "text":
        return <p className="text-base">{currentContent}</p>;
      case 'image':
        return (
          <figure className="my-8">
            <img 
              src={currentContent} 
              alt={content.alt || "Certificate"} 
              className={content.className || "w-full h-auto rounded-lg shadow-sm"}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src = 'https://via.placeholder.com/800x600?text=Certificate+Image+Not+Available';
              }}
              loading="lazy"
            />
            {content.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {content.caption}
              </figcaption>
            )}
          </figure>
        );
      case "list":
        return (
          <ul className="list-disc pl-6">
            {currentContent.split("\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "code":
        return (
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
            <code>{currentContent}</code>
          </pre>
        );
      case "quote":
        return (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic">
            {currentContent}
          </blockquote>
        );
      default:
        return <p>{currentContent}</p>;
    }
  };

  return (
    <div
      className="group relative mb-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!isEditing) {
          setIsEditing(true);
        }
      }}
    >
      {isHovered && (
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddBlockAfter(id);
            }}
            className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Add block"
          >
            <Plus size={12} />
          </button>
          {!isFirst && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMoveUp(id);
              }}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Move up"
            >
              <ChevronUp size={12} />
            </button>
          )}
          {!isLast && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMoveDown(id);
              }}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              title="Move down"
            >
              <ChevronDown size={12} />
            </button>
          )}
        </div>
      )}

      {renderBlockByType()}

      {isHovered && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white dark:bg-gray-800 shadow-md rounded-md p-1 flex items-center space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("text");
            }}
            className={`p-1 rounded ${
              currentType === "text"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="Text"
          >
            <Type size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("heading");
            }}
            className={`p-1 rounded ${
              currentType === "heading"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="Heading"
          >
            <Type size={14} className="font-bold" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("image");
            }}
            className={`p-1 rounded ${
              currentType === "image"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="Image"
          >
            <ImageIcon size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("list");
            }}
            className={`p-1 rounded ${
              currentType === "list"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="List"
          >
            <List size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("code");
            }}
            className={`p-1 rounded ${
              currentType === "code"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="Code"
          >
            <Code size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              changeBlockType("quote");
            }}
            className={`p-1 rounded ${
              currentType === "quote"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            title="Quote"
          >
            <Quote size={14} />
          </button>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="p-1 rounded text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Block;
