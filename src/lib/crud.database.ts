import { Db } from 'mongodb';

/**
 * Obtener un ID personalizado
 * @param database  Base de Datos
 * @param collection Coleccion donde buscamos el elemento
 * @param sort Ordenamos el elemento por '' y de Orden descendente
 * @returns
 */

export const asignDocumentid = async (
  database: Db,
  collection: string,
  sort: { createAT: -1 }
) => {
  // -> Comprobar el Ultimo Usuario Registrado para Asignar un ID propio aparte del de MONGODB
  const lastelement = await database
    .collection(collection)
    .find()
    .limit(1)
    .sort(sort)
    .toArray();
  if (lastelement.length === 0) {
    return 1;
  }
  return lastelement[0].id + 1;
};

export const findOneElement = async (
  database: Db,
  collection: string,
  filter: object
) => {
  return database.collection(collection).findOne(filter);
};

export const inserOneElement = async (
  database: Db,
  collection: string,
  document: object
) => {
  return database.collection(collection).insertOne(document);
};

export const inserManyElement = async (
  database: Db,
  collection: string,
  document: Array<object>
) => {
  return database.collection(collection).insertMany(document);
};

export const findElement = async(
    database: Db,
    collection: string,
    filter: object = {}
) => {
    return await database.collection( collection ).find( filter ).toArray();
};