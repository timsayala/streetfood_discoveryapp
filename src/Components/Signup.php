import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to PHP script to insert new user into database
    const data = new FormData();
    data.append('email', email);
    data.append('username', username);
    data.append('password', password);

    fetch('signup.php', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-warning">
        Sign Up
      </button>
    </form>
  );
}

export default Signup;