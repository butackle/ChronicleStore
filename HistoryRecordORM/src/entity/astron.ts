import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {AstronType} from '../type/astronType';

@Entity()
export class Astron {
  @PrimaryGeneratedColumn()
  id!: number

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

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}