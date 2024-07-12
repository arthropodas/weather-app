import React, { useEffect, useState } from "react";

import current from '../../services/Services';
import { getKey } from '../../axiosInstance';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBRadio,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Country() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(()=>{
        getData();
    },[])
    const getData = async () => {
        try {
          const response = await current("Paris");  
          const key = getKey()
          console.log("kwy>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", key)
          console.log("response:", response.data)                                                                             
        } catch (error) {
          console.error(error)
        }
      }
  return (
 <div>
    
 </div>
  );
}