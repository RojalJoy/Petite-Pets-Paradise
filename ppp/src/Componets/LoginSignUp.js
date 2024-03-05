import React, { useState } from 'react';
import { auth, firestore } from '../Pages/fire'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const customersRef = collection(firestore, 'customers');
      const q = query(customersRef, where('email', '==', email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError('Invalid email or password');
        setSuccessMessage('');
        return;
      }

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.password === password) {
          auth.signInWithEmailAndPassword(email, password);
          setSuccessMessage('Login successful!');
          setError('');
        } else {
          setError('Invalid email or password');
          setSuccessMessage('');
        }
      });
    } catch (err) {
      setError(err.message);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
