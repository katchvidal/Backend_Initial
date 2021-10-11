import { loadFilesSync }  from '@graphql-tools/load-files';
import { mergeTypeDefs }  from '@graphql-tools/merge';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import 'graphql-import-node';
import resolvers from '../resolvers';


const loadedFiles = loadFilesSync(`${__dirname}/**/*.graphql`);
const typeDefs = mergeTypeDefs(loadedFiles);


const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;