import React from 'react';
import LangButton from './LangButton/LangButton';
import Image from "next/image";

interface LangButtonProps {
  lang: string;
  setLang: (lang: string) => void;
}

const HeaderButtons: React.FC<LangButtonProps> = ({ lang, setLang }) => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <a
        href="https://wa.me/994706371716"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </a>
      <LangButton lang={lang} setLang={setLang} />
    </div>
  );
};

export default HeaderButtons;
