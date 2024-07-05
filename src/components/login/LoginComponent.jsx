import React, { useContext, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../../styles/mainStyle.css'
import { AuthContext } from '../../context/AuthContext';
import { Navbar } from '../Navbar/Navbar';
import { FooterBox } from '../bodyComponents/FooterBox';

function LogoutComponent(){
  let { isLogin , setIsLogin } = useContext(AuthContext) ;
  let navigate = useNavigate() ;
  // console.log(isLogin) ;

  function handleSignOutBtn(e){
    e.preventDefault() ;
    setIsLogin({"isLogin":false}) ;
    localStorage.setItem("isLogin",JSON.stringify({"isLogin" : false})) ;
  }
  function handleReturnToStore(e){
    e.preventDefault() ;
    navigate('/') ;
  }

  return(
    <div className='loginDiv' style={{marginTop:"14%" , boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", width : "fit-content", paddingLeft:"50px", paddingRight:"50px", height:"fit-content", paddingBottom:"50px", paddingTop:"50px"}}>
         <h1>Logout</h1>
         <p>Are you sure you want to signout ?</p>
       
        <form style={{display:"flex", flexWrap:"wrap", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <button className="signInBtnYellowColor" onClick={handleSignOutBtn} style={{width:"300px",height:"50px" , paddingTop:"15px", paddingBottom:"15px"}}>Sign out</button>
            <button className="returnToStoreBtn" onClick={handleReturnToStore} style={{width:"300px",height:"50px", paddingTop:"15px", paddingBottom:"15px"}}>Return to Store</button>
        </form>
    </div>
  )
}

export const LoginComponent = () => {
    let [ formData , setFormData ] = useState({email :"", password : ""}) ;
    let { isLogin , setIsLogin } = useContext(AuthContext) ;
    let navigate = useNavigate() ;
    // console.log(isLogin) ;

    function handleForgetPswd(e){
        e.preventDefault() ;
        navigate('/forgetPswdComponent') ;
    }
    function handleSignIn(e){
        e.preventDefault() ;
        console.log(formData) ;
        if(formData.email!="" && formData.password!=""){
          setIsLogin({"isLogin" : true}) ;
          localStorage.setItem("isLogin",JSON.stringify({"isLogin" : true})) ;
          setFormData({email :"", password : ""}) ;
        }
        else{
          setIsLogin({"isLogin" : false}) ;
          localStorage.setItem("isLogin",JSON.stringify({"isLogin" : false})) ;
        }
       
        // navigate('/') ;
    }
    function handleReturnToStore(e){
        e.preventDefault() ;
        navigate('/') ;
    }
  return (
    <>
    <Navbar/><br /><br /><br /><br /><br /><br /><br />
    { isLogin.isLogin==false ? 
     <div className="loginDiv">
        <h1>Login</h1>
        <p>Don't have an account?<button className="signUpBtn">Sign up here.</button></p><br/>
        <div>
            <img width="40" height="40" src="data:image/png;base64,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" alt="fb-logo"/>
              &nbsp; &nbsp;
            <img width="40" height="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UJKAELWyPbVDB3LNY_7j3A4Ai2Nxqr41Vw&s" alt="google+ logo"/>
        </div><br/><br/>
        <form>
            <input type="email"  placeholder="Email" onChange={(e)=>setFormData({...formData, email : e.target.value})} value={formData.email} required />
            <input type="password"  placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value })} value={formData.password} required />
            <button className="forgetPswdBtn" onClick={handleForgetPswd}>Forget Your Password?</button><br/>
            <button className="signInBtnYellowColor" onClick={handleSignIn}>Sign In</button>
            <button className="returnToStoreBtn" onClick={handleReturnToStore}>Return to Store</button>
        </form>
    </div>

    : <LogoutComponent/> }
     <br /><br /><br /><br /><br /><br /><br /><br />
     <FooterBox/>
    </>
  )
}
