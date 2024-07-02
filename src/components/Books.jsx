import React, { useMemo, useState} from "react";

import SearchBooks from "./SearchBooks";
import bookList from "../data/bookList.json";

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
        setCurrentPage(1);
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
        setCurrentPage(1);
    };

    const filteredBooks = useMemo(() => {
        return bookList.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        `${book.author.name} ${book.author.surname}`.toLowerCase().includes(searchTerm) ||
        book.editorial.toLowerCase().includes(searchTerm) ||
        book.year.includes(searchTerm))
    }, [searchTerm])

    const sortedBooks = useMemo(() => {
        const sortedBooks = [...filteredBooks];

        switch (sortCriteria){
        case "author":
            return sortedBooks.sort((a, b) => a.author.surname.localeCompare(b.author.surname));
        case "title":
            return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
        case "yearAsc":
            return sortedBooks.sort((a, b) => a.year.localeCompare(b.year));
        case "yearDesc":
            return sortedBooks.sort((a, b) => b.year.localeCompare(a.year));
        case "recent":
            return sortedBooks.sort((a, b) => b.id - a.id);
        default:
            return sortedBooks;
        }
    }, [sortCriteria, filteredBooks])

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className="bg-gray-800 p-8">
            <SearchBooks onSearch={handleSearch} onSort={handleSort}/>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                {currentBooks.map(book => (
                    <li key={book.id} className="bg-slate-300 rounded-lg p-6 shadow-md">
                        <div>
                            <h3 className="text-lg">Tytuł książki:</h3> 
                            <p className="text-gray-800 text-xl font-bold">{book.title}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg">Imię autora:</h3>
                            <p className="text-gray-800 font-bold">{book.author.name}, {book.author.surname}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg">Rok wydania:</h3>
                            <p className="text-gray-800 font-semibold">{book.year}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg">Miejsce w księgozbiorze:</h3>
                            <ul className="inline-flex">
                                <li className="p-2"><p>pokój: <span className="font-semibold">{book.localization.room}</span></p></li>
                                <li className="p-2"><p>szafka: <span className="font-semibold">{book.localization.cupboard}</span> </p></li>
                                <li className="p-2"><p>półka: <span className="font-semibold">{book.localization.bookshelf}</span></p></li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <ul className="pagination">
                    {Array.from({ length: Math.ceil(sortedBooks.length / booksPerPage) }, (_, i) => (
                        <li key={i} className="inline-block mx-1">
                            <button 
                                onClick={() => paginate(i + 1)} 
                                className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-gray-500 text-white' : 'bg-white text-gray-800'}`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Books;
