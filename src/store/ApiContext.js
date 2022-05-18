import { createContext, useState } from "react";
import axios from 'axios'

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
  const [data, setData] = useState([])
  

  const showApi =() =>{
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response)=>{
      setData(response.data.results)
      
    })
  }

  return(
    <ApiContext.Provider
      value={
        {
          data, showApi
        }
      }
    >
      {children}
    </ApiContext.Provider>
  )
}