import './LangButton.css';

interface LangButtonProps {
  lang: string;
  setLang: (lang: string) => void;
  idPrefix?: string;
  width?: number;
}

const LangButton: React.FC<LangButtonProps> = () => {
  return (
      <div>
          <div className="switch">
              <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox"/>
                  <label htmlFor="language-toggle"></label>
                  <span className="on">BN</span>
                  <span className="off">EN</span>
          </div>
      </div>
  );
};

export default LangButton;


/**
 *     <div className={`wrap`}>
 *       <input
 *         type="radio"
 *         id={`${idPrefix}en`}
 *         name={`${idPrefix}lang`}
 *         value="en"
 *         checked={lang === 'en'}
 *         onChange={() => setLang('en')}
 *         className="hidden"
 *       />
 *       <label htmlFor={`${idPrefix}en`}>EN</label>
 *
 *       <input
 *         type="radio"
 *         id={`${idPrefix}az`}
 *         name={`${idPrefix}lang`}
 *         value="az"
 *         checked={lang === 'az'}
 *         onChange={() => setLang('az')}
 *         className="hidden"
 *       />
 *       <label htmlFor={`${idPrefix}az`}>AZ</label>
 *     </div>
 */
