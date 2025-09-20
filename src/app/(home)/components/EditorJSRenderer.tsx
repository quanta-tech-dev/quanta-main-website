import React from 'react';
import Image from 'next/image';
import { OutputData } from '@editorjs/editorjs';

interface EditorJSRendererProps {
  data: OutputData;
  className?: string;
}

const EditorJSRenderer: React.FC<EditorJSRendererProps> = ({ data, className = '' }) => {
  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return null;
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {data.blocks.map((block, index) => {
        switch (block.type) {
          case 'header':
            const HeaderTag = `h${block.data.level}` as keyof React.JSX.IntrinsicElements;
            return (
              <HeaderTag
                key={index}
                className={`font-bold mb-4 ${
                  block.data.level === 1 ? 'text-4xl' :
                  block.data.level === 2 ? 'text-3xl' :
                  block.data.level === 3 ? 'text-2xl' :
                  block.data.level === 4 ? 'text-xl' :
                  block.data.level === 5 ? 'text-lg' : 'text-base'
                }`}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          
          case 'paragraph':
            if (!block.data.text) {
              return null;
            }
            return (
              <p
                key={index}
                className="mb-4 leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          
          case 'list':
            const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={index} className={`mb-4 ml-6 ${
                block.data.style === 'ordered' ? 'list-decimal' : 'list-disc'
              }`}>
                {block.data.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="mb-2 text-gray-700">
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          
          case 'image':
            return (
              <div key={index} className="mb-6">
                <Image
                  src={block.data.file.url}
                  alt={block.data.caption || 'Blog image'}
                  width={800}
                  height={400}
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                />
                {block.data.caption && (
                  <p className="text-sm text-gray-600 text-center mt-2 italic">
                    {block.data.caption}
                  </p>
                )}
              </div>
            );
          
          default:
            console.log('Unknown block type:', block.type, block);
            return (
              <div key={index} className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-sm text-yellow-700">
                  <strong>Unsupported block type:</strong> {block.type}
                </p>
                <pre className="text-xs text-gray-600 mt-2 overflow-x-auto">
                  {JSON.stringify(block, null, 2)}
                </pre>
              </div>
            );
        }
      })}
    </div>
  );
};

export default EditorJSRenderer;