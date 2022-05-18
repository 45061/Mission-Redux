import {useContext} from 'react'
import {ApiContext} from '../store/ApiContext'

function Home (){
  const dataApi = useContext(ApiContext);
  return(
    <div> 
      {dataApi.data.map((item)=>{
        return( 
        <div key={item.id}>
          <img src ={item.image} alt='imagen personaje'/>
          <h2> {item.name} </h2>
          <p> {item.status} </p>
        </div>)
      })}
    </div>
  )
}

export default Home