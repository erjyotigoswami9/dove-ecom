import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';

export const MediaResponsiveNavbar = () => {
  
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ;
  let dispatch = useDispatch() ;
  let stateCart = useSelector(state=>state.cartFunctionality) ;

 var tmId ;

  function handleInputSearchFirst(e){
      e.preventDefault() ;
      if(tmId){
        clearInterval(tmId) ;
      }
      console.log(e.target.value) ; 
      setInputSearchvalue(e.target.value) ;
      setTimeout(()=>{
        e.target.value = "" ;
      },10000)
  }

  let navigate = useNavigate() ;

  function handleProfile(e){
      e.preventDefault() ;
      setInputSearchvalue("") ;
      navigate('/login') ;
  }
  function handleCart(e){
      e.preventDefault() ;
      setInputSearchvalue("") ;
      navigate('/cart') ;
  }

  return (
   <>
       
       <div className="subNavbarMediaResponsive">
          <div>
              <button onClick={()=>setShowModalDivOnClick(!showModalDivOnClick)}><hr/><hr/><hr/></button>
          </div>
          <div>
            <img src="https://www.dove-india.com/cdn/shop/files/newLogo_160x.png?v=1663835378" alt="dove-logo" onClick={()=>{navigate('/'); setInputSearchvalue("")}}/>
          </div>
          <div>
            <div>
                <button className="imageProfile2" onClick={handleProfile}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5vRSzfNq8yKeZ0xk4EUDyeBU_4Q6lMT_3Q&s" alt="profile"/></button>
                <button className="imageProfile2" onClick={handleCart}>
                    <img src="data:image/jpeg;base64,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" alt="cart"/>
                   
                </button>
            </div><span><sup style={{color:"rgb(213,172,94)", fontWeight:"600"}}>{stateCart.data.length}</sup></span>
          </div>         
       </div>

       <div className="searchNavbarResponsiveDiv">
        <div className="inputSearchDiv">
            <img className="searchImage" src="data:image/png;base64,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" alt="search"/>
            <input type="text" className="searchInputText" onInput={(e)=>handleInputSearchFirst(e)}/>
        </div>
      </div>
   </>
  )
}
