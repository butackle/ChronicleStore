import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {CastType} from '../type/castType';
import {Reliability} from './abstract/reliability';

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

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}