import { ReactNode } from 'react';

interface TerminalContainerProps {
  children: ReactNode;
}

export default function TerminalContainer({ children }: TerminalContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl glass-terminal border border-terminal-green/30 rounded-lg shadow-2xl p-6 sm:p-8 md:p-12">
        {children}
      </div>
    </div>
  );
}
