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
  
  
  
  const [genres, setGenres] = useState("")

  const [newGenres, setNewGenres] = useState ("")

  const [filterFilms, setFilteredFilms] = useState(filmList)

  useEffect(() => {
    if(genres === ""){
      setFilteredFilms(filmList)
    }
    else{
      setFilteredFilms(filmList.filter(film=>film.genre === genres))
    }
  }, [genres])

    const handleForm = (e) => {
    e.preventDefault()
    const genre = newGenres.trim()
   const copyGenres = [...genres, genre]

   setGenres(copyGenres)
  }



  return (

    <>

    <select className='m-4 text-center' onChange={(e) => setGenres(e.target.value)} >
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

            <div className="col-4" key={index}>
              
              <h3>{film.title}</h3>
              <p>{film.genre}</p>

            </div>
          )
        })}
      </div>

    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="mt-5 d-flex justify-content-end" onSubmit={handleForm}>
            <input className="p-3 fs-4" type="text"
            value={newGenres}
            onChange={(event)=>{
              setNewGenres(event.target.value)
            }}
            />
            <button className="ms-3 btn btn-success fs-4">Inserisci nuovo genere</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
