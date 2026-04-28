import {Column, Entity, JoinTable, ManyToMany} from 'typeorm'
import {Group} from './abstract/group';
import {Astron} from './astron';
import {AstronGroupType} from '../type/astronGroupType';

@Entity()
export class AstronGroup extends Group {
  @ManyToMany(() => Astron, astron => astron.astronGroup)
  @JoinTable()
  astrons!: Astron[]

  @Column({
    type: 'enum',
    enum: AstronGroupType
  })
  type: AstronGroupType
}


