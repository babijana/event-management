import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "customer"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        onChange={(e)=>setForm({...form, username:e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setForm({...form, password:e.target.value})}
      />

      <select
        onChange={(e)=>setForm({...form, role:e.target.value})}
      >
        <option value="customer">Customer</option>
        <option value="hallowner">Hall Owner</option>
        <option value="handler">Event Handler</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}