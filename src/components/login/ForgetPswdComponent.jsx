import React from 'react'
import '../../styles/mainStyle.css' 
import { useNavigate } from 'react-router-dom'

export const ForgetPswdComponent = () => {

    let navigate = useNavigate() ;

    function handleSignIn(e){
        e.preventDefault() ;
        navigate('/login') ;
    }
    function handleReturnToLogin(e){
        e.preventDefault() ; 
        navigate('/login') ;
    }
  return (
    <>
    <div className="loginDiv">
        <h1>Reset your password</h1>
        <p>We will send you an email to reset your password.</p><br/>
        <div>
            
        </div><br/><br/>
        <form>
            <input type="email"  placeholder="Email" required />
            <br/>
            <button className="signInBtnYellowColor" onClick={handleSignIn}>Submit</button> &nbsp;&nbsp; <span>Or</span> &nbsp;&nbsp;
            <button className="returnToStoreBtn" onClick={handleReturnToLogin}>Cancel</button>
        </form>
    </div>

    </>
  )
}
