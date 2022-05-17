import React, {useContext} from 'react'
import {ApiContext} from '../store/ApiContext'



export default function Button() {
  const api = useContext(ApiContext)
  return(
    <button onClick={api.showApi}>
      Api
    </button>
  )
}
 