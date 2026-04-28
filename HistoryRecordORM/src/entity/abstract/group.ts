import {Column, Entity} from 'typeorm'
import {Base} from './_base';

@Entity()
export class Group extends Base {
  // Sticky notes for understanding people (not the actual name)
  @Column()
  label!: string

  @Column()
  description!: string
}
