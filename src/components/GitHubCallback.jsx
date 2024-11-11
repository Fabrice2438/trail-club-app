import React, { useEffect } from 'react';

const GitHubCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Stocker temporairement le code
      localStorage.setItem('github_code', code);
      
      // Pour l'instant, simulons une connexion réussie
      const fakeUser = {
        id: '123',
        name: 'Utilisateur Test',
        login: 'user123'
      };
      localStorage.setItem('github_user', JSON.stringify(fakeUser));
      
      // Rediriger vers la page principale
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg">Connexion en cours...</p>
      </div>
    </div>
  );
};

export default GitHubCallback;