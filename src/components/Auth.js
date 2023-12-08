import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store";

const Auth = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const submit = (event) => {

    
    event.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (emailValue !== "" && passwordValue !== "") {
      setFormSubmit(true);
    }

    if (formSubmit) {
      dispatch(authActions.login())
    }

    
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={password} />
          </div>
          <button type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
