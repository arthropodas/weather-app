import React from 'react'
import { useStore } from '../../zustand/useStore'



function Home() {

// console.log("response data>>>>>>>>>>>>>>>>>>",data); 
const {count, username,show, increaseCount, addCountryWeather, weatherDetails} =useStore((state)=>{
  return {
    count: state.count,
    username:state.username,
    show:state.show,
    weatherDetails:state.weatherDetails
    
  }
})

  return (
<div className="flex  h-screen">
      <div className="flex-1/3 w-1/3 bg-gray-500 align-content-center">
     
      {/* Weather Details: {JSON.stringify(weatherDetails)} */}
      {weatherDetails?.location?.name}
      <br/>
     icon:: {weatherDetails?.current?.conditions?.icon}
    
      <p className='text-3xl'>
        <span>

      {weatherDetails?.current?.temp_c } °C
        </span>
      </p>
      <img src=  {weatherDetails?.current?.condition?.icon}

       alt="Weather Icon" 
       className="w-18 h-18"
      />
       <p>{weatherDetails?.location?.region}</p>
          <p>Temperature: {weatherDetails?.location?.country}</p>
         
      
       <p>{weatherDetails?.current?.condition?.text}</p>
          <p>Temperature: {weatherDetails?.current?.temp_c}°C</p>
          <p>Feels Like: {weatherDetails?.current?.feelslike_c}°C</p>
          <p>Wind: {weatherDetails?.current?.wind_kph} kph</p>
          <p>Humidity: {weatherDetails?.current?.humidity}%</p>
      
      <p>
        {weatherDetails?.current?.condition?.text}
      </p>
      </div>
      <div className="flex-2/3 w-2/3 bg-gray-100">

    {show}
      </div>

    </div>
  )
}

export default Home