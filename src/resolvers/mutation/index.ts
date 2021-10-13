import GMR from 'graphql-merge-resolvers';
import resolversUserMutation from './createuser';
import resolverLoginMutation from './login';

const mutationResolvers = GMR.merge([
    resolversUserMutation,
    resolverLoginMutation
]);

export default mutationResolvers;