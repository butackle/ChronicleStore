import {Column, Entity} from 'typeorm'
import {Reliability} from './abstract/reliability'
import {ArchiverType} from '../enum/archiverType';

@Entity()
export class Archiver extends Reliability {
  @Column()
  name!: string

  @Column({
    type: 'enum',
    enum: ArchiverType
  })
  type!: ArchiverType
}