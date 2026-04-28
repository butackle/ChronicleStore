import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Reliability} from './abstract/reliability';

@Entity()
export class Source extends Reliability {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string
}