
export const addToCartReducer = (state={ data : [] }, action)=>{
    
    switch(action.type){

        case "InitialiseCartData" : let ar3 = JSON.parse(localStorage.getItem("cartItems")) || [] ;
                                     return { data : ar3 } ;
        
        case "ADD" :  
                        let ar1 = JSON.parse(localStorage.getItem("cartItems")) || [] ;
                        if(ar1.length>0){
                            let flag = false ;
                            for(let i=0;i<ar1.length;i++){
                                if(ar1[i].id==action.payload.id){
                                    ar1[i].quantity = ar1[i].quantity + 1 ;
                                    flag = true ;
                                    break ; 
                                }
                            }
                            if(flag==true){
                                localStorage.setItem("cartItems",JSON.stringify(ar1)) ;
                                return { data : ar1} ;
                            }
                            else{
                                action.payload.quantity+=1 ;
                                let ar2 = [...ar1 , action.payload] ;
                                localStorage.setItem("cartItems",JSON.stringify(ar2)) ;
                                return { data : ar2 }
                            }
                        }else{
                            action.payload.quantity = action.payload.quantity + 1 ;
                            localStorage.setItem("cartItems",JSON.stringify([action.payload])) ;
                            return { data : action.payload } ;
                        }
                        
                        

        case "REMOVE" : 
                        
                         let ar5 = JSON.parse(localStorage.getItem("cartItems")) || []
                         if(ar5.length>0){
                            let flag2 = false ;
                            for(let i=0;i<ar5.length;i++){
                                if(Number(ar5[i].id)==Number(action.payload)){
                                    if(ar5[i].quantity==1){
                                        flag2 = true ;
                                        break ;
                                    }
                                    else{
                                      ar5[i].quantity -= 1 ; 
                                      break ;
                                    }
                                }
                            }
                            
                            if(flag2==true){
                                ar5 = ar5.filter(ele=>Number(ele.id)!=Number(action.payload)) ;
                            }

                            localStorage.setItem("cartItems",JSON.stringify(ar5)) ;
                            return { data : ar5 } ;
                            
                         } 
                         else{
                            return state ;
                         }
        case "EmptyCart" : return { data  : [] } ;
        default : return state ;
    }
}