import React, { useState } from "react";

export default function LogInForm() {
  const [userName, setUserName] = useState("");
  const [password, serUserPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    const userData = {
      userName,
      password
    };

    setUser(userData);
    setUserName("");
    serUserPassword("");
  };

  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: "grid",
          alignItems: "center",
          justifyItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => serUserPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
