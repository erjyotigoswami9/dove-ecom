import React, { useContext, useEffect, useState } from 'react'
import '../../styles/mainStyle.css'

import { useDispatch , useSelector } from 'react-redux'
import { Navbar } from '../Navbar/Navbar';
import { SliderImages } from '../bodyComponents/SliderImages';
import { FooterBox } from '../bodyComponents/FooterBox';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const CartComponent = () => {
  let { singleDataProductInformationCompletely , setSingleDataProductInformationCompletely } = useContext(AuthContext) ;
    let navigate = useNavigate() ;
  let [ showDataOfCharges , setShowDataOfCharges ] = useState(false) ;
  let dispatch = useDispatch() ;
  let stateCart = useSelector(state=>state.cartFunctionality) ;
  // console.log(stateCart) ;
  let [ totalPrice , setTotalPrice ] = useState(0) ;

  useEffect(()=>{
    dispatch({type : "InitialiseCartData"})
  },[])

  useEffect(()=>{
    let total1 = 0 ;
    for(let i=0;i<stateCart.data.length;i++){
        total1+=Number(stateCart.data[i].price) * Number(stateCart.data[i].quantity) ; 
    }
    setTotalPrice(total1) ;
  },[stateCart.data])

  function showProductFunc(ele){
    // console.log(ele.price,"rs") ;
    setSingleDataProductInformationCompletely(ele) ;
    localStorage.setItem("singleDataObject",JSON.stringify(ele));
    navigate('/product') ;
  }
  function handleCheckout(){
    dispatch({type:"EmptyCart"}) ;
    localStorage.setItem("cartItems",JSON.stringify([])) ;
    alert("Order Placed Successfully") ;
  }

  function addToCartBtn(i){
    if(Number(singleDataProductInformationCompletely.id)==Number(stateCart.data[i].id)){
    if(singleDataProductInformationCompletely.quantity==0){
            
      // console.log(singleDataProductInformationCompletely.quantity) ;
      singleDataProductInformationCompletely.quantity = singleDataProductInformationCompletely.quantity+1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
  
      }
      else {
      console.log(singleDataProductInformationCompletely.quantity) ;
      singleDataProductInformationCompletely.quantity = singleDataProductInformationCompletely.quantity+1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
      console.log(singleDataProductInformationCompletely.quantity) ;
      }
    dispatch({ type : "ADD" , payload : stateCart.data[i] }) ;
    }
    else 
    dispatch({ type : "ADD" , payload : stateCart.data[i] }) 
  }
  function removeFromCart(id,i){
    
    if(Number(singleDataProductInformationCompletely.id)==Number(stateCart.data[i].id)){
    // console.log(singleDataProductInformationCompletely.quantity) ;
    if(singleDataProductInformationCompletely.quantity>=1){
      singleDataProductInformationCompletely.quantity=singleDataProductInformationCompletely.quantity-1 ;
      localStorage.setItem("singleDataObject",JSON.stringify(singleDataProductInformationCompletely)) ;
      
  }
  dispatch({ type:"REMOVE" , payload: id })
  }
  else {
    // console.log("delete...") ;
  dispatch({ type:"REMOVE" , payload: id })
  }
}

  return (
   <>
   <Navbar/>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <h1 className="myShoppingBagH1">MY SHOPPING BAG</h1>
    <div className="cartDiv">
          <div>Congratulations! You save ₹10.50 on this order</div>
          
          {  stateCart && stateCart.data?.map((ele,i)=>{
            return (
          <div className="secondDivItemListShow" key={ele.id}>
            <img width="120" height="120" src={ele.imgSrc} alt="img" onClick={()=>showProductFunc(ele)} />
            <div>
                <p>{ele.title}</p>
                <p>₹{ele.price} &nbsp;&nbsp; <span>{ele.offer}% OFF</span></p>
                <div className="quantityDivShowInCart">
                    <button onClick={()=>removeFromCart(ele.id,i)}> - </button>  <span>&nbsp; {ele.quantity} &nbsp;</span> <button onClick={(e)=>addToCartBtn(i)}> + </button>
                </div>
            </div>
          </div>

            )
          })
          }

        <div className="thirdCouponDivInCart">Have a coupon code? Apply in the next step</div>
        
        { showDataOfCharges &&
        <div className="fourthChargesDivCheckoutIncart">
          <div>
            <div>
                <div>Shipping Charge</div>
                <div><span className="greenColorShippingPriceDiv">₹30</span></div>
            </div>
            <div>
                <div>Items</div>
                <div>₹{totalPrice}</div>
            </div>
            <div>
                <div>5% Off On Prepaid Orders</div>
                <div>- ₹{Math.floor(totalPrice*0.05)}</div>
            </div>
          </div>
          
        </div> 
        }

        <div className="priceCheckoutDivInCart">
            <button><div>₹{totalPrice==0? 0 : totalPrice+30- Math.floor(totalPrice*0.05) }</div> <div><div onClick={()=>setShowDataOfCharges(!showDataOfCharges)}> ^ </div></div></button>
            <button className="checkoutBtnInCart" onClick={handleCheckout}>Check Out <marquee className="marqueeVShow" scrollamount="3" direction="right"> &gt; </marquee> </button>
          </div>
    </div>
   <br /><br /><br /><br /><br /><br /><br /><br />
   
   <FooterBox/>
   </>
  )
}
