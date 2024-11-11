import React from 'react';
import Button from './ui/Button';

const GitHubAuth = ({ onLogin, onLogout, user }) => {
  const handleLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;
    const scope = 'read:user';

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  return user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm">Bienvenue, {user.name}</span>
      <Button variant="outline" onClick={onLogout}>
        Déconnexion
      </Button>
    </div>
  ) : (
    <Button onClick={handleLogin}>
      Connexion avec GitHub
    </Button>
  );
};

export default GitHubAuth;