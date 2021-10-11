import GMR from 'graphql-merge-resolvers';
import resolversUserMutation from './createuser';

const mutationResolvers = GMR.merge([
    resolversUserMutation
]);

export default mutationResolvers;