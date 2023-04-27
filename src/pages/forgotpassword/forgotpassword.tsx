import React from "react";
import { useState, FormEvent } from "react";
import Link from "next/link";

interface Props {
  onFormSwitch: (formName: string) => void;
}

export const Forgot = ({ onFormSwitch }: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmet}>
        <h2>Forgot Password</h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>

      <button className="link-btn" >
        <Link className="linkto" href="../login/Login">
          Already have an account? Login here.
        </Link>
      </button>
    </div>
  );
};

export default Forgot;
