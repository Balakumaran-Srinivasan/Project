import React from 'react'
import './loginpage.css'

function LoginHeader(){
    return(
    <header>
        <div><h1>Instagram</h1></div>
        <div class="facebook-login"><i class="fa-brands fa-facebook logo"></i>Continue with Facebook</div>
       </header>)
    
}
function LoginMain()
{   
    return(
    <main>
    <section>
        <p>----------OR-----------</p>
        <div> 
            <form action="homepage.html">
        <input className="login-input" 
        type="text" 
        placeholder="Phone number,username, or email" 
        minlength="10" maxlength="20" required/><br/>
        <input className="login-input"
        type="password" 
        placeholder="Password" 
        minlength="6" maxlength="10" required />
        
        <p class="forget-password">Forget Password?</p>
        <input className="login-input" 
        type="submit" value="Login in" class="login-btn"/>
    </form></div>
        <p>Don't have an account? <span class="signup">Sign up</span></p>
    </section>
</main>
    )
}
function LoginFooter(){
    return(
    <footer>
    <div className='Loginpage-footer'>
    <p>From</p>
    <p class="meta-logo"><i class=" fa-brands fa-meta"></i>Meta</p>
    </div>
</footer>
    )
}
export default function LoginPage() {
  return (
    <div className='container loginpage-body'>
            <LoginHeader/>
            <LoginMain/> 
            <LoginFooter/>   
    </div>
  )
}
