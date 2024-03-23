# api-project
## A side project built using Parcel
---
 ### Stack (so far)
  - <img width=15 src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" /> React
  - <img width=15 src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" /> Express
  - <img width=15 src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" /> Node
  -  <img width=15 src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png" /> GraphQL
---
### How to build an run this Project (so far)
- [Setup React app using parcel](https://www.freecodecamp.org/news/how-to-up-a-react-app-with-parcel/)
- [Add graphQL](https://www.toptal.com/graphql/creating-your-first-graphql-api) A few changes need to be made in this step.
  - 1) Install `@graphql-tools/schema`. This will allow you to use `makeExecutableSchema`
  - 2) Add this code block to the index.js file that starts the server:
  ```
  const apollo Server = new ApolloServer({typeDefs, resolvers});

  async function startServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  }
  startServer();```

      - An error saying that you must `await` the `apolloServer.start` function will occur without this code.