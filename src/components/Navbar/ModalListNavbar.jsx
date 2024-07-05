import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const ModalListNavbar = () => {
  let { isLogin , setIsLogin } = useContext(AuthContext) ;
  let { showModalDivOnClick , setShowModalDivOnClick } = useContext(AuthContext) ;
  
  let navigate = useNavigate() ;

  function handleSignIn(e){
    e.preventDefault() ;
    navigate('/login') ;
  }
  function handleSignOut(e){
    e.preventDefault() ;
    navigate('/login') ;
  }
  function onChangeSelect(e){
    // console.log(e.target.value) ;
        navigate(`/category/${e.target.value}`) ;
  }

  return (
       
    <div className="ModalDivItemsList">
    <div>
        <button> All Products </button>
    </div>
    <div>
      <div className="haircareDiv">
          <select onChange={onChangeSelect} value={"Hair Care"}>
            <option value={""}>Hair Care</option>
            <option value={"Beautiful Curls"}>Beautiful Curls</option>
            <option value={"Shampoo"}>Shampoo</option>
            <option value={"Conditioner"}>Conditioner</option>
            <option value={"Masks"}>Masks</option>
            <option value={"Exclusive Combos"}>Exclusive Combos</option>
          </select>
   </div>
     </div>
     <div>
      <div className="haircareDiv">
          <select onChange={onChangeSelect} value="Body Care">
            <option>Body Care</option>
            <option>Body Wash &amp; Soaps</option>
            <option>Lotion &amp; Butters</option>
            <option>Deodrants &amp; Roll-Ons</option>
            <option>Combos</option>
           </select>
   </div>
     </div>
     <div>
      <div className="haircareDiv">
          <select onChange={onChangeSelect} value="Men+Care">
            <option>Men+Care</option>
            <option value={"Men+Care"}>Special for Men</option>
           </select>
      </div>
     </div>
     <div>
      <div className="haircareDiv">
          <select onChange={onChangeSelect} value={"Shop By Concern"}>
            <option>Shop By Concern</option>
            <option>Damaged Hair</option>
            <option>Dandruff</option>
            <option>Dry &amp; Frizzy Hair</option>
            <option>Dull Hair</option>
            <option>Hairfall &amp; Thinning</option>
            <option>Naturals</option>
           </select>
       </div>
     </div>
     <div>
         <button><b>#StopTheBeautyTest</b></button>
     </div>
     <div>
        <button> Dove Stories </button>
     </div>
     <div>
         <button> Track My Order </button>
     </div>
     <div>
         <button> About Us </button>
     </div>
     <div>
         <button> Contact Us </button>
         <br/><br/>
     </div>
     { isLogin["isLogin"]==false ?  
     <div onClick={handleSignIn}>
          <button>
              <img src="data:image/png;base64,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" alt="singin"/>
             &nbsp;&nbsp;&nbsp; Sign In 
             </button>
     </div>
       :
       <div onClick={handleSignOut}>
       <button>
           <img src="data:image/png;base64,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" alt="singin"/>
          &nbsp;&nbsp;&nbsp; Sign out
          </button>
  </div>
      }
</div>

  )
}
