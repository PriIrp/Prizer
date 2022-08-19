import React, { useRef, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Signup.css';
import { writeInitialUserData } from '../../Context/Database'

function Signup() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth()
  

 
  async function handleSubmit(e) {
    e.preventDefault();

    try{
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
      writeInitialUserData(false);

      alert('Account created successfully');
    } catch {
      alert('Error signing up')
    }

    setLoading(false);
  }


  return (
    
    <div className="SignupPage">

      <div className='header'> Welcome to Prizer</div>

      <div className='card'> 

        <h3 className='card_header'> Create an Account </h3>
        <h4 className= 'card_header' id= 'lowerBody'>to continue to Prizer</h4>
        
        <form onSubmit={handleSubmit}>
          <input className='textField' ref={emailRef} type='text' placeholder='Email' />
          <input className='textField' ref={passwordRef} type='password' placeholder='Password' />
          <button disabled={loading} className='signup_button' type='submit'> Create Account </button>
        </form>

      </div>
    </div>
  );
}

export default Signup;
