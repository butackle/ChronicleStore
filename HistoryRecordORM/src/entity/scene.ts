import {Column, Entity, TreeChildren} from 'typeorm'
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
  @Column(() => Astron)
  astron!: Astron

  // Coordinates of the event on the celestial body
  @Column({
    type: 'json',
  })
  coordinates!: Coordinates[]

  // Cast involved in the event
  @TreeChildren()
  casts!: Cast[]

  // Source of the event
  @Column(() => Source)
  source!: Source

  // start position of the source
  @Column()
  startPosition!: number

  // end position of the source
  @Column()
  endPosition!: number

  // Archiver who recorded the scene
  @Column(() => Archiver)
  archiver!: Archiver
}
