import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login } from '../services/api';

const Login = () => {
  const { loginUser  } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    localStorage.setItem('token', response.data.token); // Store token
    loginUser (response.data.user); // Set user in context
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;