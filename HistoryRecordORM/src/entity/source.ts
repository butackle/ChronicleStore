import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import {Reliability} from './abstract/reliability';
import {SourceType} from '../type/sourceType';
import {SourceGroup} from './sourceGroup';

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

  @ManyToMany(() => SourceGroup, sourceGroup => sourceGroup.sources)
  sourceGroup!: SourceGroup[]

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}