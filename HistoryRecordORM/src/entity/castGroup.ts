import {Entity, JoinTable, ManyToMany} from 'typeorm'
import {Group} from './abstract/group';
import {Cast} from './cast';

@Entity()
export class CastGroup extends Group {
  @ManyToMany(() => Cast, cast => cast.castGroup)
  @JoinTable()
  casts!: Cast[]
}
