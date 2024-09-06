import React from 'react'
import '../App.css';

const home = () => {

  const username = localStorage.getItem('username');
  console.log(username);
  

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/path/to/your/background.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6 rounded-lg shadow-lg bg-gray-800 bg-opacity-70">
        <h1 className="text-4xl font-bold mb-4">
          Hola, Bienvenido {username ? username : 'Invitado'}
        </h1>
        <p className="text-lg mb-6">
          ¡Gracias por visitar Encuestas.com! Aquí puedes explorar y participar en diversas encuestas para compartir tu opinión y ayudar a mejorar nuestros servicios.
        </p>
        <a href="/dashboard/view-survey" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Explorar Encuestas
        </a>
      </div>
    </div>
  )
}

export default home