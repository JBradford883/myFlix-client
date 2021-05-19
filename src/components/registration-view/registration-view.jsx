import React, { useState } from 'react';

export function LoginView(props) {
  const [username, setUserName] = userState('');
  const [password, setPassword] = userState('');
  const [email, setEmail] = userState('');
  const [birthday, setBirthday] = userState('');

  const handleSubmit = () => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    // Send a request to the server for authentication then call props.onLoggedIn(username)
    props.onLoggedIn(usename);
  };

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Birthday:
        <input type="text" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}