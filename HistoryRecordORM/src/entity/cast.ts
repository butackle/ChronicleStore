import {Column, Entity, ManyToMany} from 'typeorm'
import {CastType} from '../enum/castType';
import {Reliability} from './abstract/reliability';
import {CastGroup} from './castGroup';

@Entity()
export class Cast extends Reliability {
  @Column()
  name!: string

  // Type of celestial body (e.g., star, planet, moon)
  @Column({
    type: 'enum',
    enum: CastType
  })
  type: CastType

  @ManyToMany(() => CastGroup, castGroup => castGroup.casts)
  castGroup!: CastGroup[]
}