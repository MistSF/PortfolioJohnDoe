import React, { useState, useEffect } from 'react'
import "../CSS/Modale.css"

export default function Modale({ isOpen, closeModal }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch('https://api.github.com/users/github-john-doe');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className='modal-title'>
                            <h2>Mon profil GitHub <img /></h2>
                        </div>
                        <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="200" />
                        <a href='https://www.Github.com/example' target='_blank' ><img />{userData.name}</a>
                        <p><img/>{userData.location}</p>
                        <p><img/>{userData.bio}</p>
                        <p><img/>Repositories : {userData.public_repos}</p>
                        <p><img/>Followers : {userData.followers}</p>
                        <p><img/>Following : {userData.following}</p>
                        <div className='modal-button'>
                            <button onClick={closeModal}>Fermer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}