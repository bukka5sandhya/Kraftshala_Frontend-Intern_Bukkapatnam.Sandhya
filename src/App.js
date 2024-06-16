import axios from 'axios';

import React, { useState } from 'react'
import ToggleBtn from './components/ToggleBtn.jsx';

function WeatherApiCalling() {
    const [inputValue,setInputValue] = useState('');
    const [searchWeather,setSearchWeather] = useState('');
    const [getMode,setGetMode] = useState('');

    const handleInputValue = ({target:{value}})=>{
        setInputValue(value);
    }

    const apiCalling = async()=>{
        try {
        //eslint-disable-next-line
        const apiKey = '77cb2c59e7591c716bdf0b1fd533f459';
        const apiCall = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`);
        const apiData = apiCall.data;
        setSearchWeather(apiData);
        } catch (error) {
        alert('input value is incorrect');
        }
    }

    const fetchingDetails = ()=>{
        apiCalling();
        setTimeout(()=>{
          setInputValue('');
        },2000)
    }

    const getPropsFromChild = ((mode)=>{
      setGetMode(mode);
    })
    
  return (
    <div className={getMode === false ? 'app light' : 'app dark'} >
      <div className='mode' >
        <ToggleBtn getValue={getPropsFromChild} />
      </div>
      <div className='search' >
        
            <input type='text' placeholder='Enter City Name' value={inputValue} onChange={handleInputValue} />
         
        <div className='submitBtn'>
            <button type='submit' onClick={fetchingDetails} className="search-button">Search</button>
        </div>
      </div>
      <div className='searchOutput'>
        {searchWeather === '' ? null : 
        <>
        <div className="temperature-container-position">
        <div className='cityName' >
            <h3>City : {searchWeather.name}</h3>
        </div>
        
        <div className='temperature' >
            <p>Temperature : {searchWeather.main.temp}</p>
        </div>
        <div className='feelsLike' >
            <p>Feels : {searchWeather.main.feels_like}</p>
        </div>
        <div className='humidity' >
            <p>Humidity : {searchWeather.main.humidity}</p>
        </div>
        <div className='maxTemp' >
            <p>Highest : {searchWeather.main.temp_max}</p>
        </div>
        <div className='minTemp' >
            <p>Lowest : {searchWeather.main.temp_min}</p>
        </div>
        </div>
        </>
        }
      </div>
    </div>
  )
}

export default WeatherApiCalling
