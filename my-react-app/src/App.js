import React from 'react';

function App() {
  // Secret examples for testing
  const apiKey = "12345-FAKE-SECRET-KEY";
  const password = "SuperSecret123!";
  const token = "ghp_FAKEGITHUBTOKEN123456";
  AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
  AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

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
