import GMR from 'graphql-merge-resolvers';
import resolverUserQuery from './user';

const queryResolvers = GMR.merge([
    resolverUserQuery,
]);

export default queryResolvers;