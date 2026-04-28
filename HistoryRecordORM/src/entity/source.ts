import {Column, Entity, ManyToMany} from 'typeorm'
import {Reliability} from './abstract/reliability';
import {SourceType} from '../type/sourceType';
import {SourceGroup} from './sourceGroup';

@Entity()
export class Source extends Reliability {
  @Column()
  name!: string

  @Column({
    type: 'enum',
    enum: SourceType
  })
  type!: SourceType

  @ManyToMany(() => SourceGroup, sourceGroup => sourceGroup.sources)
  sourceGroup!: SourceGroup[]
}