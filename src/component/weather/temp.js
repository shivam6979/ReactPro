// start at 3:04:40
import React, {useState,useEffect} from 'react'
import "./style.css"
import WeatherCard from './weatherCard';

const Temp = () => {
    const [searchValue, setsearchValue] = useState("pune");
    const [tempinfo,settempinfo] = useState({})
    const getWeatherInfo=async ()=>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=897541c2a6a907761d47ad9b4a7b9017`
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity, pressure} = data.main;
            const {main:weathermood}=data.weather[0];
            const {name} = data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            console.log(url)

            const myNewWeatherInfo = {
                temp,humidity, pressure,weathermood,name,speed,country,sunset
            };
            settempinfo(myNewWeatherInfo);
        }
        catch(error){
            console.log(error)
        }

    }
    // by default has a value
    useEffect(()=>{
        getWeatherInfo(); // call this function very first time
    },[])

  return (
    <>
     <div className="wrap">
         <div className="search">
    <input type="search" placeholder='Search...' autoFocus id='search' className='searchTerm'
     value={searchValue} onChange={(e)=>setsearchValue(e.target.value)}/>
    <button className='search' type='button' onClick={getWeatherInfo}>search</button>
         </div>
     </div>
     {/*  our temp card */}
     <WeatherCard tempinfo={tempinfo} />
    </>
  )
}

export default Temp