import {Column, Entity, ManyToMany} from 'typeorm'
import {AstronType} from '../type/astronType';
import {AstronGroup} from './astronGroup';
import {Base} from './abstract/_base';

@Entity()
export class Astron extends Base {
  @Column()
  name!: string

  // Type of celestial body (e.g., star, planet, moon)
  @Column({
    type: 'enum',
    enum: AstronType,
    default: null,
    nullable: true,
  })
  type!: AstronType

  // Distance from Earth in light-years
  @Column('float')
  distanceLy!: number

  // Datetime when the distance to the celestial body was measured
  @Column()
  observedAt!: Date

  @ManyToMany(() => AstronGroup, astronGroup => astronGroup.astrons)
  astronGroup!: AstronGroup[]
}