  import { useState } from "react";
  import styles from "./Login.module.css";
  import { useNavigate } from "react-router-dom";

  function Login() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();  //Initialize navigation

    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        mobileNumber,
        pass,
      };

    fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
        .then((res) => {
         return  res.json()})
        .then((data) => {
          console.log(data);
          alert(data.msg);
          if (data.token) {
            localStorage.setItem("accessToken", data.token);
            setMobileNumber("");
            setPass("");
            navigate("/"); // Redirect to home page if token exists
          } else {
            navigate("/signup");
          }
        })
        .catch((error) => console.log(error));
    };

    return (
      <>
        <div className={styles.parentForm}>
          <h2 className={styles.heading}>Login or Register</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Enter your Mobile Number*</label>
            <input
              type="tel"
              className={styles.input}
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <br />
            <br />
            <label className={styles.label}>Enter your Password*</label>
            <input
              type="password"
              className={styles.input}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <br />
            <br />
            <button type="submit" className={styles.button}>Proceed</button>
          </form>
        </div>
      </>
    );
  }

  export default Login;

