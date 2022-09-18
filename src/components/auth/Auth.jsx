import "./auth.css";

const Auth = ({ username, password, email, buttonText, isRegister }) => {
  return (
    <div className="auth">
      <div className="authWrapper">
        <div className="authMain">
          <div className="authInput">
            <label>{username}</label>
            <input type="text" placeholder={username}></input>
            <label>{password}</label>
            <input type="password" placeholder={password}></input>
            {isRegister && (
              <>                
                <label>{email}</label>
                <input type="text" placeholder={email}></input>
              </>
            )}
          </div>
          <div className="authButton">
            <button>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
