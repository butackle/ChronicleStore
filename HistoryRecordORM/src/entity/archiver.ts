import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Reliability} from './abstract/reliability'
import {ArchiverType} from '../type/archiverType';

@Entity()
export class Archiver extends Reliability {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({
    type: 'enum',
    enum: ArchiverType
  })
  type!: ArchiverType

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}