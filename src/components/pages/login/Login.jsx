import React from 'react'

const Login = () => {
  return (
    <div className='main'>
     <h1>Login</h1>
     <p>Sign To Your Account</p>
     <input type="text" placeholder='UserName' />
     <label>Password</label>
     <input type="password"  placeholder='Password'/>
    </div>
  )
}

export default Login