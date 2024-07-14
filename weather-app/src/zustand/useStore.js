

import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useStore = create(
 
    (set)=>{
    return {
      count :10, 
      username: "john",
      show: true,
      countryWeather:{},
      increaseCount: ()=>{
        set((state)=>({...state, count: state.count + 1}))
  
      },
   
      weatherDetails:[],
      setWeatherDetails: (details) => set({ weatherDetails: details }),
  
    }
  })
  
  
