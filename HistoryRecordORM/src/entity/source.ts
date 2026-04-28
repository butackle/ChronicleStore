import {Column, Entity, ManyToMany, OneToMany} from 'typeorm'
import {Reliability} from './abstract/reliability';
import {SourceType} from '../type/sourceType';
import {SourceGroup} from './sourceGroup';
import {Scene} from './scene';

@Entity()
export class Source extends Reliability {
  @Column()
  name!: string

  @Column({
    type: 'enum',
    enum: SourceType
  })
  type!: SourceType

  @OneToMany(() => Scene, scene => scene.source)
  scenes!: Scene[]

  @ManyToMany(() => SourceGroup, sourceGroup => sourceGroup.sources)
  sourceGroup!: SourceGroup[]
}