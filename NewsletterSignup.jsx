//NewsletterSignup.jsx
import React, { useState } from 'react';
import './NewsletterSignup.css';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/http://localhost:8080/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <div className="newsletter-signup">
      <h2>Sign Up for Our Daily Insider</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
