// Sample book data
const books = [



    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", image: "0.jpg",Price:"15" },
    { title: "1984", author: "George Orwell", genre: "Fiction", image: "9.jpg", Price:"14"},
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Non-Fiction", image: "7.jpg" },
    { title: "Becoming", author: "Michelle Obama", genre: "Non-Fiction", image: "5.jpg",price: "20" },
    { title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery", image: "4.jpg",Price:"13" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", image: "2.jpg" },
    { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", image: "1.jpg",Price:"10" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Biography", image: "k.jpg",Price:"11" },
    { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", image: "a.jpg",Price:"12" },
    { title: "Guns, Germs, and Steel", author: "Jared Diamond", genre: "History", image: "s.jpg",Price:"19" },
    { title: "Atoms habits", author: "james  D", genre: "History", image: "u.jpg",Price:"5" },
{title: "Atomic Habits",author: "James Clear", genre: "Self-Help",image: "p.jpg",Price:"14"},
{title:"The Wright Brothers",author: "David McCullough",genre: "History", image: "w.jpg", Price: "$10",}
    
   
   

    
    
    
    
    
    
];



    



// Function to render books
function renderBooks(filteredBooks) {
    const bookGrid = document.getElementById("bookGrid");
    bookGrid.innerHTML = ""; // Clear existing books
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookGrid.appendChild(bookDiv);
    });
}

function filterBooks() {
    const selectedGenre = document.getElementById("genreFilter").value;
    
    const filteredBooks = books.filter(book => {
        return selectedGenre === "" || book.genre === selectedGenre;
    });

    renderBooks(filteredBooks);
}
// Event listener for genre filter
document.getElementById("genreFilter").addEventListener("change", filterBooks);

// Initial render of all books
renderBooks(books);

// Function to filter books based on search and genre
function filterBooks() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const selectedGenre = document.getElementById("genreFilter").value;

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery);
        const matchesGenre = selectedGenre === "" || book.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });

    renderBooks(filteredBooks);
}

// Event listeners for search and filter
document.getElementById("searchBar").addEventListener("input", filterBooks);
document.getElementById("genreFilter").addEventListener("change", filterBooks);

// Initial render of all books
renderBooks(books);