const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const admin = require("firebase-admin");

// Konfiguracija Firebase admin sa vašim generiranim privatnim ključem
const serviceAccount = require("../sneakerwave-db-firebase-adminsdk-3l352-715531cd32.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Definiranje sheme GraphQL
const typeDefs = gql`
  type Product {
    id: ID
    brand: String
    category: String
    description: String
    imageUrl: String
    name: String
    price: Float
    sizes: [String]
    quantity: Float
  }

  type Query {
    products: [Product]
  }
`;

// Resolveri za shemu
const resolvers = {
  Query: {
    products: async () => {
      const firestore = admin.firestore();
      const productsSnapshot = await firestore.collection("products").get();
      const products = productsSnapshot.docs.map((doc) => doc.data());
      return products;
    },
  },
};

// Kreiranje Express aplikacije
const app = express();

// Kreiranje Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Pričekajte da server krene prije korištenja applyMiddleware()
server.start().then(() => {
  // Povezivanje Apollo Servera s Express aplikacijom
  server.applyMiddleware({ app });

  // Pokretanje Express servera
  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
});
