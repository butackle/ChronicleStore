import {Column, Entity, JoinTable, ManyToMany} from 'typeorm'
import {Group} from './abstract/group';
import {Cast} from './cast';
import {CastGroupType} from '../enum/castGroupType';

@Entity()
export class CastGroup extends Group {
  @ManyToMany(() => Cast, cast => cast.castGroup)
  @JoinTable()
  casts!: Cast[]

  @Column({
    type: 'enum',
    enum: CastGroupType
  })
  type: CastGroupType = CastGroupType.DEFAULT
}
