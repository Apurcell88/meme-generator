import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceRollingEyes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header--title-container">
        <FontAwesomeIcon className='header--icon' icon={faFaceRollingEyes} />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <div className="header--project-info">
        <h3 className="header--info-text">React Course - Project 3</h3>
      </div>
    </header>
  );
}
 
export default Header;