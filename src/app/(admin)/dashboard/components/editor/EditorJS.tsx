'use client';
import React, { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';

interface EditorJSComponentProps {
  data?: OutputData;
  onChange: (data: OutputData) => void;
  placeholder?: string;
}

const EditorJSComponent: React.FC<EditorJSComponentProps> = ({
  data,
  onChange,
  placeholder = 'Write your blog content here...'
}) => {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    // Clear existing content
    if (holderRef.current) {
      holderRef.current.innerHTML = '';
    }

    const editor = new EditorJS({
      holder: holderRef.current,
      placeholder,
      data: data || {
        time: Date.now(),
        blocks: [],
        version: '2.30.0'
      },
      tools: {
        header: {
          class: Header,
          config: {
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 2,
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: '/api/upload-image',
            },
            field: 'image',
            types: 'image/*',
          }
        },
      },
      onChange: async () => {
        try {
          const outputData = await editor.save();
          onChange(outputData);
        } catch (error) {
          console.error('Saving failed:', error);
        }
      },
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        try {
          editorRef.current.destroy();
        } catch (error) {
          console.warn('Editor destroy error:', error);
        } finally {
          editorRef.current = null;
        }
      }
    };
  }, [data, placeholder]); // Include data in deps but clear container first

  return (
    <div className="border border-gray-300 rounded-lg p-4 min-h-[400px] bg-white">
      <div ref={holderRef} className="prose max-w-none"></div>
    </div>
  );
};

export default EditorJSComponent;