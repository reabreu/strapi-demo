import { withApollo } from "next-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";

const API_URL = process.env.API_URL || "http://backend:1337";

const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
