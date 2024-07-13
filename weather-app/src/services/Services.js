import { axiosInstance } from "../axiosInstance";
import { apiKey } from "../axiosInstance";

export default async function current(country){
    console.log("isnide the cju", country, apiKey);
    return await axiosInstance.get(`/v1/v4/current.json?&key=${apiKey}&q=${country}`)
}