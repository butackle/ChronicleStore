import {Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, TreeChildren} from 'typeorm'
import {Cast} from './cast';
import {Source} from './source';
import {Archiver} from './archiver';
import {Reliability} from './abstract/reliability';
import {Series} from './series';
import {LocationReliability} from './locationReliability';

@Entity()
export class Scene extends Reliability {
  // Time of the event
  @Column()
  time!: Date

  // Location of the event with reliability
  @OneToMany(() => LocationReliability, locationReliability => locationReliability.scene)
  locationReliabilities!: LocationReliability[]

  // Cast involved in the event
  @TreeChildren()
  casts!: Cast[]

  // Source of the event
  @OneToOne(() => Source)
  @JoinColumn()
  source!: Source

  // start position of the source
  @Column({
    type: 'json'
  })
  startPosition!: object

  // end position of the source
  @Column({
    type: 'json'
  })
  endPosition!: object

  // Summery of the event
  @Column()
  summery!: string

  // Archiver who recorded the scene
  @OneToOne(() => Archiver)
  @JoinColumn()
  archiver!: Archiver

  @ManyToMany(() => Series, series => series.scenes)
  series!: Series[]
}
