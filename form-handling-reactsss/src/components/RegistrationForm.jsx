import { useState } from "react";
const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const error =  {}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      error.username = 'Username is required';
        return;
    }
    if (!password) {
      error.password = 'Password is required';
        return;
    }
    if (!email) {
      error.email = 'Email is required';
        return;
    }
   setErrors(error)
   resetForm()
   
   console.log('Username:',username);
   console.log('Password:',password);
   console.log('Email:',email);
 };
  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <h1>Registration Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder="Enter ur Username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
        
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter ur Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />
       
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter ur Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button
        type="submit">
          Register
      </button>  
    </form>
    </>
  )
  
}

export default RegistrationForm;