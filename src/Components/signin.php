mport React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to PHP script to check if user exists in database
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);

    fetch('signin.php', {
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/signin">
        <button type="submit" className="btn btn-outline-warning">
          Sign In
        </button>
      </Link>
    </form>
  );
}

export default Signin;