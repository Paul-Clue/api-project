import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_LOCATIONS = gql`
  query GetBooks {
    books {
      id
      title
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.books);
  return (
    <div>
      <h2>Home Page</h2>
      <div>
        {data.books.map(book => {
          return (
            <>
              <p key={book.id}>
                {book.id} {book.title}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
