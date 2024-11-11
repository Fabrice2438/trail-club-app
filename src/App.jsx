import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, TrendingUp, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/Card';
import GitHubAuth from './components/GitHubAuth';
import GitHubCallback from './components/GitHubCallback';

const App = () => {
  const [user, setUser] = useState(null);
  const [races] = useState([/* ... vos courses existantes ... */]);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté au chargement
    const savedUser = localStorage.getItem('github_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Si nous sommes sur la page de callback
  if (window.location.pathname === '/callback') {
    return <GitHubCallback />;
  }

  const handleLogout = () => {
    localStorage.removeItem('github_user');
    setUser(null);
  };

  const handleRegister = (raceId) => {
    if (!user) {
      alert('Veuillez vous connecter pour vous inscrire à une course');
      return;
    }
    
    setRaces(prevRaces => 
      prevRaces.map(race => {
        if (race.id === raceId) {
          const isRegistered = race.participants.includes(user.id);
          return {
            ...race,
            participants: isRegistered
              ? race.participants.filter(p => p !== user.id)
              : [...race.participants, user.id]
          };
        }
        return race;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* ... le reste de votre code ... */}
    </div>
  );
};

export default App;