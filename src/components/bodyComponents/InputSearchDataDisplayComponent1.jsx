import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { b1 } from '../../dataObjects/categoryWiseData/BeautifulCurlsData1' 
import { b5 } from '../../dataObjects/categoryWiseData/bodyWashAndSoapsData1'
import { b9 } from '../../dataObjects/categoryWiseData/menCareData1'
import { Beautiful_Curls } from '../category/Beautiful_Curls'
import { useDispatch, useSelector } from 'react-redux'

const totalArr1 = [...b1 , ...b5, ...b9 ] ;

export const InputSearchDataDisplayComponent1 = () => {

    let { inputSearchvalue , setInputSearchvalue } = useContext(AuthContext) ; 
    let dispatch = useDispatch() ;
    let stateShowInput = useSelector(state=>state.searchInput) ;


    useEffect(()=>{
        dispatch({type : "initialise", payload : totalArr1 }) ;
    },[])

    function callDis1Func(){

        dispatch({type : "show" , payload : inputSearchvalue }) ;
    }
    useEffect(()=>{ 
        callDis1Func() ; 
        // console.log("data is ",stateShowInput.data) ;
     },[inputSearchvalue])

    
  return (
    <>
    <br /><br /><br /><br /><br />
    {/* {console.log(stateShowInput.data)} */}
    { 
      <Beautiful_Curls data={ stateShowInput.data } category={"Special Collection"} />
    }
    {
        stateShowInput.data.length==0 && inputSearchvalue!="" && <h1 style={{textAlign:"center", color:"gray", marginTop:"50px"}}>Data Not Found !</h1>
    }
    <br /><br /><br /><br /><br />
    </>
  )
}
