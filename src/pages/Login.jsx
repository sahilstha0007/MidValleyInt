import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/User';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await login(email, password);
      console.log('Logged in as:', user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.msg || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Login
      </button>
    </form>
  );
};

export default Login;
