import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id!: number

  // Sticky notes for understanding people (not the actual name)
  @Column()
  label!: string

  @Column()
  description!: string

  @Column()
  createdAt!: Date

  @Column()
  updatedAt!: Date
}
