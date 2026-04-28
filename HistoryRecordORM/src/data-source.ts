import 'reflect-metadata'
import {DataSource} from 'typeorm'
import {Scene} from './entity/scene';
import {Cast} from './entity/cast';
import {Source} from './entity/source';
import {Archiver} from './entity/archiver';
import {Astron} from './entity/astron';
import {AstronGroup} from './entity/astronGroup';
import {CastGroup} from './entity/castGroup';
import {SourceGroup} from './entity/sourceGroup';
import {Series} from './entity/series';
import {LocationReliability} from './entity/locationReliability';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [Scene, Series, Cast, CastGroup, Source, SourceGroup, Astron, AstronGroup, Archiver, LocationReliability],
  migrations: [],
  subscribers: [],
})
