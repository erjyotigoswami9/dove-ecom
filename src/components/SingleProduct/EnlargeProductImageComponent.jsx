import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';

export const EnlargeProductImageComponent = () => {
    let [ sizeToggle , setSizeToggle ] = useState(false) ;
    let { singleUrlToShow , setSingleUrlToShow } = useContext(AuthContext) ;
  return (
    <div style={{textAlign:"center"}}>
        <img src={singleUrlToShow} alt="img" style={ sizeToggle ? { width : "50%" , height : "50%" } : { width : "90%" , height : "90%" } } onClick={()=>setSizeToggle(!sizeToggle)}/>
    </div>
  )
}
