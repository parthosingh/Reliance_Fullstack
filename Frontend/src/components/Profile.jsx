
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css"
const Profile = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate(); // Initialize navigation
  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if(!token){
      return
    }
    fetch("https://reliance-fullstack-project1.onrender.com/users", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data.user); 
      })
      .catch((error) => console.log(error));
  }, []);

   function handleLogOut(){
     localStorage.removeItem("accessToken")
     navigate("/login")
   }
   return (
    <>
      <div className={styles.parent}>
        <div className={styles.heading}>My Profile</div>
        <div className={styles.profile}>
          {notes.length > 0 ? (
            notes.map((ele) => (
              <div key={ele._id}>
                <h3>Full Name: {ele.name}</h3>
                <h3>Email Address: {ele.email}</h3>
                <h3>Mobile Number: {ele.mobileNumber}</h3>
                <button className={styles.button} onClick={handleLogOut}>
                  LOGOUT
                </button>
              </div>
            ))
          ) : (
            <h2>Please log in first to view your profile</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;

