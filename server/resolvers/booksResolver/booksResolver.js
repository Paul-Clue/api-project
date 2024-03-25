const books = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    id: '2',
    title: 'City of Glass',
    author: 'Paul Auster'
  }
];
// console.log(books);
// const booksResolver  =  () => {
//   const theBooks = {
//     Query: {
//       // books: () => books
//       book(parent, args, contextValue, info) {
//         return books.find((book) => book.id === args.id);
//       },
//     }
//   };
//   return theBooks;
// };


const resolvers = {
  Query: {
    books: () => books,
    book(parent, args, contextValue, info) {
      return books.find((book) => book.id === args.id);
    },
  }
};

export default resolvers;
// export default booksResolver;
