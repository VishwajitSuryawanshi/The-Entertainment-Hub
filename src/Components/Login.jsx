const Login = () =>{
  return(
    <>
    <img className="login-page" src="./Images/TheEntertainmentHub.png" />
    <h2 className="login-header">Login to your account</h2>
    <div className="login-box">
      <div className="login-container">
        <div className="email-container">
          Email address
            <div class="login-email">
              <input data-testid="input-email" name="email" type="email" autocomplete="email" className="login-email" value=""/>
            </div>
        </div>
        <div className="password-container">
          Password
            <div class="login-password">
              <input data-testid="input-pass" name="password" type="password" autocomplete="password" class="login-password" value="" />
            </div>
        </div>
        <div className="login-button" >
          <button>Login</button>
        </div>
        <hr />
        <p className="not-account">Don't have an account?  <a className="sign-up">Sign up now</a></p>
      </div>
    </div>
    </>
  );
};
export default Login;