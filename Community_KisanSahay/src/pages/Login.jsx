import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div>
       {/* <nav>
        <a href="index.html">Home</a>
        <a href="expenses.html">Expenses Tracker</a>
        <a href="#">Community</a>
        <a href="news.html">News</a>
      </nav> */}
      <h1>Press BACK to return</h1>
      <div className='formContainer'>
        <div className='formWrapper'>
        <span className='title'>Kisan Sahay</span>
        <span className='title1'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter Email'></input>
                <input type='password' placeholder='Enter Password'></input>
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login