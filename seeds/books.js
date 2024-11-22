const db = require("../server");
const Book = require("../models/book");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Book.deleteMany();
  const books = [
    {
      bookName: "Henry Henry",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697045316i/182108722.jpg",
      authorName: "Allen Bratton",
      publisherName: "The Unnamed PRess",
      isbnString: "9781961884021",
      genre: "Literary Fiction",
    },
    {
      bookName: "Pineapple Street",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658882478i/61241737.jpg",
      authorName: "Jenny Jackson",
      publisherName: "Pamela Dorman Books",
      isbnString: "9780593490693",
      genre: "Contemporary",
    },
    {
      bookName: "Tomorrow, and Tomorrow, and Tomorrow",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644373083i/58784475.jpg",
      authorName: "Gabrielle Zevin",
      publisherName: "Knopf",
      isbnString: "9780593321201",
      genre: "Fiction",
    },
    {
      bookName: "Demon Copperhead",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659435553i/60194162.jpg",
      authorName: "Barbara Kingsolver",
      publisherName: "Harper",
      isbnString: "9780063251922",
      genre: "Historical Fiction",
    },
    {
      bookName: "The Covenant of Water",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680603274i/60684697.jpg",
      authorName: "Abraham Verghese",
      publisherName: "Grove Press",
      isbnString: "9780802162175",
      genre: "Literary Fiction",
    },
    {
      bookName: "Lessons in Chemistry",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644776171i/58065033.jpg",
      authorName: "Bonnie Garmus",
      publisherName: "Doubleday Books",
      isbnString: "9780385547345",
      genre: "Historical Fiction",
    },
    {
      bookName: "Remarkably Bright Creatures",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642169361i/58733687.jpg",
      authorName: "Shelby Van Pelt",
      publisherName: "Ecco",
      isbnString: "9780063204157",
      genre: "Contemporary",
    },
    {
      bookName: "Happy Place",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663080466i/61755200.jpg",
      authorName: "Emily Henry",
      publisherName: "Berkley",
      isbnString: "9780593441275",
      genre: "Romance",
    },
    {
      bookName: "The Paris Library",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579890518i/52761909.jpg",
      authorName: "Janet Skeslien Charles",
      publisherName: "Atria Books",
      isbnString: "9781982134198",
      genre: "Historical Fiction",
    },
    {
      bookName: "The Housemaid",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636557432i/57890363.jpg",
      authorName: "Freida McFadden",
      publisherName: "Bookouture",
      isbnString: "9781835049344",
      genre: "Thriller",
    },
    {
      bookName: "A Court of Thorns and Roses",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1580862951i/16096824.jpg",
      authorName: "Sarah J. Maas",
      publisherName: "Bloomsbury USA Childrens",
      isbnString: "9781619634442",
      genre: "Fantasy",
    },
    {
      bookName: "Fourth Wing",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679476248i/64280454.jpg",
      authorName: "Rebecca Yarros",
      publisherName: "Entangled Publishing",
      isbnString: "9781649374042",
      genre: "Fantasy Romance",
    },
    {
      bookName: "Before We Were Strangers",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433483607i/23309453.jpg",
      authorName: "Renée Carlino",
      publisherName: "Atria Books",
      isbnString: "9781501105777",
      genre: "Romance",
    },
    {
      bookName: "Verity",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609533084i/59344312.jpg",
      authorName: "Colleen Hoover",
      publisherName: "Montlake",
      isbnString: "9781791392796",
      genre: "Romance",
    },
    {
      bookName: "It Ends with Us",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1572669827i/27362503.jpg",
      authorName: "Colleen Hoover",
      publisherName: "Atria Books",
      isbnString: "9781501110368",
      genre: "Romance",
    },
    {
      bookName: "Atomic Habits",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660602778i/40121378.jpg",
      authorName: "James Clear",
      publisherName: "Avery",
      isbnString: "9780735211292",
      genre: "Self-Help",
    },
    {
      bookName: "The Midnight Library",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599334251i/52578297.jpg",
      authorName: "Matt Haig",
      publisherName: "Viking",
      isbnString: "9780525559474",
      genre: "Fantasy",
    },
    {
      bookName: "The Love Hypothesis",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624889171i/56732449.jpg",
      authorName: "Ali Hazelwood",
      publisherName: "Berkley",
      isbnString: "9780593336822",
      genre: "Romance",
    },
    {
      bookName: "Book Lovers",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643662244i/58690308.jpg",
      authorName: "Emily Henry",
      publisherName: "Berkley",
      isbnString: "9780593334835",
      genre: "Romance",
    },
    {
      bookName: "Beach Read",
      bookImg:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589881198i/52867387.jpg",
      authorName: "Emily Henry",
      publisherName: "Berkley",
      isbnString: "9781984806734",
      genre: "Romance",
    },
  ];

  await Book.insertMany(books);
  console.log("Created Books");
};

const run = async () => {
  await main();
  db.close();
};

run();
