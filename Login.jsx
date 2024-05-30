// import React from 'react';
// import './login.css';
// import foodImage from './foodImage.jpeg';

// function Login() {
//   return (
//     <div className="login-container">
//       <img src={foodImage} alt="Food Background" className="food-background" />
//       <div className="login-form">
//         <h1>Login into your Account</h1>
//         <form>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" required />
//           <label htmlFor="password">Password:</label><br></br>
//           <input type="password" id="password" name="password" placeholder="Enter your password" required />
//           <div className="checkbox-container">
//             <input type="checkbox" id="remember-me" name="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <a href="#">Forgot Password?</a>
//           <button type="submit">Login</button>
//           <button type="submit">Create Account</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';
// import foodImage from './foodImage.jpeg';

// function Login() {
//   const navigate = useNavigate();

//   const handleCreateAccount = (e) => {
//     e.preventDefault();
//     navigate('/create-account');
//   };

//   return (
//     <div className="login-container">
//       <img src={foodImage} alt="Food Background" className="food-background" />
//       <div className="login-form">
//         <h1>Login into your Account</h1>
//         <form>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" required />
//           <label htmlFor="password">Password:</label><br />
//           <input type="password" id="password" name="password" placeholder="Enter your password" required />
//           <div className="checkbox-container">
//             <input type="checkbox" id="remember-me" name="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <a href="#">Forgot Password?</a>
//           <button type="submit">Login</button>
//           <button type="button" onClick={handleCreateAccount}>Create Account</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import foodImage from './foodImage.jpeg';

function Login() {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate('/create-account');
  };

  return (
    <div className="login-container">
      <img src={foodImage} alt="Food Background" className="food-background" />
      <div className="login-form">
        <h1 className='login-text'>Login into your Account</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="password">Password:</label><br />
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Forgot Password?</a>
          <button type="submit">Login</button>
          <button type="button" onClick={handleCreateAccount}>Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
