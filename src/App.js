import './App.css';
import logo from './images/logo_round.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className='logo'/>
        <div className="searchbar-div">
          <button onClick={()=>alert('Searching')} className='searchbutton'>
            <FontAwesomeIcon icon={faSearch} className='searchicon'/>
          </button>
          <input type="text" placeholder='Search' className='searchbar'/>
        </div>
      </header>
    </div>
  );
}

export default App;
