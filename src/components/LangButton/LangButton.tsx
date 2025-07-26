import './LangButton.css';
interface LangButtonProps {
  lang: string;
  setLang: (lang: string) => void;
  idPrefix?: string;
  width?: number;
}

const LangButton: React.FC<LangButtonProps> = ({
  lang,
  setLang,
  idPrefix = '',
}) => {
  return (
    <div className={`wrap`}>
      <input
        type="radio"
        id={`${idPrefix}en`}
        name={`${idPrefix}lang`}
        value="en"
        checked={lang === 'en'}
        onChange={() => setLang('en')}
        className="hidden"
      />
      <label htmlFor={`${idPrefix}en`}>EN</label>

      <input
        type="radio"
        id={`${idPrefix}az`}
        name={`${idPrefix}lang`}
        value="az"
        checked={lang === 'az'}
        onChange={() => setLang('az')}
        className="hidden"
      />
      <label htmlFor={`${idPrefix}az`}>AZ</label>
    </div>
  );
};

export default LangButton;
