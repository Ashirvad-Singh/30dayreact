import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth"; // Add signOut import here

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const loggedInUser = userCredentials.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth)
    .then(()=>{
        setUser(null);
        console.log("User logged out")

    }).catch((error)=>{
        console.log(error);
    })
    
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return()=> unsubscribe();
  }, []);
  return (
    <div>
      <form onSubmit={login}>
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <p>Please login to continue</p>
      )}
    </div>
  );
}

export default Login;
