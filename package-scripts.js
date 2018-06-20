module.exports = {
  "scripts": {
    "build": "babel src --out-dir dist --source-maps",
    "start": "nodemon index.ts",
    "generate": "gql-gen --url http://localhost:3000/graphql --template ts --out types.d.ts"
  }
}
