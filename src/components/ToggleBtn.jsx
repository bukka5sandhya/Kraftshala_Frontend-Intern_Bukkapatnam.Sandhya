import React, { useState } from 'react'
import {toggleBtn} from '../components/toggleBtn.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

function ToggleBtn({getValue}) {
    const [mode,setMode] = useState(false);

    getValue(mode);

    const handleMode = ()=>{
        setMode(!mode);
    }

  return (
    <div className='toggleBtn' onClick={handleMode} >
      {mode === false ? <div className='lightMode modeBtn' >
        <FontAwesomeIcon icon={faSun} /> Light Mode
      </div> : <div className='darkMode modeBtn' >
      <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </div>}
    </div>
  )
}

export default ToggleBtn
