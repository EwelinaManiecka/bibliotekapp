import React, {useEffect, useState} from 'react';

import './App.css';
import Header from './components/Header';
import Button from './common/Button';
import Books from './components/Books';
import AddBook from './components/AddBook';

import bookList from './data/bookList.json'


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(bookList);
  }, []);

  const saveBookToFile = (booksData) => {
    const jsonData = JSON.stringify(booksData, null, 2);

    const blob = new Blob([jsonData], {type: "application/json"});

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = "bookList.json";

    document.body.appendChild(a);
    a.click()

};

  const handleAddBook = async (newBook) => {
    try {
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);

      await saveBookToFile(updatedBooks);
    } catch (error) {
      console.log("Błąd przy zapisie danych", error.message);
    }
  }

  useEffect(() => {
    console.log("Aktualny stan książek", books);
  }, [books])

  console.log(bookList);

  return (
    <div className="App">
      <Header />
      <AddBook books={books} onAdd={handleAddBook}/>
      <Books books={books}/>
      <Button />
    </div>
  );
}

export default App;
