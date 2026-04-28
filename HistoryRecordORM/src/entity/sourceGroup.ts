import {Entity, JoinTable, ManyToMany} from 'typeorm'
import {Source} from './source';

@Entity()
export class SourceGroup {
  @ManyToMany(() => Source, source => source.sourceGroup)
  @JoinTable()
  sources!: number[]
}
