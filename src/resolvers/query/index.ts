import GMR from 'graphql-merge-resolvers';
import resolverLoginQuery from './login';
import resolverUserQuery from './user';

const queryResolvers = GMR.merge([
    resolverUserQuery,
    resolverLoginQuery
]);

export default queryResolvers;