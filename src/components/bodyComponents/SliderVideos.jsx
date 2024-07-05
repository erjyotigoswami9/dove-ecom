import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import { a1 } from '../../dataObjects/videosBoxData1'
import { v1 } from '../../dataObjects/categoryWiseData/sliderVideoData1' ;

export const SliderVideos = () => {

    let { singleDataProductInformationCompletely , setSingleDataProductInformationCompletely } = useContext(AuthContext) ;
    let state = useSelector(state=>state.slider3videos) ;
    let dispatch = useDispatch() ;
    let navigate = useNavigate() ;
    let { singleUrlToShow , setSingleUrlToShow } = useContext(AuthContext) ;
    
    let imgSrcShowUrl = useSelector(state=>state.imgSrcChange) ;

    function handleGoFunc(id){
        // console.log("calling...", id) ;
        let a1 = v1.filter(ele=>Number(ele.id)==Number(id)) ;
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
            <button className="previousScrollButton" onClick={()=>{console.log(state); dispatch({type: "Previous", payload : {length : a1.length, current : state.current , oneNext : state.current + 1 , twoNext : state.current + 2 , threeNext : state.current + 3}})}}> &lt; </button>
           </div>
       
       <div className="gridVideosItems">
          
            <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.current].id)}>
                <h3>{a1[state.current].offer} OFF</h3>
                <video className="videoSingleItem" src={a1[state.current].videoSrc} autoPlay controls muted loop>
                    
                </video>
                <img src={a1[state.current].imgSrc} alt="img"/>
               
                <h4> {a1[state.current].title} </h4>
                <div className="logoImagesStars">
                    <img src={a1[state.current].starFullSrc} alt="stars"/>
                    <img src={a1[state.current].starFullSrc} alt="stars"/>
                    <img src={a1[state.current].starFullSrc} alt="stars"/>
                    <img src={a1[state.current].starFullSrc} alt="stars"/>
                    <img src={a1[state.current].starFullSrc} alt="stars"/>
                    ({a1[state.current].no})
                </div>
                <h4>{a1[state.current].price}  <del>{a1[state.current].strikeOffPrice}</del> </h4>
                <button className="addToBag">ADD TO BAG</button>
               
            </div>

            <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.oneNext].id)}>
                <h3>{a1[state.oneNext].offer} OFF</h3>
                <video className="videoSingleItem" src={a1[state.oneNext].videoSrc} autoPlay controls muted loop>
                    
                </video>
                <img src={a1[state.oneNext].imgSrc} alt="img"/>
               
                <h4> {a1[state.oneNext].title} </h4>
                <div className="logoImagesStars">
                    <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                    ({a1[state.oneNext].no})
                </div>
                <h4>{a1[state.oneNext].price}  <del>{a1[state.oneNext].strikeOffPrice}</del> </h4>
                <button className="addToBag">ADD TO BAG</button>
               
            </div>


            <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.twoNext].id)}>
                <h3>{a1[state.twoNext].offer} OFF</h3>
                <video className="videoSingleItem" src={a1[state.twoNext].videoSrc} autoPlay controls muted loop>
                    
                </video>
                <img src={a1[state.twoNext].imgSrc} alt="img"/>
               
                <h4> {a1[state.twoNext].title} </h4>
                <div className="logoImagesStars">
                    <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                    ({a1[state.twoNext].no})
                </div>
                <h4>{a1[state.twoNext].price}  <del>{a1[state.twoNext].strikeOffPrice}</del> </h4>
                <button className="addToBag">ADD TO BAG</button>
               
            </div>

            <div className="singleItemsDiv"  onClick={()=>handleGoFunc(a1[state.threeNext].id)}>
                <h3>{a1[state.threeNext].offer} OFF</h3>
                <video className="videoSingleItem" src={a1[state.threeNext].videoSrc} autoPlay controls muted loop>
                    
                </video>
                <img src={a1[state.threeNext].imgSrc} alt="img"/>
               
                <h4> {a1[state.threeNext].title} </h4>
                <div className="logoImagesStars">
                    <img src={a1[state.threeNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.threeNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.threeNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.threeNext].starFullSrc} alt="stars"/>
                    <img src={a1[state.threeNext].starFullSrc} alt="stars"/>
                    ({a1[state.threeNext].no})
                </div>
                <h4>{a1[state.threeNext].price}  <del>{a1[state.threeNext].strikeOffPrice}</del> </h4>
                <button className="addToBag">ADD TO BAG</button>
               
            </div>
        </div>


         {/* responsive 3 slider for medium screen  */}

         <div className="gridVideosItems2">
          
          <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.current].id)}>
              <h3>{a1[state.current].offer} OFF</h3>
              <video className="videoSingleItem" src={a1[state.current].videoSrc} autoPlay controls muted loop>
                  
              </video>
              <img src={a1[state.current].imgSrc} alt="img"/>
             
              <h4> {a1[state.current].title} </h4>
              <div className="logoImagesStars">
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  ({a1[state.current].no})
              </div>
              <h4>{a1[state.current].price}  <del>{a1[state.current].strikeOffPrice}</del> </h4>
              <button className="addToBag">ADD TO BAG</button>
             
          </div>

          <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.oneNext].id)}>
              <h3>{a1[state.oneNext].offer} OFF</h3>
              <video className="videoSingleItem" src={a1[state.oneNext].videoSrc} autoPlay controls muted loop>
                  
              </video>
              <img src={a1[state.oneNext].imgSrc} alt="img"/>
             
              <h4> {a1[state.oneNext].title} </h4>
              <div className="logoImagesStars">
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  ({a1[state.oneNext].no})
              </div>
              <h4>{a1[state.oneNext].price}  <del>{a1[state.oneNext].strikeOffPrice}</del> </h4>
              <button className="addToBag">ADD TO BAG</button>
             
          </div>


          <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.twoNext].id)}>
              <h3>{a1[state.twoNext].offer} OFF</h3>
              <video className="videoSingleItem" src={a1[state.twoNext].videoSrc} autoPlay controls muted loop>
                  
              </video>
              <img src={a1[state.twoNext].imgSrc} alt="img"/>
             
              <h4> {a1[state.twoNext].title} </h4>
              <div className="logoImagesStars">
                  <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.twoNext].starFullSrc} alt="stars"/>
                  ({a1[state.twoNext].no})
              </div>
              <h4>{a1[state.twoNext].price}  <del>{a1[state.twoNext].strikeOffPrice}</del> </h4>
              <button className="addToBag">ADD TO BAG</button>
             
          </div>
      </div>

         {/* responsive 2 slider for medium screen  */}

         <div className="gridVideosItems3">
          
          <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.current].id)}>
              <h3>{a1[state.current].offer} OFF</h3>
              <video className="videoSingleItem" src={a1[state.current].videoSrc} autoPlay controls muted loop>
                  
              </video>
              <img src={a1[state.current].imgSrc} alt="img"/>
             
              <h4> {a1[state.current].title} </h4>
              <div className="logoImagesStars">
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  <img src={a1[state.current].starFullSrc} alt="stars"/>
                  ({a1[0].no})
              </div>
              <h4>{a1[state.current].price}  <del>{a1[state.current].strikeOffPrice}</del> </h4>
              <button className="addToBag">ADD TO BAG</button>
             
          </div>

          <div className="singleItemsDiv" onClick={()=>handleGoFunc(a1[state.oneNext].id)}>
              <h3>{a1[state.oneNext].offer} OFF</h3>
              <video className="videoSingleItem" src={a1[state.oneNext].videoSrc} autoPlay controls muted loop>
                  
              </video>
              <img src={a1[state.oneNext].imgSrc} alt="img"/>
             
              <h4> {a1[state.oneNext].title} </h4>
              <div className="logoImagesStars">
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  <img src={a1[state.oneNext].starFullSrc} alt="stars"/>
                  ({a1[1].no})
              </div>
              <h4>{a1[state.oneNext].price}  <del>{a1[state.oneNext].strikeOffPrice}</del> </h4>
              <button className="addToBag">ADD TO BAG</button>
             
          </div>

      </div>


        <div className="lastDivNext">
                <button className="scrollNextButton" onClick={()=>{console.log(state);  dispatch({type:"Next", payload: {length : a1.length , current : state.current , oneNext : state.current + 1 , twoNext : state.current + 2 , threeNext : state.current + 3}})}}> &gt; </button>
            </div>
    </div>

   </>
  )
}
