import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
  
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {

            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });


            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
  <div>
     {/* <nav>
        <a href="index.html">Home</a>
        <a href="expenses.html">Expenses Tracker</a>
        <a href="#">Community</a>
        <a href="news.html">News</a>
      </nav> */}
      <h1>Press BACK to return</h1>
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='title'>Kisan Sahay</span>
        <span className='title1'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder=' Enter Display Name'></input>
                <input type='email' placeholder='Enter Email'></input>
                <input type='password' placeholder='Enter Password'></input>
                <input style={{display:"none"}} type='file' id='file'></input>
                <label htmlFor='file'>
                    <img src={Add} alt=""/>
                    <span>Add your Avatar</span>
                </label>
                <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
        </div>

    </div>
  </div>
  )
}

export default Register
