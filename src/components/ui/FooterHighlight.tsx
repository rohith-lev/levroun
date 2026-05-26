import React from 'react';

interface FooterHighlightProps {
  text: string;
}

export const FooterHighlight: React.FC<FooterHighlightProps> = ({ text }) => {
  return (
    <section className="bg-navy-900 py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-white/70 tracking-wider uppercase">{text}</p>
        <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-orange-500 to-purple-500" />
      </div>
    </section>
  );
};
