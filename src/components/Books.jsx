import bookList from "../data/bookList.json";

const Books = () => {
    return (
        <div className="bg-gray-800 p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                {bookList.map(book => (
                    <li key={book.id} className="bg-slate-300 rounded-lg p-6 shadow-md">
                        <div>
                            <h3 className="text-lg">Tytuł książki:</h3> 
                            <p className="text-gray-800 text-xl font-semibold">{book.title}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg">Imię autora:</h3>
                            <p className="text-gray-800 font-semibold">{book.author.name}, {book.author.surname}</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg">Rok wydania:</h3>
                            <p className="text-gray-800 font-semibold">{book.year}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
