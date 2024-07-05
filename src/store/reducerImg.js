
export const SliderImgs = (state = {current : 0 , oneNext : 1 , twoNext : 2 , threeNext : 3 } , action)=>{
    
    switch(action.type){
        case 'Next2' : 
                        //  console.log(state) ;
                        if(action.payload.threeNext==(action.payload.length-1)&& action.payload.twoNext==(action.payload.length-2) && action.payload.oneNext==(action.payload.length-3) && action.payload.current==(action.payload.length-4)){
                         {//console.log("3=>0");
                          return { threeNext : 0 , twoNext : action.payload.length-1 , oneNext : action.payload.length-2 , current : action.payload.length-3 } }
                        }
                         if(action.payload.twoNext==(action.payload.length-1) && action.payload.oneNext==(action.payload.length-2)&& action.payload.current==(action.payload.length-3)){
                           {// console.log("3=>1") ; 
                           return { threeNext : 1, twoNext : 0 , oneNext : action.payload.length-1 , current : action.payload.length-2 } }
                         }
                         
                         if(state.threeNext== (1) && state.twoNext==(0) && state.oneNext == (action.payload.length-1) && state.current==(action.payload.length-2)){
                           {//console.log("3=>2") ; 
                            return { threeNext:2 ,twoNext : 1 , oneNext : 0 , current : action.payload.length-1 }  }
                         }
                         if(action.payload.current == (action.payload.length-1) && state.threeNext==2 && state.twoNext == 1 && state.oneNext==0){
                          { //console.log("3=>3") ;
                           return { current : 0 , threeNext:3 , twoNext : 2 , oneNext : 1 }  }
                         }
                        //  console.log("hello");
                         return { current : action.payload.current +1 , oneNext : action.payload.oneNext +1 , twoNext : action.payload.twoNext+1 , threeNext : action.payload.threeNext+1 }
         
                       
        case 'Previous2' : 
                        //    console.log(state) ;
                           if(state.current==0 && state.oneNext == 1 && state.twoNext == 2 && state.threeNext == 3){
                             {console.log("3=>2"); return { current : action.payload.length -1 , oneNext : 0 , twoNext : 1 , threeNext : 2 } }
                           }
                           if(state.oneNext==0 && state.twoNext == 1 && state.threeNext == 2 && state.current==(action.payload.length-1)){
                              {console.log("3=>1"); return { oneNext : action.payload.length -1 , twoNext : 0 , threeNext : 1 , current: action.payload.length-2 } }
                           }
                           if( state.current==(action.payload.length-2) && state.oneNext==(action.payload.length-1) && state.twoNext == 0 && state.threeNext == 1 ){
                             console.log("3=>0"); return { current: action.payload.length-3 , oneNext : action.payload.length -2 , twoNext : action.payload.length-1 , threeNext : 0 } 
                           }
                           if(action.payload.current==(action.payload.length-3) && state.oneNext==(action.payload.length-2) && state.twoNext == (action.payload.length-1) && state.threeNext==0){
                            console.log("3=>last");  return { current : action.payload.length - 4 , oneNext : action.payload.length-3 , twoNext : action.payload.length-2 , threeNext : action.payload.length-1 }
                           }
                            console.log("normal") ;
                           return { current: state.current -1 , oneNext : state.oneNext-1 , twoNext : state.twoNext - 1 , threeNext : state.threeNext -1 }
        
        default : return state ;   
    }
}