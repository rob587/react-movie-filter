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

  useEffect(() => {
    if(genre === ""){
      setFilteredFilms(filmList)
    }
    else{
      setFilteredFilms(filmList.filter(film=>film.genre === genre))
    }
  }, [genre])



  return (

    <>

    <select onChange={(e) => setGenre(e.target.value)} >
      <option value="">Seleziona Genere</option>
      <option value="Fantascienza">Fantascienza</option>
      <option value="Thriller">Thriller</option>
      <option value="Romantico">Romantico</option>
      <option value="Azione">Azione</option>

    </select>

    <div className="container">
      <div className="row">
        {filterFilms.map((film, index)=>{

          return (
            <div className="col-12" key={index}>
              
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
