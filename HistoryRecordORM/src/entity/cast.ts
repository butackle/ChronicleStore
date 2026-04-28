import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm'
import {CastType} from '../type/castType';
import {Reliability} from './abstract/reliability';
import {CastGroup} from './castGroup';

@Entity()
export class Cast extends Reliability {
  @PrimaryGeneratedColumn()
  id!: number

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

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}