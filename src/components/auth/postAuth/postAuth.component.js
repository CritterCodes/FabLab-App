import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostAuth() {
  const navigate = useNavigate();
  const apiBaseUrl = 'http://localhost:3001/api/v1'; // Your API base URL

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Exchange code for token
      axios
        .get(`${apiBaseUrl}/timesheets/callback?code=${code}`)
        .then((response) => {
          const token = response.data.token;
          if (token) {
            localStorage.setItem('jwt_token', token); // Store token in localStorage
            console.log('Token stored:', token);
            navigate('/checkin'); // Redirect back to check-in page
          } else {
            console.error('No token received');
          }
        })
        .catch((error) => {
          console.error('Error during token collection:', error);
        });
    } else {
      console.error('No code found in URL');
    }
  }, [navigate, apiBaseUrl]);

  return (
    <div>
      <h1>Processing authentication...</h1>
      <p>Please wait while we complete your registration.</p>
    </div>
  );
}

export default PostAuth;
