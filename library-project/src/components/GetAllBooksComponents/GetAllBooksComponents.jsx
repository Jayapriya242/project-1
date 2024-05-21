import React, { useState, useEffect } from 'react'
import BookComponent from './BookComponent'
import './GetAllBooksComponents.css'
import axios from 'axios'

const GetAllBooksComponents= () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3500/api/v1/books`)
            .then(response => setBooks(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='books'>
        {books.map((book, index)=>(
            <BookComponent book={book} key={index}/>
        ))}
    </div>
  )
}

export default GetAllBooksComponents