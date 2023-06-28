import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    console.log(formData.email, formData.password);
    // Perform your sign-up logic here

    // After successful sign-up, navigate to the ATM Machine page
    navigate();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </form>
      <button onClick={handleSignUp}>Sign Up</button>

      <p>
        Already have an account? <Link to="/atm-machine">Log In</Link>
      </p>
    </div>
  );
}

export default SignUpPage;
