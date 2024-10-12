import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './checkin.component.css';

function CheckInOut() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const apiBaseUrl = 'http://localhost:3001/api/v1'; // Your API base URL
  const clientId = '1288582639007043665'; // Your Discord client ID
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      // Token exists, perform check-in/out
      axios
        .post(`${apiBaseUrl}/timesheets/sticker`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Check-in/out response:', response.data);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error('Error checking in/out:', error);
          setIsAuthenticated(false);
        });
    } else {
      // Token does not exist, redirect to Discord OAuth
      const redirectUri = encodeURIComponent(`${apiBaseUrl}/timesheets/callback`);
      const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
      window.location.href = discordAuthUrl;
    }
  }, [apiBaseUrl, clientId]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Volunteer Check-In/Out</h1>
        {isAuthenticated ? (
          <p>You are successfully checked in/out!</p>
        ) : (
          <p>Redirecting for authentication...</p>
        )}
      </header>
    </div>
  );
}

export default CheckInOut;
