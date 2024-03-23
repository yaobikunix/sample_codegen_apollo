import { 
    HttpLink,
    ApolloClient,
    InMemoryCache, 
    DefaultOptions 
} from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
    mutate: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
};

// ApolloClientのインスタンスを作成
const Client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: "https://swapi-graphql.netlify.app/.netlify/functions/index"}),
    defaultOptions
});

export default Client