import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
  email: ""
};

export default function LogInForm() {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState(null);

  const updateForm = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialState);
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
          name="username"
          onChange={updateForm}
          placeholder="Username"
          value={form.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateForm}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={updateForm}
          value={form.password}
        />
        <button type="submit">Submit</button>
      </form>
      {user && JSON.stringify(user, null, 2)}
    </div>
  );
}
