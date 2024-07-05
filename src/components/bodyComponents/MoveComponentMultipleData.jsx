import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Beautiful_Curls } from '../category/Beautiful_Curls';
import { b1 } from '../../dataObjects/categoryWiseData/BeautifulCurlsData1' ;
import { b9 } from '../../dataObjects/categoryWiseData/menCareData1'
import { b5 } from '../../dataObjects/categoryWiseData/bodyWashAndSoapsData1' ;
import { FooterComponent } from '../FooterComponent';
import { Navbar } from '../Navbar/Navbar';
import { SliderImages } from './SliderImages';

export const MoveComponentMultipleData = () => {

    let namedata = useParams() ;
    // console.log(namedata) ;
    let [ yesResult , setYesResult ] = useState(false) ;
    let navigate = useNavigate() ;
    let [ goToB1 , setGoToB1 ] = useState(false) ;
    let [ goToB5 , setGoToB5 ] = useState(false) ;
    let [ goToB9 , setGoToB9 ] = useState(false) ;

    useEffect(()=>{
     if(namedata.name!="Men+Care" && namedata.name!="Beautiful Curls" && namedata.name!="Body Wash & Soaps"){
         setYesResult(true) ;
     }
    },[]) ;

  return (
   <>
   { namedata.name=="Men+Care" && <Beautiful_Curls data={b9} /> }
   { namedata.name=="Beautiful Curls" && <Beautiful_Curls data={b1} /> }
   { namedata.name=="Body Wash & Soaps" && <Beautiful_Curls data={b5} /> }
   { yesResult &&
    <div style={{width:"fit-content", textAlign:"center", margin:"auto" ,marginTop:"120px", fontFamily : "cursive", padding:"50px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}> 
            <p onClick={()=>navigate('/')} style={{fontStyle: "revert-layer", color:"gray", textDecoration:"underline" , fontSize:"17px", textAlign:"left"}}>Home</p>
            <h2>Sorry ! data is in Collection Phase ...</h2> <br />
            <p style={{textAlign:"justify", marginLeft:"10%", fontSize:"16px", fontFamily: "monospace" }}>Data for <br/><b> <span onClick={()=>{setGoToB9(true); setYesResult(false)}}>Men+Care</span></b>, <br/> <b>
              <span onClick={()=>{setGoToB5(true); setYesResult(false)}}>Body Wash & Soaps</span> </b> <br/> <b> <span onClick={()=>{setGoToB1(true); setYesResult(false)}}>Beautiful Curls</span></b> <br/> has been added in the Category Section</p> 
    </div>
   
   }
   {  goToB1 && <Beautiful_Curls data={b1} /> }
   {  goToB5 && <Beautiful_Curls data={b5} /> }
   {  goToB9 && <Beautiful_Curls data={b9} /> }
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   <SliderImages/>
   <FooterComponent/>
   </>
  )
}
