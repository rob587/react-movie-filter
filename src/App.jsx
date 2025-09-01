import React, { use, useState } from 'react'

import { useEffect } from 'react';

const App = () => {

  
  const filmList = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
  ];
  
  
  
  const [genre, setGenre] = useState("")
  
  
  useEffect(()=>{
    console.log("Filtraggio eseguito")
  }, [genre])

  return (

    <select onChange={(e) => setGenre(e.target.value)} >
      <option value="">Seleziona Genere</option>
      <option value={filmList.title}>Fantascienza</option>
      <option value="">Thriller</option>
      <option value="">Romantico</option>
      <option value="">Azione</option>
      <option value="">Fantascienza</option>
      <option value="">Thriller</option>
    </select>
  
  )
}

export default App
