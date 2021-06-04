import React, { useEffect, useState } from 'react'; 
import './App.css';
import Login from './Login'; 
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'; 
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi(); 

function App() {
  //pulling user from data layer, destructuring user from data layer
  const [{ user, token }, dispatch] = useDataLayerValue(); 

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); 
    //cleans up url; gets rid/stripping of access token; 
    window.location.hash = ""; 
    //underscore avoid name clash
    const _token = hash.access_token;

    if (_token) {
      dispatch({ 
        type: 'SET_TOKEN', 
        token: _token,
      })

      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcQcxA9BgxBVY?gtm=1').then(response => 
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
    }
  }, []); 

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }  
    </div>
  );
}

export default App;
