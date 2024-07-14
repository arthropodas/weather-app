import axios from "axios";
import { axiosInstance } from "../axiosInstance";
import { apiKey, endPoint } from "../axiosInstance";


export default async function current(country){
    console.log("the endpoitn is >>>>>>>>>>>>>>>>" ,endPoint);
    console.log("axios istnace", axiosInstance)
    return await axiosInstance.get("/current.json",{params  :{q:country}})
}