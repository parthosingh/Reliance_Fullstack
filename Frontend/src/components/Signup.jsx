import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
 
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate(); // Added navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      mobileNumber,
      pass,
    };

    setName("");
    setEmail("");
    setMobileNumber("");
    setPass("");

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fixed case
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        if (data.msg === "You have been successfully registered!") {
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
     <div className={styles.parentForm}>
      <h2 className={styles.heading}>Register new account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Enter your Name*</label>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/> <br/> 
        <label className={styles.label}>Enter your Email ID*</label>
        <input
          type="email" // Improved type
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/><br/>
        <label className={styles.label}>Enter your Mobile Number*</label>
        <input
          type="tel" // Improved type
          className={styles.input}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <br/> <br/>
        <label className={styles.label}>Enter your Password*</label>
        <input
          type="password" // Improved type
          className={styles.input}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <br/> <br/>
        <button type="submit" className={styles.button}>Register</button>
      </form>
      </div>
    </>
  );
}

export default Signup;