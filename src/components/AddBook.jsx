import React, { useState } from "react";

const AddBook = ({ books, onAdd }) => {
    const [title, setTitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorSurname, setAuthorSurname] = useState("");
    const [year, setYear] = useState("");
    const [editorial, setEditorial] = useState("");
    const [room, setRoom] = useState("");
    const [cupboard, setCupboard] = useState("");
    const [bookshelf, setBookshelf] = useState("");
    const [isLend, setIsLend] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (title === "") {
            alert("Musisz podać tytuł");
            return;
        }

        const newBook = {
            id: books.length + 1,
            title,
            author: { name: authorName || "", surname: authorSurname || ""},
            year: parseInt(year) || "",
            editorial: editorial || "",
            localization: { room: room || "", cupboard: cupboard || "", bookshelf: bookshelf || "" },
            isLend,
        };

        console.log('Nowa książka do dodania:', newBook);

        try {
            await onAdd(newBook);

                setTitle("");
                setAuthorName("");
                setAuthorSurname("");
                setYear("");
                setRoom("");
                setBookshelf("");
                setCupboard("");
                setEditorial("");
                setIsLend(false);
        } catch (error) {
            console.log("Błąd przy dodawaniu książki", error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Title (required):</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Author Name:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={authorName}
                        onChange={(event) => setAuthorName(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Author Surname:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={authorSurname}
                        onChange={(event) => setAuthorSurname(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Year:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Editorial:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={editorial}
                        onChange={(event) => setEditorial(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Room:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={room}
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Cupboard:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={cupboard}
                        onChange={(event) => setCupboard(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Bookshelf:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="text"
                        value={bookshelf}
                        onChange={(event) => setBookshelf(event.target.value)}
                    />
                </div>
                <div className="gap-4 p-2">
                    <label className="pr-2 text-white">Is Lend:</label>
                    <input
                        className="border-x-cyan-700 rounded border-2 border-double w-80 h-10"
                        type="checkbox"
                        checked={isLend}
                        onChange={(event) => setIsLend(event.target.checked)}
                    />
                </div>
            </div>
            <button 
            className="w-44 h-14 border-cyan-600 bg-cyan-500 rounded text-white"
            type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;
