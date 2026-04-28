import {Entity, JoinTable, ManyToMany} from 'typeorm'
import {Group} from './abstract/group';
import {Astron} from './astron';

@Entity()
export class AstronGroup extends Group {
  @ManyToMany(() => Astron, astron => astron.astronGroup)
  @JoinTable()
  astrons!: Astron[]
}


