import React, {useState} from "react";

const AddBook = ({books, onAdd}) => {
const [title, setTitle] = useState("");
const [authorName, setAuthorName] = useState("");
const [authorSurname, setAuthorSurname] = useState("");
const [year, setYear] = useState("");
const [editorial, setEditorial] = useState("");
const [room, setRoom] = useState("");
const [cupboard, setCupboard] = useState("");
const [bookshelf, setBookshelf] = useState("");
const [isLend, setIsLend] = useState(false);


const handleSubmit = (event) => {
    event.preventDefault();
    if (title === ""){
        alert ("Musisz podać tytuł");
        return
    }

const newBook = {
    id: books.length+1,
    title,
    author: {name: authorName, surname: authorSurname},
    year: parseInt(year),
    editorial,
    localization: {room, cupboard, bookshelf},
    isLend,
};

onAdd(newBook);

setTitle("");
setAuthorName("");
setAuthorSurname("");
setYear("");
setRoom("");
setBookshelf("");
setCupboard("");
setEditorial("");
setIsLend(false);
}

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title (required):</label>
                    <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div>
                    <label>Author name:</label>
                    <input type="text" value={authorName} onChange={(event) => setAuthorName(event.target.value)}/>
                </div>
                <div>
                    <label>Author surname:</label>
                    <input type="text" value={authorSurname} onChange={(event) => setAuthorSurname(event.target.value)} />
                </div>
                <div>
                    <label>Year:</label>
                    <input type="text"  value={year} onChange={(event) => setYear(event.target.value)}/>
                </div>
                <div>
                    <label>Editorial:</label>
                    <input type="text"  value={editorial} onChange={(event) => setEditorial(event.target.value)}/>
                </div>
                <div>
                    <label>Room:</label>
                    <input type="text"  value={room} onChange={(event) => setRoom(event.target.value)}/>
                </div>
                <div>
                    <label>Cupboard:</label>
                    <input type="text"  value={cupboard} onChange={(event) => setCupboard(event.target.value)}/>
                </div>
                <div>
                    <label>Bookshelf:</label>
                    <input type="text"  value={bookshelf} onChange={(event) => setBookshelf(event.target.value)} />
                </div>
                <div>
                    <label>Is lend:</label>
                    <input type="checkbox" checked={isLend} onChange={(event) => setIsLend(event.target.value)}/>
                </div>
            <button type="submit">Add Book</button>
        </form>
    )
};
 
export default AddBook;