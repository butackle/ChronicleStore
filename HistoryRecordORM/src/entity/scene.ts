import {Column, Entity, JoinColumn, OneToOne, TreeChildren} from 'typeorm'
import {Cast} from './cast';
import {Source} from './source';
import {Astron} from './astron';
import {Archiver} from './archiver';
import {Reliability} from './abstract/reliability';
import {Coordinates} from '../type/coordinates';

@Entity()
export class Scene extends Reliability {
  // Time of the event
  @Column()
  time!: Date

  // Celestial body where the event took place
  @OneToOne(() => Astron)
  @JoinColumn()
  astron!: Astron

  // Presumed location of the event
  @Column({
    type: 'json',
  })
  coordinates!: Coordinates[]

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
}
