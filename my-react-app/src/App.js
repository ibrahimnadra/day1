import React from 'react';

function App() {
  // Secret examples for testing
  const apiKey = "XXX";
  const password = "SuperSecret123!";
  const token = "ghp_FAKEGITHUBTOKEN123456";
  const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
  const DB_PASSWORD = "SuperSecurePassword123!";
  const GITHUB_TOKEN = "ghp_1234567890EXAMPLETOKEN";
  const SECRET_KEY = "mySuperSecretKey123!";


  return (
    <div style={{ padding: '20px' }}>
      <h1>Gitleaks Demo</h1>
      <p>API Key: {apiKey}</p>
      <p>Password: {password}</p>
      <p>Token: {token}</p>
      <p>These are just fake secrets for testing Gitleaks.</p>
    </div>
  );
}

export default App;
