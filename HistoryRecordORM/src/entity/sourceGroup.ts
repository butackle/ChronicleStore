import {Entity, JoinTable, ManyToMany} from 'typeorm'
import {Source} from './source';
import {Group} from './abstract/group';

@Entity()
export class SourceGroup extends Group {
  @ManyToMany(() => Source, source => source.sourceGroup)
  @JoinTable()
  sources!: number[]
}
