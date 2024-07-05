import React, { useContext, useEffect, useState } from 'react'
import { b1 } from '../../dataObjects/categoryWiseData/BeautifulCurlsData1'
import '../../styles/mainStyle.css'
import { AuthContext } from '../../context/AuthContext'
import { json, useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
 
export const Beautiful_Curls = (prop) => {
    // console.log("data of prop is ",prop.data) ;

    let navigate = useNavigate() ;
    let { singleDataProductInformationCompletely , setSingleDataProductInformationCompletely } = useContext(AuthContext) ;
    
    let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ; 
 
    let dispatch = useDispatch() ;
    let stateData = useSelector(state=>state.sortFunctionality) ;
    let stateCart = useSelector(state=>state.cartFunctionality) ;
    // console.log(stateData) ;

    useEffect(()=>{
        // console.log("initialise prop data ", stateData) ;
        dispatch({type : "InitializeData" , payload : prop.data }) ;
        
    },[])

    useEffect(()=>{
        
        // console.log("initialise prop data ", stateData) ;
        dispatch({type : "InitializeData" , payload : prop.data }) ;

    },[inputSearchvalue])

    function goFunc(i){
        localStorage.setItem("singleDataObject",JSON.stringify(stateData.data[i])) ;
        navigate('/product') ;
    }
    function selectChangeFunc(e){
        if(e.target.value==""){
            dispatch({type : "UnfilteredDataPrice", payload : prop.data }) ;
        }else 
        if(e.target.value!=""){
            // console.log(e.target.value) ;
            dispatch({type : `${e.target.value}Price` , payload : stateData.data }) ;
        }
    }

    function addToCartBtn(i,e){
        dispatch({ type : "ADD" , payload : stateData.data[i] }) ;
        e.stopPropagation() ;
    }

  return (
    <>
    <div className='blueColorH1Data'>
        <p><span onClick={()=>navigate('/')}>Home</span> &nbsp; &gt; &nbsp; { prop.category =="Special Collection" ? prop.category : prop.data[0].category} </p>
        <h1>{prop.category =="Special Collection" ? prop.category : prop.data[0].category}</h1>
    </div>
    <div className='greyColorSortDiv'>
        <select onChange={(e)=>{selectChangeFunc(e)}}>
            <option value="">Sort by Price</option>
            <option value="HighToLow">High to Low</option>
            <option value="LowToHigh">Low to High</option>
        </select>
    </div>
    <div className="gridImagesOfItemsDisplay4Here">
            
            {
                stateData.data?.map((ele,i)=>{
                    return(
         <div key={`${ele}-${i}-${Date.now()}`} onClick={()=>{ setSingleDataProductInformationCompletely(stateData.data[i]) ; goFunc(i) ; }}>
              <img src={stateData.data[i].imgSrc} alt="img"/>
              <p>{stateData.data[i].title}</p>
              <div>
                <img width="20" height="20" src={stateData.data[i].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={stateData.data[i].imgTickSrc} alt="tick"/>
                &nbsp; {stateData.data[i].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{stateData.data[i].grmOrMl}</button>
              <h4>Rs {stateData.data[i].price} <del>Rs {stateData.data[i].strikeOffPrice}</del>&nbsp; <span>{stateData.data[i].offer}% OFF</span></h4>
              <button className="btnGram2" onClick={(e)=>addToCartBtn(i,e)}>Add To Bag</button>
             </div>
             
                    )
                })
            }
            
             

        </div>
    </>
  )
}
