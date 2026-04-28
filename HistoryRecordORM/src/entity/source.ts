import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Reliability} from './abstract/reliability';
import {SourceType} from '../type/sourceType';

@Entity()
export class Source extends Reliability {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({
    type: 'enum',
    enum: SourceType
  })
  type!: SourceType

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}