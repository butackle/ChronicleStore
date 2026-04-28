import {Check, Column, Entity, JoinColumn, ManyToOne, OneToOne} from 'typeorm'
import {Astron} from './astron';
import {Reliability} from './abstract/reliability';
import {Scene} from './scene';

@Entity()
@Check(`"latitude" >= -90 AND "latitude" <= 90`)
@Check(`"longitude" >= -180 AND "longitude" <= 180`)
export class LocationReliability extends Reliability {
  @ManyToOne(() => Scene)
  scene!: Scene

  // Celestial body where the event took place
  @OneToOne(() => Astron)
  @JoinColumn()
  astron!: Astron

  @Column()
  latitude!: number

  @Column()
  longitude!: number
}
