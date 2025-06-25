import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Copy } from 'lucide-react';
import { toast as sonnerToast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, className = '' }) => {
  console.log('CodeBlock loaded');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      sonnerToast.success("Copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      sonnerToast.error("Failed to copy code.");
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`relative my-6 rounded-xl bg-gray-950 text-sm border border-gray-800 ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
        <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-wider">
          {language || 'code'}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800 h-8 w-8"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre>
          <code className={`language-${language} font-mono text-gray-300`}>
            {/* 
              NOTE: Full syntax highlighting requires a library like 'react-syntax-highlighter' or 'prism-react-renderer'.
              This component provides the structure and copy functionality. To enable highlighting, 
              you would wrap the `code` content with a syntax highlighter component here.
            */}
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;