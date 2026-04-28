import 'reflect-metadata'
import {AppDataSource} from '../data-source';

async function generateER() {
  await AppDataSource.initialize()

  const entities = AppDataSource.entityMetadatas
  console.log(entities)
}

generateER()