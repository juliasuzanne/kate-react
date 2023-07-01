import axios from "axios";
import { useState } from "react";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users", params).then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
    });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
