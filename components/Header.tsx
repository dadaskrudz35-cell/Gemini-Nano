import React, { useState, useEffect, useRef } from 'react';
import { HelpIcon, SidePanelIcon, AppsIcon } from './icons';

interface HeaderProps {
  language: 'en' | 'ru' | 'uk';
  onLanguageChange: (lang: 'en' | 'ru' | 'uk') => void;
  t: (key: string) => string;
  onToggleDrawer: () => void;
  onToggleHelp: () => void;
  onToggleAppsHub: () => void;
}

const LanguageSelector: React.FC<Pick<HeaderProps, 'language' | 'onLanguageChange' | 't'>> = ({ language, onLanguageChange, t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (lang: 'en' | 'ru' | 'uk') => {
        onLanguageChange(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const langDisplay = {
      en: 'EN',
      ru: 'RU',
      uk: 'UK'
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center text-sm font-bold bg-background border border-border text-text-secondary hover:text-text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors"
                aria-label="Select language"
            >
                {langDisplay[language]}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-surface border border-border rounded-lg shadow-xl z-20">
                    <ul className="py-1">
                        <li>
                            <button onClick={() => handleSelect('en')} className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-primary' : 'text-text-secondary'} hover:bg-background`}>{t('lang_en')}</button>
                        </li>
                        <li>
                            <button onClick={() => handleSelect('ru')} className={`w-full text-left px-4 py-2 text-sm ${language === 'ru' ? 'text-primary' : 'text-text-secondary'} hover:bg-background`}>{t('lang_ru')}</button>
                        </li>
                        <li>
                            <button onClick={() => handleSelect('uk')} className={`w-full text-left px-4 py-2 text-sm ${language === 'uk' ? 'text-primary' : 'text-text-secondary'} hover:bg-background`}>{t('lang_uk')}</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, t, onToggleDrawer, onToggleHelp, onToggleAppsHub }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 2xl:px-0">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary flex items-baseline gap-2 flex-wrap">
        <span>
          <span className="text-primary">Nano</span> Fusion
        </span>
        {/* System: Incremented version. */}
        <span className="text-sm font-normal text-text-secondary">v2.30.4-alpha</span>
      </h1>
      <div className="flex items-center gap-2">
         <button
          onClick={onToggleAppsHub}
          className="p-2 text-text-secondary hover:text-text-primary bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors"
          aria-label="Open Apps Hub"
        >
          <AppsIcon />
        </button>
        <LanguageSelector language={language} onLanguageChange={onLanguageChange} t={t} />
         <button
          onClick={onToggleHelp}
          className="p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors"
          aria-label="Toggle help modal"
        >
          <HelpIcon />
        </button>
        <button
          onClick={onToggleDrawer}
          className="p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-colors"
          aria-label="Toggle side panel"
        >
          <SidePanelIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;