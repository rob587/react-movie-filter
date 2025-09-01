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

  const [filterFilms, setFilteredFilms] = useState(filmList)

  
  
  useEffect(()=>{
    console.log("Filtraggio eseguito")
  }, [genre])

  return (

    <>

    <select onChange={(e) => setGenre(e.target.value)} >
      <option value="">Seleziona Genere</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
    </select>

    <div className="container">
      <div className="row">
        {filmList.map((film)=>{

          return (
            <div className="col-12" key={film.genre}>
              
              <h3>{film.title}</h3>
              <p>{film.genre}</p>

            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default App
