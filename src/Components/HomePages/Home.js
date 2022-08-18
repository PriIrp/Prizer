import React, { useRef, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Home.css';

function Home() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const { signup, currentUser} = useAuth()


  async function handleSubmit(e) {
    e.preventDefault();

    try{
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      alert('Account created successfully');
    } catch {
      alert('Error signing up')
    }

    setLoading(false);
  }


  return (
    
    <div className="Home">

      <div className='home_header'> Welcome to Zello </div>

      <div className='loginBox'> 

        <h3 className='loginBox_header'> Sign Up </h3>
        <h4 className= 'loginBox_header' id= 'lowerBody'>to continue to Zello</h4>
        
        <form onSubmit={handleSubmit}>
          <input className='login_input' ref={emailRef} type='text' placeholder='Email' />
          <input className='login_input' ref={passwordRef} type='password' placeholder='Password' />
          <button disabled={loading} className='login_button' type='submit'> Login </button>
        </form>

      </div>
    </div>
  );
}

export default Home;
