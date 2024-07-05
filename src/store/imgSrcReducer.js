export const imgSrcReducer1 = (state={imgSrc:""},action)=>{
    switch(action.type){
        case "start" : return state ;
        case 'changeImg' : return { imgSrc : action.payload } ;
        default : return state ;
    }
}