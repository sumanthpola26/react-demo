import React, { useState } from 'react';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login / Signup</h1>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => {/* Login Logic Here */}}>
        Login
      </button>

      <button onClick={() => {/* Signup Logic Here */}}>
        Signup
      </button>
    </div>
  );
};

export default AuthScreen;
