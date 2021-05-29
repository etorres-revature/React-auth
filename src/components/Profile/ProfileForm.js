import { useRef, useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCTX = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const newPassword = newPasswordInputRef.current.value;

    //ref validation added here ...

    fetch("urlGoesHere...", {
      method: "POST",
      body: JSON.stringify({
        idToken: authCTX.token,
        password: newPassword,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": "bearer token-here..."
      },
    })
      .then((res) => {
        //no error handling
        res.json();
      })
      .then((data) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
