import React, {useState} from "react";


const SearchBooks = ({onSearch, onSort}) => {
 const [searchTerm, setSearchTerm] = useState('');
 const [sortCriteria, setSortCriteria] = useState('');

 const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
 };

 const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    onSort(event.target.value);
 }

    return (
        <div className="mb-4">
            <input type="text" 
            placeholder="Szukaj książki"
            value={searchTerm}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded"/>
        <select value={sortCriteria} onChange={handleSortChange}
        className="p-2 border border-gray-400 rounded">
            <option value="">Sortuj według:</option>
            <option value="author">autora</option>
            <option value="title">tytułu</option>
            <option value="yearAsc">roku wydania (rosnąco)</option>
            <option value="yearDesc">roku wydania (majejąco)</option>
            <option value="recent">ostatnio dodane</option>
        </select>
        </div>
    )
};

export default SearchBooks;