import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { a2 } from '../../dataObjects/imagesBoxData1'
import { useNavigate } from 'react-router-dom'
import { i1 } from '../../dataObjects/categoryWiseData/sliderImagesData1'
import { AuthContext } from '../../context/AuthContext'


export const SliderImages = () => {
  
  let { singleDataProductInformationCompletely , setSingleDataProductInformationCompletely } = useContext(AuthContext) ;
  
  let { singleUrlToShow , setSingleUrlToShow } = useContext(AuthContext) ;

    let state = useSelector(state=>state.sliderImage) ;
    let dispatch = useDispatch() ;
    let navigate = useNavigate() ;
    
    let imgSrcShowUrl = useSelector(state=>state.imgSrcChange) ;
    // console.log(state) ;

    function handleGoFunc(id){
      // console.log("calling...", id) ;
      let a1 = i1.filter(ele=>Number(ele.id)==Number(id)) ;
      // console.log(...a1) ;
      let a2 = a1[0] ;
        // console.log(a2.imgSrc) ;
        setSingleUrlToShow(a2.imgSrc) ;
        dispatch({type: "changeImg", payload : a2.imgSrc}) ;
      setSingleDataProductInformationCompletely(...a1) ;
      localStorage.setItem("singleDataObject",JSON.stringify(...a1)) ;
      navigate('/product') ;
    }
  return (
   <>
          <div className="threeDivsPNV">
             <div className="firstDivPrevios">
            <button className="previousScrollButton" onClick={()=>{console.log(state); dispatch({type: "Previous2", payload : {length : a2.length, current : state.current , oneNext : state.current + 1 , twoNext : state.current + 2 , threeNext : state.current + 3}})}}> &lt; </button>
           </div>
       
           <div className="gridImages1">
            
            <div onClick={()=>handleGoFunc(a2[state.current].id)}>
              <img src={a2[state.current].imgSrc} alt="img"/>
              <p>{a2[state.current].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.current].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.current].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.current].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.current].grmOrMl}</button>
              <h4>Rs {a2[state.current].price} <del>Rs {a2[state.current].strikeOffPrice}</del>&nbsp; <span>{a2[state.current].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
             
             <div onClick={()=>handleGoFunc(a2[state.oneNext].id)}>
              <img src={a2[state.oneNext].imgSrc} alt="img"/>
              <p>{a2[state.oneNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.oneNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.oneNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.oneNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.oneNext].grmOrMl}</button>
              <h4>Rs {a2[state.oneNext].price} <del>Rs {a2[state.oneNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.oneNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
           
             <div onClick={()=>handleGoFunc(a2[state.twoNext].id)}>
              <img src={a2[state.twoNext].imgSrc} alt="img"/>
              <p>{a2[state.twoNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.twoNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.twoNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.twoNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.twoNext].grmOrMl}</button>
              <h4>Rs {a2[state.twoNext].price} <del>Rs {a2[state.twoNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.twoNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
           
             <div onClick={()=>handleGoFunc(a2[state.threeNext].id)}>
              <img src={a2[state.threeNext].imgSrc} alt="img"/>
              <p>{a2[state.threeNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.threeNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.threeNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.threeNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.threeNext].grmOrMl}</button>
              <h4>Rs {a2[state.threeNext].price} <del>Rs {a2[state.threeNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.threeNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>        
    
           </div>

           <div className="gridImages2">
            
            <div onClick={()=>handleGoFunc(a2[state.current].id)}>
              <img src={a2[state.current].imgSrc} alt="img"/>
              <p>{a2[state.current].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.current].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.current].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.current].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.current].grmOrMl}</button>
              <h4>Rs {a2[state.current].price} <del>Rs {a2[state.current].strikeOffPrice}</del>&nbsp; <span>{a2[state.current].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
             
             <div onClick={()=>handleGoFunc(a2[state.oneNext].id)}>
              <img src={a2[state.oneNext].imgSrc} alt="img"/>
              <p>{a2[state.oneNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.oneNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.oneNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.oneNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.oneNext].grmOrMl}</button>
              <h4>Rs {a2[state.oneNext].price} <del>Rs {a2[state.oneNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.oneNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
           
             <div onClick={()=>handleGoFunc(a2[state.twoNext].id)}>
              <img src={a2[state.twoNext].imgSrc} alt="img"/>
              <p>{a2[state.twoNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.twoNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.twoNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.twoNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.twoNext].grmOrMl}</button>
              <h4>Rs {a2[state.twoNext].price} <del>Rs {a2[state.twoNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.twoNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>        
    
           </div>

           <div className="gridImages3">
            
            <div onClick={()=>handleGoFunc(a2[state.current].id)}>
              <img src={a2[state.current].imgSrc} alt="img"/>
              <p>{a2[state.current].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.current].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.current].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.current].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.current].grmOrMl}</button>
              <h4>Rs {a2[state.current].price} <del>Rs {a2[state.current].strikeOffPrice}</del>&nbsp; <span>{a2[state.current].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>
             
             <div onClick={()=>handleGoFunc(a2[state.oneNext].id)}>
              <img src={a2[state.oneNext].imgSrc} alt="img"/>
              <p>{a2[state.oneNext].title}</p>
              <div>
                <img width="20" height="20" src={a2[state.oneNext].imgStarFilledSrc} alt="star"/>
                &nbsp; | &nbsp;
                <img width="20" height="20" src={a2[state.oneNext].imgTickSrc} alt="tick"/>
                &nbsp; {a2[state.oneNext].reviewsNo} Verified Reviews 
              </div>
              <br/>
              <button className="btnGram">{a2[state.oneNext].grmOrMl}</button>
              <h4>Rs {a2[state.oneNext].price} <del>Rs {a2[state.oneNext].strikeOffPrice}</del>&nbsp; <span>{a2[state.oneNext].offer}% OFF</span></h4>
              <button className="btnGram2">Add To Bag</button>
             </div>       
    
           </div>


        <div className="lastDivNext">
                <button className="scrollNextButton" onClick={()=>{
                  // console.log(state);
                    dispatch({type:"Next2", payload: {length : a2.length , current : state.current , oneNext : state.current + 1 , twoNext : state.current + 2 , threeNext : state.current + 3}})}}> &gt; </button>
            </div>
            
    </div>
    <br/><br/><br/>

   </>
  )
}
