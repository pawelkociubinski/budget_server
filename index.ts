import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import expressPlayground from "graphql-playground-middleware-express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./schema";

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

app.get(
  "/playground",
  expressPlayground({
    endpoint: "/graphql"
  })
);

app.listen(3000, () => {
  console.log("Go to http://localhost:3000/playground to run queries!");
});
