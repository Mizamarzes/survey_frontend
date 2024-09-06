import React from 'react'
import '../App.css';

const home = () => {

  const username = localStorage.getItem('username');
  console.log(username);
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">
        Hola, Bienvenido {username ? username : 'Invitado'} a Encuestas.com
      </h1>
    </div>
  )
}

export default home