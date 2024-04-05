import { useEffect, useState } from 'react';
import { getUserData } from './api';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
     getUserData()
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div >
      {userData && (
        <div className='info'>
          <img src={userData.avatar_url} alt={userData.login} />
          <p>Name: {userData.name}</p>
          <p>Username: {userData.login}</p>
          <p>Location: {userData.location}</p>
          <p>Email: {userData.email}</p>
        </div>
        
      )}
      {userData&&(
        <div className='repo'>
        <h1>User Repositories </h1>
        <p>Public repos:{userData.public_repos}</p>
        <p>Public gists:{userData.public_gists}</p>
        <p>Followers:{userData.followers}</p>
        <p>Following:{userData.following}</p>
        <p>URL:{userData.html_url}</p>
      </div>
      )}
    </div>
  );
}

export default App;

