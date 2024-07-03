import React, {useState} from 'react';

import './App.css';
import Header from './components/Header';
import Button from './common/Button';
import Books from './components/Books';
import AddBook from './components/AddBook';


function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks(prevBooks => [...prevBooks, newBook]);
  }

  return (
    <div className="App">
      <Header />
      <AddBook onAdd={handleAddBook}/>
      <Books books={books}/>
      <Button />
    </div>
  );
}

export default App;
