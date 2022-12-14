import React, { useEffect } from 'react';


const WeatherCard = ({tempinfo}) => {
    const [weatherState, setWeatherState] = React.useState('');
    const {temp,humidity, pressure,weathermood,name,speed,country,sunset} = tempinfo

    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case 'Clouds': setWeatherState('wi-day-cloudy');
                break;
                case 'Haze': setWeatherState('wi-fog');
                break;
                case 'Clear': setWeatherState('wi-day-sunny');
                break;
                default: setWeatherState('wi-day-sunny');
                break;
            }
        }
    },[weathermood])

    // converting time
    let sec = sunset;
    let date=new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  return (
    <>
       {/* our temp card  */}
       <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>
                    {temp}&deg;
                </span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>
                    {name}, {country}
                </div>
            </div>
            <div className='date'>{new Date().toLocaleDateString()}</div>
            {/* our 4 colune and section  */}
            <div className='extra-'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><a className={"wi wi-sunset"}></a></p>
                        <p className='extra-info-leftside'>{timeStr}<br/>sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><a className={"wi wi-humidity"}></a></p>
                        <p className='extra-info-leftside'>{humidity}<br/>humidity</p>
                    </div>
                </div>
            </div>
            <div className='weather-extra-info'>
            <div className='two-sided-section'>
                        <p><a className={"wi wi-humidity"}></a></p>
                        <p className='extra-info-leftside'>{pressure}<br/>pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><a className={"wi wi-humidity"}></a></p>
                        <p className='extra-info-leftside'>{speed}<br/>speed</p>
                    </div>
            </div>
        </div>
     </article>
    </>
  )
}

export default WeatherCard
