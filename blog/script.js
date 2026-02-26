const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const main = document.querySelector("main");

books.forEach((book) => {
  const div = document.createElement('div');
  div.classList.add('book')
  const article = document.createElement('section');
  article.id = `book-${book.id}`
  article.innerHTML = `
    <p class="desc"><i>${book.date}</i></p>
    <p class="desc">${book.ages}</p>
    <p class="desc">${book.genre}</p>
    <span class="desc">${book.stars}</span>
  `;
  const article2 = document.createElement('section');
  article2.classList.add('border');
  article2.id = `book-${book.id}`
  article2.innerHTML = `
    <h1 class="right">${book.title}</h1>
    <img class="right" src="${book.imgSrc}" alt="${book.imgAlt}">
    <p class="right">${book.description}</p>
  `;
  div.appendChild(article);
  div.appendChild(article2);
  main.appendChild(div);
});

function addStars(span) {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
  }

const spans = document.querySelectorAll("section span");
spans.forEach(addStars); 