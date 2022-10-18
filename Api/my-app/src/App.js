import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [user,setUser]=useState()
  function fetchUsername(){
    
    fetch('https://api.github.com/users')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data);
      setUser(data)
    })
  }
  
  useEffect(()=>{
fetchUsername()
  },[])
  
  return (
    <div className="App">
    {/* https://api.github.com/users */}
    {user?.map(user=>(
      <li key={user.id}><a href={user.html_url}>{user.login}</a></li>
    ))}

    </div>
  );
}

export default App;
